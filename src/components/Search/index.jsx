import React, { useState } from "react";

const Search = ({ action }) => {
  const [movieSearch, setMovieSearch] = useState("");

  const handleChange = (e) => {
    setMovieSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    action(movieSearch);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        name="search"
        onChange={handleChange}
        value={movieSearch}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
