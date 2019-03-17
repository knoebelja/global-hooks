import React from "react";
import { Link } from "react-router-dom";

const PageWrapper = ({ children }) => {
  return (
    <div>
      <div>
        <Link to="/">Count Page</Link>
        <Link to="/word">Word Page</Link>
        <Link to="/data">Data Page</Link>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default PageWrapper;
