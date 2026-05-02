require("dotenv").config();
const colors = require("colors");
const connectToMongo = require("./db");
const express = require("express");
const natural = require("natural");
const stemmer = natural.PorterStemmer;
const UserModel = require("./models/Users");
const app = express();
const cors = require("cors");
const { errorMiddleware } = require("./middleware/error");
const bodyParser = require("body-parser");
connectToMongo();

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
const port = process.env.port;

////////

const axios = require("axios");

app.post("/api/chatbot", async (req, res) => {
  const userMessage = req.body.message;
  console.log("\n\n\n", userMessage, "\n\n\n");
  const apiKey = process.env.OPENAI_API_KEY;

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: userMessage }],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    const botResponse = response.data.choices[0].message.content.trim();
    res.json({ message: botResponse });
  } catch (error) {
    console.error(
      "Error from OpenAI API:",
      error.response ? error.response.data : error.message
    );
    res.status(500).json({ error: "Failed to get response from OpenAI API" });
  }
});

////////

// available routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/v1/user", require("./routes/user"));

app.use("/api/v1/product", require("./routes/products"));

async function searchVideos(query, index) {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const apiUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
    query
  )}&maxResults=30&type=video&key=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    if (data.items && data.items.length > 0) {
      const searchResults = data.items.map((item) => ({
        id: item.id.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnail: item.snippet.thumbnails.medium.url,
      }));
      const a = await promptUserToSelectPlaylist(searchResults, index);
      console.log("dd", a);
      return a;
    } else {
      console.log("No playlists found.");
      return [];
    }
  } catch (error) {
    console.error("Error fetching playlists:", error);
    return [];
  }
}
// Function to prompt user to select a playlist

async function promptUserToSelectPlaylist(playlists, answer) {
  console.log("Answer:", answer);
  const playlistIndex = parseInt(answer);
  console.log(answer);
  if (
    isNaN(playlistIndex) ||
    playlistIndex < 0 ||
    playlistIndex >= playlists.length
  ) {
    // console.log('Invalid input. Please enter a valid number.');
    //      // Return a meaningful response indicating the error
    // return { error: 'Invalid input. Please enter a valid number.' };
    console.log("Invalid input. Please enter a valid number.");
    return promptUserToSelectPlaylist(playlists, answer);
  } else {
    const selectedPlaylist = playlists[playlistIndex];
    console.log(`You selected: ${selectedPlaylist.title}`);
    // Now, recommend playlists based on the selected playlist
    const recommendedPlaylists = await recommendPlaylists(
      selectedPlaylist.title,
      playlists
    );
    // console.log("Recommended Playlists:", recommendedPlaylists);
    return recommendPlaylists;
  }
}
let results = null;
// Function to recommend playlists based on the clicked playlist
// Function to recommend playlists based on the clicked playlist
async function recommendPlaylists(userClickedPlaylist, playlists) {
  // Tokenize and stem the clicked playlist
  const tokenizer = new natural.WordTokenizer();
  const userClickedPlaylistTokens = tokenizer.tokenize(userClickedPlaylist);
  const userClickedPlaylistStemmed = userClickedPlaylistTokens
    .map((token) => stemmer.stem(token))
    .join(" ");

  // Calculate TF-IDF vectors for playlist titles and descriptions
  const tfidf = new natural.TfIdf();
  playlists.forEach((playlist) => {
    const playlistTitleTokens = tokenizer.tokenize(playlist.title);
    const playlistDescriptionTokens = tokenizer.tokenize(
      playlist.description || ""
    );
    const playlistTokens = [
      ...playlistTitleTokens,
      ...playlistDescriptionTokens,
    ];
    const playlistStemmed = playlistTokens
      .map((token) => stemmer.stem(token))
      .join(" ");
    tfidf.addDocument(playlistStemmed);
  });

  // Calculate cosine similarity between user's clicked playlist and all other playlists
  const similarities = playlists.map((playlist) => {
    let similarity = 0;
    tfidf.tfidfs(userClickedPlaylistStemmed, (index, measure) => {
      if (playlist.title === playlists[index].title) {
        similarity = measure;
      }
    });
    return similarity;
  });

  // Get top 3 recommended playlists
  const topIndices = similarities
    .map((similarity, index) => ({ index, similarity }))
    .sort((a, b) => b.similarity - a.similarity) // Sort by similarity in descending order
    .slice(0, 3) // Exclude the clicked playlist itself
    .map((item) => item.index);
  console.log(
    "Final Result",
    topIndices.map((index) => playlists[index])
  );
  results = await topIndices.map((index) => playlists[index]);
  return topIndices.map((index) => playlists[index]);
}
app.post("/recommend", async (req, res) => {
  const { searchquery, selectindex } = req.body;
  try {
    console.log(searchquery, selectindex);
    const recommendedPlaylists = await searchVideos(searchquery, selectindex);
    res.json(results);
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/search", async (req, res) => {
  const { query } = req.query;
  try {
    const searchResults = await searchVideos(query);
    if (searchResults.length > 0) {
      res.json(searchResults);
    } else {
      res
        .status(404)
        .json({ message: `No playlists found for the query: ${query} ` });
    }
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.use("/uploads", express.static("uploads"));
app.use(errorMiddleware);

app.listen(port, () => {
  console.log("Server Runs Perfectly at port:".cyan, `${port}`.yellow);
});
