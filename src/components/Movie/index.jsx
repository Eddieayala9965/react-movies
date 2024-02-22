import { useState, useEffect } from "react";
import MovieDetail from "../MovieDetail";

const Movie = () => {
  const token = "3766a3326b6bf94cf2944786431d0e25";
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=${token}`;
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "response/json",
      },
    };
    const response = await fetch(url, options);
    const data = await response.json();
    console.log("here is your data", data.results);
    setData(data.results);
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(data);
  return (
    <>
      <h1>Movies Data</h1>
      {data.map((item) => {
        return <MovieDetail product={item} key={data.id} />;
      })}
    </>
  );
};

export default Movie;
