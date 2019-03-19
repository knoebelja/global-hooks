import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import AppLayout from "./components/AppLayout";
import CountPage from "./pages/CountPage";
import WordPage from "./pages/WordPage";
import DataPage from "./pages/DataPage";

const App = () => {
  return (
    <Router>
      <AppLayout>
        <Route exact path="/" component={CountPage} />
        <Route path="/word" component={WordPage} />
        <Route path="/data" component={DataPage} />
      </AppLayout>
    </Router>
  );
};

export default App;
