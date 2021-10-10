import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import MovieInfo from "../details/MovieInfo";

const MovieDetail = (props) => {
//   console.log(props.match.params.id);
  const movieID = props.match.params.id;
  const [movieInfo, setMovieInfo] = useState({});

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
      .then(response => response.json())
        .then((data) => {
          setMovieInfo(data);
      })
      .catch(err => {
        console.error(err);
      });
  };

  useEffect(() =>{
      getMovieDetail();
  },[movieID]);

  return (
    <div>
      <MovieInfo data={movieInfo}/>
      <Link to="/" style={{ textDecoration: 'none' }}><Button name={'BACK'}/></Link>
    </div>
  );
};

export default MovieDetail;
