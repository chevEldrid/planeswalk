import React, { Component } from 'react';
import './App.css';
import PlaneImage from './components/PlaneImage/PlaneImage';
import PlaneChangeButton from './components/PlaneswalkButtons/PlaneChangeButton';
import CardStore from './stores/CardStore';
import RollPlanarDieButton from './components/PlaneswalkButtons/RollPlanarDieButton';
import PlaneSourceToggleButton from './components/PlaneswalkButtons/PlaneSourceToggleButton';
import Legal from './components/Legal';
import Footer from './components/Footer';

export default class App extends Component {
  constructor() {
    super();
    this.cardStore = new CardStore();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
        <PlaneChangeButton cardStore={this.cardStore} direction={false} message={'prev'}/>
        <PlaneChangeButton cardStore={this.cardStore} direction={true} message={'next'} />
        <RollPlanarDieButton cardStore={this.cardStore} />
        <PlaneSourceToggleButton cardStore={this.cardStore} />
        </div>
        <PlaneImage cardStore={this.cardStore}/>
        <Footer>
          <Legal/>
        </Footer>
      </div>
    )
  }
}
