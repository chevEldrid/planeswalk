import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

@observer
class RollPlanarDieButton extends Component {
  static propTypes = {
    cardStore: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)

    this.rollDie = this.rollDie.bind(this);
  }

  rollDie() {
    let alertText = "Nothing";
    const randomIndex = Math.floor(Math.random() * 6) + 1;
    if(randomIndex === 6) {
      alertText = "CHAOS!";
    }
    else if(randomIndex === 1) {
      alertText = "Planeswalk!";
      this.props.cardStore.nextPlane();
    }
    else {
      alertText = `Nothing (${randomIndex})`;
    }
    alert(alertText);
  }

  render() {
    return (
      <button
        onClick = {this.rollDie}
      >
        Roll Die
      </button>
    )
  }
}

export default RollPlanarDieButton;
