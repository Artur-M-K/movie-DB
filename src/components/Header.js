import React, {useContext} from "react";
import Input from "./UI/Input";
import Button from "./UI/Button";
import { MovieContext } from '../context/MovieContext';
import styles from "./Header.module.css";

const Header = () => {

  const {inputText, setInputText} = useContext(MovieContext);

  const {setMovies} = useContext(MovieContext);

  const handleSubmit = () => {
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
          })
        .catch(err => {
          console.error(err);
        });
  }
  setInputText('');
}

  return (
    <div className={styles.container}>
      <h1 className={styles.logo}>Header</h1>
      <div className={styles.search}>
        <Input />
        <Button onClick={handleSubmit}/>
      </div>
    </div>
  );
};

export default Header;
