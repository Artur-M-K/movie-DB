import React from 'react';
import styles from './Details.module.css'

const Details = ({data}) => {
    return (
        <div className={styles.container}>
            <p><span>Director:</span> {data.Director}</p>
            <p><span>Writer:</span> {data.Writer}</p>
            <p><span>Actors:</span> {data.Actors}</p>
            <p><span>Country:</span> {data.Country}</p>
        </div>
    )
}

export default Details;
