// SearchResults.js
import React from 'react';

function SearchResults({ results }) {
  return (
    <div>
      <h2>Search Results</h2>
      {results.length > 0 ? (
        <ul>
          {results.map((result, index) => (
            <li key={index}>
              <h3>{result.title}</h3>
              <p>{result.description}</p>
              <img src={result.thumbnail} alt={result.title} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
}

export default SearchResults;
