import React, { useState, useEffect } from "react";
import MovieDetail from "../MovieDetail";
import Search from "../Search";

const Movie = () => {
  const token = "3766a3326b6bf94cf2944786431d0e25";
  const [data, setData] = useState([]);

  const fetchData = async (query = "") => {
    console.log({ query });
    const url = `https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=1&api_key=${token}`;
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(url, options);
    const result = await response.json();
    console.log("here is your data", result.results);
    setData(result.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Movies Data</h1>
      <Search action={fetchData} />
      {data.map((item) => (
        <MovieDetail product={item} key={item.id} />
      ))}
    </>
  );
};

export default Movie;
