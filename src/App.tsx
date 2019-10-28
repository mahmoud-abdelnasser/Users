import React, { Component } from 'react';
import "./styles/app.scss";
import Users from './components/Users';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <PokemonSearch name="John Doe" numberOfPokemons={5} /> */}
        <Users />
      </div>
    );
  }
}

export default App;
