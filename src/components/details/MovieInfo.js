import React from 'react';

import Ratings from './Ratings';
import styles from './MovieInfo.module.css';

const MovieInfo = ({data}) => {
    
    return (
        <div className={styles.container}>
            <div className={styles.movie}>
                <div className={styles.title}><h1>{data.Title}</h1></div>
                <div className={styles.info}>
                    <p>year: <span>{data.Year}</span></p>
                    <p>time: <span>{data.Runtime}</span></p>
                    <p>rate: <span>{data.Rated}</span></p>
                    <p>genre: <span>{data.Genre}</span></p>
                </div>
                <div>details</div>
                <div className={styles.plot}>
                    <p className={styles.header}>description:</p>
                    <p className={styles.text}>{data.Plot}</p>
                </div>
            </div>
            <div className={styles.moviePoster}>
                <img src={data.Poster} alt={data.Title} />
                <Ratings data={data.Ratings}/>
            </div>
        </div>
    )
}

export default MovieInfo;
