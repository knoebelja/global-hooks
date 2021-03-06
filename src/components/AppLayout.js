import React from "react";
import { Link } from "react-router-dom";

const AppLayout = ({ children }) => {
    return (
        <div>
            <div>
                <Link to="/">Word Page</Link>
                <Link to="/data">Data Page</Link>
            </div>
            <div>{children}</div>
        </div>
    );
};

export default AppLayout;
