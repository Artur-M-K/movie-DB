import React from 'react';
import ReactDOM from 'react-dom';
import MovieProvider from './context/MovieContext';
import App from './App';


ReactDOM.render(<MovieProvider><App /></MovieProvider>,document.getElementById('root'));

