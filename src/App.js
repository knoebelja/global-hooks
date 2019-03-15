import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import CountPage from "./components/CountPage";
import WordPage from "./components/WordPage";
import DataPage from "./components/DataPage";

const App = () => {
  return (
    <Router>
      <Navigation>
        <Route exact path="/" component={CountPage} />
        <Route path="/word" component={WordPage} />
        <Route path="/data" component={DataPage} />
      </Navigation>
    </Router>
  );
};

export default App;
