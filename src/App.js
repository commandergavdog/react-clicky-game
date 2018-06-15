import React, {Component} from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Wrapper from "./components/Wrapper";
import pokemon from "./pokemon.json";
import "./App.css";


class App extends Component {
    state = {
        mesage: "Click an image to begin!",
        topScore: 0,
        currentScore: 0,
        pokemon: pokemon,
        unselectedPokemon: pokemon
    }

    shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    selectPokemon = name => {
        const findPokemon = this.state.unselectedPokemon.find(item => item.name === name);

        if (findPokemon === undefined) {
            //failure to find Pokemon
            this.setState({
                message: "You guessed incorrectly!",
                topScore: (this.state.currentScore > this.state.topScore) ? this.state.currentScore : this.state.topScore,
                currentScore: 0,
                pokemon: pokemon,
                unselectedPokemon: pokemon
            });
        }
        else {
            //success to select new pokemon
            const newPokemon = this.state.unselectedPokemon.filter(item => item.name !== name);
            
            this.setState({
                message: "You guessed correctly!",
                currentScore: this.state.currentScore + 1,
                pokemon: pokemon,
                unselectedPokemon: newPokemon
            });
        }

            this.shuffleArray(pokemon);
        };

        render() {
            return (
                <Wrapper>
                    <Navbar
                        message={this.state.message}
                        currentScore={this.state.currentScore}
                        topScore={this.state.topScore}
                    />
                    <Header />
                    {
                        this.state.pokemon.map(poke =>(
                            <Cards
                            name={poke.name}
                            image={poke.image}
                            selectPokemon={this.selectPokemon}
                            currentScore={this.state.currentScore}
                            />
                        ))
                    }                    
                </Wrapper>
            );
        }
}

export default App;