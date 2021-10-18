import React from 'react';
import styles from './AdditionalInfo.module.css';

const AdditionalInfo = ({data}) => {
    return (
        <div className={styles.container}>
            <p><span>Released Date:</span> {data.Released}</p>
            <p><span>BoxOffice:</span> {data.BoxOffice}</p>
            <p><span>Awards:</span> {data.Awards}</p>
            <p><span>IMDB votes:</span> {data.imdbVotes} votes</p>
        </div>
    )
}

export default AdditionalInfo;
