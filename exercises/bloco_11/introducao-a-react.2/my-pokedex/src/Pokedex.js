import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    const obj = this.props;
    return (
      <div className="pokedex">
        {obj.pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemonVar={pokemon} />)}
      </div>
    );
  }
}

export default Pokedex;