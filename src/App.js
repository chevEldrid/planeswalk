import React, { Component } from 'react';
import './App.css';
import CardStore from './stores/CardStore';
import PlanesWalk from './components/PlanesWalk';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      cardStore: new CardStore()
    }
    
  }

  render() {
    return (
      <div className="App">
        <PlanesWalk cardStore = {this.state.cardStore} />
      </div>
    )
  }
}
