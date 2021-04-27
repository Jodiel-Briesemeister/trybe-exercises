import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    //const { name, type, averageWeight, image } = Data.find((pokemon) => pokemon.name == 'Caterpie')
    const { name, type, averageWeight, image } = this.props.pokemonVar;

    return (
      <div className="pokemon">
        <div>
          <p> Nome: {name} </p>
          <p> Tipo: {type} </p>
          <p> Peso: {`${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
          <p> Imagem: {name} </p>
        </div>
        <img src={image} alt={`${name} sprite`} />
      </div>
      
    );
  }
}

Pokemon.propTypes = {
  pokemonVar: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number
    }),
    image: PropTypes.string,
  }).isRequired,
};

export default Pokemon;