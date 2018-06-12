import React from "react";


const Cards = props => (
    <div className="card">
        <div className="img-container">
            <a onClick={() => props.selectPokemon(props.name)}>
            <img className="card-image" alt={props.name} src={props.image} />
            </a>
        </div>
    </div>
);

export default Cards;