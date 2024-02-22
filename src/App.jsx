import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Movie from "./components/Movie";

function App() {
  const [someText, setSomeText] = useState("");

  const getFormData = (text) => {
    setSomeText(text);
  };
  return (
    <>
      <Movie />
    </>
  );
}

export default App;
