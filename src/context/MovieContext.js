import React, { useState, createContext } from "react";

export const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [inputText, setInputText] = useState("");
  const [movies, setMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalResult, setTotalResult] = useState(0);

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
        setPageNumber
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
