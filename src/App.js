import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import PageWrapper from "./components/PageWrapper";
import CountPage from "./pages/CountPage";
import WordPage from "./pages/WordPage";
import DataPage from "./pages/DataPage";

const App = () => {
  return (
    <Router>
      <PageWrapper>
        <Route exact path="/" component={CountPage} />
        <Route path="/word" component={WordPage} />
        <Route path="/data" component={DataPage} />
      </PageWrapper>
    </Router>
  );
};

export default App;
