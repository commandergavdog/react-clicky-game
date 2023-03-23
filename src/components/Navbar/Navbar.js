import React from "react";

const Navbar = props => (
    <div className="row">
        <ul className="nav nav-pills nav-justified">
            <li className="col"><a href="/"><img className="logo mr-3" alt="pokemon-logo" src="/images/pokemon-logo.png" />Memory Game!</a></li>
            <li className="col mt-3">{props.message || "Click an image to begin!"}</li>
            <li className="col mt-3">Score: {props.currentScore || 0} | Top Score: {props.topScore}</li>
        </ul>
    </div>
);

export default Navbar;