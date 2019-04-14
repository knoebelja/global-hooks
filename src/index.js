import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import GlobalStyle from "./GlobalStyle";
import StoreProvider from "./store";

ReactDOM.render(
  <StoreProvider>
    <App />
    <GlobalStyle />
  </StoreProvider>,
  document.getElementById("root")
);
