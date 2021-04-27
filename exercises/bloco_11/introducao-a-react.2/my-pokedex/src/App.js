import './App.css';
import Pokedex from './Pokedex';
import Data from './data';

function App() {

  return (
    <div>
      <Pokedex pokemons={Data}/>
    </div>
  );
}

export default App;
