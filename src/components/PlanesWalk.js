import React, { Component, Fragment } from 'react';
import './PlanesWalk.css';
import PlaneImage from './PlaneImage/PlaneImage';
import PlaneChangeButton from './PlaneswalkButtons/PlaneChangeButton';
import RollPlanarDieButton from './PlaneswalkButtons/RollPlanarDieButton';
import PlaneSourceToggleButton from './PlaneswalkButtons/PlaneSourceToggleButton';
import Legal from './Legal';
import Footer from './Footer';

export default class PlanesWalk extends Component {

  render() {
    const { cardStore } = this.props;
    return (
      <Fragment>
        <div className="App-header">
        <PlaneChangeButton cardStore={cardStore} direction={false} message={'prev'}/>
        <PlaneChangeButton cardStore={cardStore} direction={true} message={'next'} />
        <RollPlanarDieButton cardStore={cardStore} />
        <PlaneSourceToggleButton cardStore={cardStore} />
        </div>
        <PlaneImage cardStore={cardStore}/>
        <Footer>
          <Legal/>
        </Footer>
      </Fragment>
    )
  }
}
