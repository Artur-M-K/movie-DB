import React from "react";

import Ratings from "./Ratings";
import Details from "./Details";
import Plot from "./Plot";
import GeneralInfo from "./GeneralInfo";
import styles from "./MovieInfo.module.css";
import AdditionalInfo from "./AdditionalInfo";

const MovieInfo = ({ data, isActive }) => {
  // console.log(data);
  // console.log(isActive)
  return (
    <div className={styles.container}>
      <div className={isActive ? `${styles.movie} + ${styles.activeMovie}`: `${styles.movie}`}>
        <div className={styles.title}>
          <h1>{data.Title}</h1>
        </div>
        <GeneralInfo data={data} />
        <Details data={data} />
        <Plot data={data} />
        <AdditionalInfo data={data}/>
      </div>
      <div className={isActive ? `${styles.moviePoster} + ${styles.active}` : `${styles.moviePoster}`}>
        <img src={data.Poster} alt={data.Title} />
        <Ratings data={data.Ratings} />
      </div>
    </div>
  );
};

export default MovieInfo;
