import React from 'react';
import imdb from '../../assets/Internet Movie Database.png';
import metacritic from '../../assets/Metacritic.png';
import rotten from '../../assets/Rotten Tomatoes.png';
import styles from './Ratings.module.css';

const Ratings = ({data}) => {
    const rating = data.map(item => {
        switch(item.Source) {
            case 'Internet Movie Database':
               return <div key={1} className={styles.source_rating}>
                <img src={imdb} alt="" className={styles.image}/>
                <p>{item.Value}</p>
                </div>
                
            case 'Metacritic':
                return <div key={2} className={styles.source_rating}>
                <img src={metacritic} alt="" className={styles.image}/>
                <p>{item.Value}</p>
                </div>
                
            case 'Rotten Tomatoes':
               return <div key={3} className={styles.source_rating}>
                <img src={rotten} alt="" className={styles.image}/>
                <p>{item.Value}</p>
                </div>
                
            default:
                return null;            
        }
        
    })
    return (
        <div>
            <div className={styles.rating}>{rating}</div>
        </div>
    )
}

export default Ratings;
