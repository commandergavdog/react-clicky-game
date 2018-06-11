import React from "react";
import "./Navbar.css"

    const Navbar = props => (
    <div className="row">
        <ul className="nav nav-pills nav-justified">
            <li className="col"><a href="/"><img className="logo mr-3" alt="pokemon-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png" />Memory Game!</a></li>
            <li className="col mt-3" id='glorp'>{props.message || "Click an image to begin!"}</li>
            <li className="col mt-3" id='glorp'>Score: {props.currentScore || 0} | Top Score: {props.topScore}</li>
        </ul>
    </div>
    );

export default Navbar;