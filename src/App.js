import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./components/Header";
import { MovieContext } from "./context/MovieContext";
import MainSection from "./components/pages/MainSection";
import MovieDetail from "./components/pages/MovieDetail";
import NoFound from "./components/details/NoFound";
import NotFound from "./components/pages/NotFound";
import "./App.css";

const App = () => {
  const { movies } = useContext(MovieContext);
  console.log(movies);
  return (
    <>
      <Router>
        <Switch>
        <Route exact path="/">
          <Header />
          {movies !== undefined ? <MainSection /> : <NoFound />}
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
