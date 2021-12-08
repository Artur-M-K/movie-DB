import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "../../context/MovieContext";
import Button from "../UI/Button";
import MovieInfo from "../details/MovieInfo";
import Spinner from "../UI/Spinner";

const MovieDetail = (props) => {

  const movieID = props.match.params.id;
  const {apiKey} = useContext(MovieContext);
  const [movieInfo, setMovieInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // setIsLoading(true);
    const getMovieDetail = () => {
      fetch(
        `https://movie-database-imdb-alternative.p.rapidapi.com/?r=json&i=${movieID}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
            "x-rapidapi-key": apiKey,
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

  // console.log(isLoading);

  const movieData = (
    <>
      <MovieInfo data={movieInfo} isActive={isActive}/>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button name={"BACK"} className={'back'}/>
      </Link>
      <Button name={isActive? '-' : '+'} className={'mobile'} onClick={() => setIsActive(!isActive)} />
    </>
  );

  return <div>{isLoading ? <Spinner /> : movieData}</div>;
};

export default MovieDetail;
