import React from 'react';
import styles from './Plot.module.css';

const Plot = ({data}) => {
    return (
        <div className={styles.plot}>
        <p className={styles.header}>description:</p>
        <p className={styles.text}>{data.Plot}</p>
    </div>
    )
}

export default Plot;
