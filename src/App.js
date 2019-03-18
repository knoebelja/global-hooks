import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import AppWrapper from "./components/AppWrapper";
import CountPage from "./pages/CountPage";
import WordPage from "./pages/WordPage";
import DataPage from "./pages/DataPage";

const App = () => {
  return (
    <Router>
      <AppWrapper>
        <Route exact path="/" component={CountPage} />
        <Route path="/word" component={WordPage} />
        <Route path="/data" component={DataPage} />
      </AppWrapper>
    </Router>
  );
};

export default App;
