import React, {useContext} from 'react';
import {MovieContext} from '../../context/MovieContext';
import styles from './Input.module.css';

const Input = () => {

    const {inputText, setInputText} = useContext(MovieContext);

    return (
        <input 
            className={styles.input} 
            onChange={(e) => setInputText(e.target.value)} 
            type="text" 
            value={inputText}
        />
    )
}

export default Input;
