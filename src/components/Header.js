import React, {useContext} from "react";
import Input from "./UI/Input";
import Button from "./UI/Button";
import { MovieContext } from '../context/MovieContext';
import styles from "./Header.module.css";
import logo from '../assets/logo.png';

const Header = () => {

  const {inputText, setPageNumber, setTotalResult, setMovies} = useContext(MovieContext);
  // const {setResultNumber} = useContext(MovieContext)
  // const {setMovies} = useContext(MovieContext);
  
  const handleSubmit = () => {
    setPageNumber(0)
    if (inputText !== '') {
    fetch(`https://movie-database-imdb-alternative.p.rapidapi.com/?s=${inputText}&r=json&type=movie&page=1`, {
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
          })
        .catch(err => {
          console.error(err);
        });
  }
  
  localStorage.clear();
}

  return (
    <div className={styles.container}>
      {/* <h1 className={styles.logo}>Header</h1> */}
      <img className={styles.logo} src={logo} alt="" />
      <div className={styles.search}>
        <Input />
        <Button onClick={handleSubmit} name={'SEARCH'}/>
      </div>
    </div>
  );
};

export default Header;
