import React, { useContext, useEffect } from "react";
import { MovieContext } from "../../context/MovieContext";
import Cart from "../details/Cart";
import ReactPaginate from 'react-paginate';
import styles from "./MainSection.module.css";

const MainSection = () => {
  const { inputText, movies, totalResult, setPageNumber, setMovies, setTotalResult, pageNumber } = useContext(MovieContext);

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

  const handlePageClick = (data) => {
    setPageNumber((prev) => prev = data.selected)
  }

  const pageResultHandler = () => {
    fetch(`https://movie-database-imdb-alternative.p.rapidapi.com/?s=${inputText}&r=json&type=movie&page=${pageNumber+1}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "1847211eddmshfc083e87d4075d5p1ea54fjsnf450286c9eab",
        "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"
      }
        })
        .then(response => response.json())
          .then(data => {
            setMovies(data.Search)
            setTotalResult(data.totalResults);
            console.log(data.Search)
          })
        .catch(err => {
          console.error(err);
        });
      }

  console.log(totalResult)

  useEffect(() => {
      pageResultHandler()
  },[pageNumber]);

  console.log(pageNumber)

  return (
    <>
    <ul className={styles.container}>{moviesInfo}</ul>
    <ReactPaginate
          previousLabel={'prev'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={Math.ceil(totalResult/10)}
          marginPagesDisplayed={1}
          pageRangeDisplayed={2}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
    </>
  )
  
};

export default MainSection;
