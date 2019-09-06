import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

@observer
class PlaneSourceToggleButton extends Component {
  static propTypes = {
    cardStore: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
    this.toggleSource = this.toggleSource.bind(this);
  }

  async toggleSource() {
    await this.props.cardStore.updateCardSource(!this.props.cardStore.isOfficial);
  }

  render() {
    return (
      <button
        onClick = {this.toggleSource}
      >
        Switch Source
      </button>
    )
  }
}

export default PlaneSourceToggleButton;
