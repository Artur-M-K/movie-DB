import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import MovieInfo from "../details/MovieInfo";
import Spinner from "../UI/Spinner";

const MovieDetail = (props) => {

  const movieID = props.match.params.id;
  const [movieInfo, setMovieInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // setIsLoading(true);
    const getMovieDetail = () => {
      fetch(
        `https://movie-database-imdb-alternative.p.rapidapi.com/?r=json&i=${movieID}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
            "x-rapidapi-key":
              "1847211eddmshfc083e87d4075d5p1ea54fjsnf450286c9eab",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          setMovieInfo(data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error(err);
        });
    };
    getMovieDetail();
  }, [movieID]);

  console.log(isLoading);

  const movieData = (
    <>
      <MovieInfo data={movieInfo} />
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button name={"BACK"} />
      </Link>
    </>
  );

  return <div>{isLoading ? <Spinner /> : movieData}</div>;
};

export default MovieDetail;
