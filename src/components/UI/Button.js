import React from 'react';
import styles from './Button.module.css';

const Button = ({onClick, name, className, isActive}) => {
    console.log(isActive)
    return (
        <div >
            <button 
                className={className ? `${styles.button} + ${styles.mobile}` : `${styles.button}`} 
                onClick={onClick}>
                    {name}
            </button>
        </div>
    )
}

export default Button;
