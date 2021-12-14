import React, { useState, createContext } from "react";

export const MovieContext = createContext();
let apiKey;
const MovieProvider = ({ children }) => {
  const [inputText, setInputText] = useState("");
  const [movies, setMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [totalResult, setTotalResult] = useState(0);
  const [isMovieInput, setIsMovieInput] = useState(false);
  // const apiKey = process.env.REACT_APP_MOVIEDB_API_KEY;
  
  
  fetch(`../../.netlify/functions/api-key`)
    .then((response) => response.json())
    .then((json) => {
      apiKey = json.api;
    });
    console.log(apiKey)
  return (
    <MovieContext.Provider
      value={{
        inputText,
        setInputText,
        movies,
        setMovies,
        totalResult,
        setTotalResult,
        pageNumber,
        setPageNumber,
        apiKey,
        isMovieInput,
        setIsMovieInput,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
