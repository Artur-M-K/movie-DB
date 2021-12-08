import React from 'react';
import styles from './Button.module.css';

const Button = ({onClick, name, className}) => {
    
    const buttonClass = className === 'back' ? styles.back: styles.mobile;
    return (
        
            <button 
                className={className ? `${styles.button} + ${buttonClass}` : `${styles.button}`} 
                onClick={onClick}>
                    {name}
            </button>
        
    )
}

export default Button;
