import { useState } from "react";
import Form from "../Form";

const MovieDetail = ({ product }) => {
  const [someText, setSomeText] = useState("");

  const getFormData = (text) => {
    setSomeText(text);
  };

  return (
    <div key={product.id} className="flex flex-col justify-center items-center">
      <h2>{product.title}</h2>
      <h3>{product.release_date}</h3>
      <img
        src={`https://image.tmdb.org/t/p/w185/${product.poster_path}`}
        alt={`${product.title} Poster`}
        className=" w-96 h-96"
      />
      <p>{product.overview}</p>
      <Form action={getFormData} />
      <p>{someText}</p>
      <meter
        min="0"
        max="10"
        className=" w-80"
        value={product.vote_average}
      ></meter>
    </div>
  );
};
export default MovieDetail;
