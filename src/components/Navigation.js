import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ children }) => {
  return (
    <div>
      <Link to="/">Count Page</Link>
      <Link to="/word">Word Page</Link>
      <Link to="/data">Data Page</Link>
      <div>{children}</div>
    </div>
  );
};

export default Navigation;
