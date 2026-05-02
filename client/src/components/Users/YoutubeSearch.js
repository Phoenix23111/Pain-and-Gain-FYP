import React, { useState } from "react";
import axios from "axios";

const YouTubeSearch = () => {
  const [query, setQuery] = useState("");
  const [videos, setVideos] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [recommendedVideos, setRecommendedVideos] = useState([]);

  const searchYouTube = async () => {
    const filterWords = [
      // Exercise
      "exercise",
      "workout",
      "training",
      "routine",
      "physical activity",
      "fitness regimen",
      "exercise program",
      "cardio",
      "strength training",
      "aerobics",
      "yoga",
      "pilates",
      "crossfit",
      "calisthenics",
      "stretching",
      "hiit",
      "high-intensity interval training",

      // Fitness
      "fitness",
      "health",
      "wellness",
      "strength",
      "endurance",
      "flexibility",
      "cardiovascular",
      "muscle building",
      "weight loss",
      "nutrition",
      "diet",
      "bodybuilding",
      "sports performance",
      "rehabilitation",
      "active lifestyle",
      "well-being",
      "personal training",
      "group fitness",
      "fitness goals",
      "fitness journey",
      "gym routine",
      "exercise habits",
      "fitness motivation",
      "fitness tips",
      "fitness advice",
      "fitness plan",
      "fitness schedule",

      // Physiotherapy
      "physiotherapy",
      "rehabilitation",
      "therapy",
      "injury recovery",
      "mobility",
      "flexibility exercises",
      "pain management",
      "rehabilitation exercises",
      "physical therapy",
      "injury prevention",
      "functional movement",
      "posture correction",
      "range of motion",
      "manual therapy",
      "balance exercises",
      "strengthening exercises",
      "occupational therapy",
      "movement therapy",
      "rehab program",
      "recovery exercises",
      "joint mobilization",
      "soft tissue therapy",
      "therapeutic exercise",
      "sports injury therapy",
      "physical rehabilitation",
      "post-surgery recovery",
      "pain relief exercises",

      // Gym
      "gym",
      "fitness center",
      "health club",
      "workout facility",
      "exercise studio",
      "training center",
      "gymnasium",
      "fitness studio",
      "weight room",
      "exercise room",
      "workout space",
      "exercise facility",
      "gym equipment",
      "personal training",
      "group fitness",
      "fitness classes",
      "weightlifting",
      "treadmill",
      "elliptical",
      "stationary bike",
      "free weights",
      "resistance training",
      "strength training equipment",
      "cardio machines",
      "gym membership",
      "gym workout",
      "fitness routine",
      "gym schedule",
      "gym motivation",
      "fitness equipment",
      "workout classes",
      "gym tips",
      "gym advice",
      "exercise machines",
      "gym exercises",
      "gym plan",
      "gym goals",
    ]; // Filter words
    const filterQuery = filterWords.join("|");

    if (!query.match(new RegExp(filterQuery, "i"))) {
      console.log("Search query doesn't contain any filter words");
      setVideos([]);
      setNotFound(true);
      return;
    }

    try {
      const response = await axios.get(
        "https://www.googleapis.com/youtube/v3/search",
        {
          params: {
            part: "snippet",
            maxResults: 30,
            key: "AIzaSyBuowXiQJ6tSydwYzVlkeXlbGjtWZOTIb4", // Replace with your actual API key
            q: query,
          },
        }
      );
      setVideos(response.data.items);
      setNotFound(false);
    } catch (error) {
      console.error("Error searching YouTube:", error);
    }
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchYouTube();
  };

  const handleVideoClick = async (videoId, index) => {
    console.log("Video index:", index);
    console.log("Search query:", query);
    setSelectedVideo(videoId);
    // Call the recommend API
    try {
      const response = await axios.post("http://localhost:3001/recommend", {
        searchquery: query,
        selectindex: index,
      });
      setRecommendedVideos(response.data);
    } catch (error) {
      console.error("Error fetching recommendations:", error);
    }
  };

  const handleRecommendedVideoClick = (videoId) => {
    setSelectedVideo(videoId);
  };

  const handleCloseVideo = () => {
    setSelectedVideo(null);
    setRecommendedVideos([]);
  };

  const handleKeyPressed = (e) => {
    if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="flex flex-col p-5">
      <div>
        <div className="flex ">
          <input
            type="text"
            value={query}
            onChange={handleChange}
            className="flex-grow p-2 border border-gray-300 rounded-md"
            placeholder="Search..."
            onKeyPress={handleKeyPressed}
          />
          <button
            onClick={handleSubmit}
            className="ml-2 p-2 bg-blue-500 text-white rounded-md"
          >
            Search
          </button>
        </div>
      </div>
      <div>
        <div className="flex flex-col mt-3 gap-y-10">
          {notFound && <p>No videos found for the given search query.</p>}

          {!selectedVideo && (
            <>
              <div className="text-bold text-lg mt-10">Search Results:</div>
              <div className="flex flex-col gap-y-10">
                {videos.map((video, index) => (
                  <div
                    className="flex items-center cursor-pointer p-2  hover:bg-gray-200"
                    key={video.id.videoId}
                    onClick={() => handleVideoClick(video.id.videoId, index)}
                  >
                    <img
                      src={video.snippet.thumbnails.default.url}
                      alt={video.snippet.title}
                      className="w-52 h-auto mr-4"
                    />
                    <div className="grid grid-rows-2">
                      <h2 className="text-lg font-semibold">
                        {video.snippet.title}
                      </h2>
                      <h2 className="text-normal ">
                        Description:{video.snippet.description}
                      </h2>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
        {selectedVideo && (
          <div className="flex flex-col items-center mt-1 justify-center">
            <button
              onClick={handleCloseVideo}
              className="fa fa-close text-bold text-white bg-red-800 rounded-full p-5 mb-5"
            >
              Close Video
            </button>
            <iframe
              width="860"
              height="500"
              src={`https://www.youtube.com/embed/${selectedVideo}`}
              frameBorder="0"
              allowFullScreen
              title="YouTube Video"
              className="mb-5"
            ></iframe>
          </div>
        )}

        {recommendedVideos.length > 0 && (
          <>
            <h2 className="mt-5 mb-1 text-red-800 font-bold text-2xl">
              Recommended Videos:
            </h2>
            <div className="grid grid-cols-3">
              {recommendedVideos.map((video) => (
                <div
                  key={video.id}
                  onClick={() => handleRecommendedVideoClick(video.id)}
                  className="flex flex-col  cursor-pointer p-2  hover:bg-gray-200"
                >
                  <img src={video.thumbnail} alt={video.title} />
                  <h3>{video.title}</h3>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default YouTubeSearch;
