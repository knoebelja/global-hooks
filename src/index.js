import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import StoreProvider from "./store";
import GlobalStyle from "./GlobalStyle";

ReactDOM.render(
  <StoreProvider>
    <App />
    <GlobalStyle />
  </StoreProvider>,
  document.getElementById("root")
);
