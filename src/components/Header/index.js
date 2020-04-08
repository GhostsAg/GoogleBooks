import React from "react";
import NavTab from "../Navtab";
import "./style.css";

function Header() {
    return (
        <div className="header row z-depth-4">
            <span className="col s2 push-s1 push-l2"><i className="fab fa-google"></i></span>
            <NavTab />
        </div>
    );
}

export default Header;