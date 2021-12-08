import React, { useContext, useEffect, useState, useCallback } from "react";
import { MovieContext } from "../../context/MovieContext";
import Cart from "../details/Cart";
import ReactPaginate from 'react-paginate';
import Spinner from "../UI/Spinner";
import styles from "./MainSection.module.css";

const MainSection = () => {
  const { inputText, movies, totalResult, setPageNumber, setMovies, setTotalResult, pageNumber, apiKey } = useContext(MovieContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem("searchData", JSON.stringify(movies));
  }, [movies]);

  const moviesData = JSON.parse(localStorage.getItem("searchData"));
  console.log(moviesData)
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
    setPageNumber(data.selected)
  }

  const pageResultHandler = useCallback(() => {
    localStorage.clear();
    fetch(`https://movie-database-imdb-alternative.p.rapidapi.com/?s=${inputText}&r=json&type=movie&page=${pageNumber+1}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": apiKey,
        "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"
      }
        })
        .then(response => response.json())
          .then(data => {
            setMovies(data.Search)
            setTotalResult(data.totalResults);
            // console.log(data.Search)
            setIsLoading(false)
          })
        .catch(err => {
          console.error(err);
        });
      },[apiKey, inputText, pageNumber, setMovies, setTotalResult]);
      
  // console.log(totalResult)

  useEffect(() => {
    setIsLoading(true);
      pageResultHandler();
      
    return function cleanup() {
       setIsLoading(false)
    }
  },[pageNumber, pageResultHandler]);

  // console.log(pageNumber)

  const moviePageInfo = <>
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
          initialPage={(pageNumber)}
          forcePage={(pageNumber)}
        />
  </>

  return (
    <>
    {!isLoading ? moviePageInfo : <Spinner/>}
    </>
  )
  
};

export default MainSection;
