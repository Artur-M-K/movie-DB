import React from 'react';
import styles from './NoFound.module.css';

const NoFound = () => {
    return (
        <div className={styles.container}>
            <p>Unfortunatelly can't find that in the database.</p>
            <p>Please, try the different name</p>
        </div>
    )
}

export default NoFound;
