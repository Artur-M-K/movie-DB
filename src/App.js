import React, { useContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import { MovieContext } from "./context/MovieContext";
import MainSection from "./components/pages/MainSection";
import MovieDetail from "./components/pages/MovieDetail";
import "./App.css";

const App = () => {
  const { movies } = useContext(MovieContext);
  console.log(movies)
  return (
    <>
      <Header />
      <Router>
        <Route exact path="/">{movies.length >= 0 && <MainSection />}</Route>
        <Route path='/:id' component={MovieDetail} />
      </Router>
    </>
  );
};

export default App;
