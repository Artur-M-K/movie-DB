import React, { useContext} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import { MovieContext } from "./context/MovieContext";
import MainSection from "./components/pages/MainSection";
import MovieDetail from "./components/pages/MovieDetail";
import "./App.css";

const App = () => {
  const { movies } = useContext(MovieContext);

  return (
    <>
      <Router>
        <Route exact path="/">
          <Header />
          <MainSection />
          {/* {showResult.length > 0 ? <MainSection /> : ''} */}
        </Route>
        <Route path='/movie/:id' component={MovieDetail} />
      </Router>
    </>
  );
};

export default App;
