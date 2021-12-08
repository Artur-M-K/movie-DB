import React, {useContext, useRef} from 'react';
import {MovieContext} from '../../context/MovieContext';
import styles from './Input.module.css';

const Input = () => {

    const {inputText, setInputText} = useContext(MovieContext);
    const ref = useRef('')
    // inputText && console.log(ref.current.value, inputText)
    return (
        <input
            ref={ref} 
            className={styles.input} 
            onChange={() => setInputText(ref.current.value)} 
            type="text" 
            value={inputText}
        />
    )
}

export default Input;
