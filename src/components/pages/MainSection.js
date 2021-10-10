import React, { useContext, useEffect } from "react";
import { MovieContext } from "../../context/MovieContext";
import Cart from "../details/Cart";
import styles from "./MainSection.module.css";

const MainSection = () => {
  const { movies } = useContext(MovieContext);

  useEffect(() => {
    localStorage.setItem("searchData", JSON.stringify(movies));
  }, [movies]);

  const moviesData = JSON.parse(localStorage.getItem("searchData"));

  let check = moviesData !== null ? moviesData : movies;
  
  const moviesInfo = check.map((movie) => (
    <Cart
      key={movie.imdbID}
      title={movie.Title}
      poster={movie.Poster}
      id={movie.imdbID}
    />
  ));
  return <ul className={styles.container}>{moviesInfo}</ul>;
};

export default MainSection;
