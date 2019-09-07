import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

@observer
class PlaneChangeButton extends Component {
  static propTypes = {
    direction: PropTypes.bool.isRequired,
    cardStore: PropTypes.object.isRequired,
    message: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props)

    this.changePlane = this.changePlane.bind(this);
  }

  changePlane() {
    if(this.props.direction) {
      this.props.cardStore.nextPlane();
    } else {
      this.props.cardStore.prevPlane();
    }
    
  }

  render() {
    return (
      <button 
        type='button'
        onClick = {this.changePlane}
        className = 'btn btn-primary'
      >
        {this.props.message}
      </button>
    )
  }
}

export default PlaneChangeButton;
