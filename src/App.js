import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import AppLayout from "./components/AppLayout";
import WordPage from "./pages/WordPage";
import DataPage from "./pages/DataPage";

const App = () => {
    return (
        <Router>
            <AppLayout>
                <Route exact path="/" component={WordPage} />
                <Route exact path="/data" component={DataPage} />
            </AppLayout>
        </Router>
    );
};

export default App;
