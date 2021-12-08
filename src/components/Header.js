import React, {useContext} from "react";
import Input from "./UI/Input";
import Button from "./UI/Button";
import { MovieContext } from '../context/MovieContext';
import styles from "./Header.module.css";
import logo from '../assets/logo.png';

const Header = () => {
  
  const {inputText, setPageNumber, setTotalResult, setMovies, apiKey, setIsMovieInput} = useContext(MovieContext);
  // const {setResultNumber} = useContext(MovieContext)
  // const {setMovies} = useContext(MovieContext);

  const handleSubmit = () => {
    setPageNumber(0)
    if (inputText !== '') {
    fetch(`https://movie-database-imdb-alternative.p.rapidapi.com/?s=${inputText}&r=json&type=movie&page=1`, {
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
            setIsMovieInput(true);
          })
        .catch(err => {
          console.error(err);
        });
  }
  
  localStorage.clear();
}

  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logo} alt="" />
      <div className={styles.search}>
        <Input />
        <Button onClick={handleSubmit} name={'SEARCH'}/>
      </div>
    </div>
  );
};

export default Header;
