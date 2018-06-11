import React from "react";
import "./Cards.css";

const Cards = props => (
    <div className="card">
        <div className="img-container">
            <a onClick={() => props.selectPokemon(props.name)} 
            className= "{props.currentScore === 0}">
            <img className="card-image" alt={props.name} src={props.image} />
            </a>
        </div>
    </div>
);

export default Cards;