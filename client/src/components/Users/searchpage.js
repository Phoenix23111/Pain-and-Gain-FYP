import React, { useState } from "react";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    // Mock search results
    const mockResults = [
      { id: 1, title: "Result 1" },
      { id: 2, title: "Result 2" },
      { id: 3, title: "Result 3" },
    ];

    const filteredResults = mockResults.filter((result) =>
      result.title.toLowerCase().includes(query.toLowerCase())
    );

    setResults(filteredResults);
  };

  return (
    <div className="p-4">
      <div className="flex  p-2">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          className="flex-grow p-2 border border-gray-300 rounded-md"
          placeholder="Search..."
        />
        <button
          onClick={handleSearch}
          className="ml-2 p-2 bg-blue-500 text-white rounded-md"
        >
          Search
        </button>
      </div>
      <div className="mt-4">
        {results.length > 0 ? (
          <ul>
            {results.map((result) => (
              <li key={result.id} className="p-2 border-b border-gray-300">
                {result.title}
              </li>
            ))}
          </ul>
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
