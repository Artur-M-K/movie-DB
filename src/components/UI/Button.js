import React from 'react';
import styles from './Button.module.css';

const Button = ({onClick}) => {

    return (
        <div >
            <button 
                className={styles.button} 
                onClick={onClick}>
                    SEARCH
            </button>
        </div>
    )
}

export default Button;
