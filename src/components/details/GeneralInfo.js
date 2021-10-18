import React from 'react';
import styles from './GeneralInfo.module.css';

const GeneralInfo = ({data}) => {
    return (
        <div className={styles.info}>
                    <p>year: <span>{data.Year}</span></p>
                    <p>time: <span>{data.Runtime}</span></p>
                    <p>rate: <span>{data.Rated}</span></p>
                    <p>genre: <span>{data.Genre}</span></p>
                </div>
    )
}

export default GeneralInfo;
