import React from 'react';
import styles from './Button.module.css';

const Button = ({onClick, name}) => {

    return (
        <div >
            <button 
                className={styles.button} 
                onClick={onClick}>
                    {name}
            </button>
        </div>
    )
}

export default Button;
