import React, {useState, createContext} from 'react';

export const MovieContext = createContext();

const MovieProvider = ({children}) => {

    const [inputText, setInputText] = useState('');
    const [movies, setMovies] = useState([]);

    return (
        <MovieContext.Provider value={{inputText, setInputText, movies, setMovies}}>
            {children}
        </MovieContext.Provider>
    )
}

export default MovieProvider;

