import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./components/Header";
import { MovieContext } from "./context/MovieContext";
import MainSection from "./components/pages/MainSection";
import MovieDetail from "./components/pages/MovieDetail";
import NoFound from "./components/details/NoFound";
import NotFound from "./components/pages/NotFound";
import "./App.css";


const App = () => {
  
  const { movies, inputText, isMovieInput } = useContext(MovieContext);

  return (
    <>
      <Router>
        <Switch>
        <Route exact path="/">
          <Header />
          {isMovieInput && 
          (movies !== undefined ? <MainSection /> : <NoFound />)}
        </Route>
        <Route path="/movie/:id" component={MovieDetail}></Route>
        <Route path="*">
          <NotFound />
        </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
