import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PlaneImage.css';
import { observer } from 'mobx-react';

@observer
class PlaneImage extends Component {
    static propTypes = {
        cardStore: PropTypes.object.isRequired
    }

    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            error: false,
            imageID: 'Plane-Image'
        }
    }

    async componentDidMount() {
        await this.updateCards();
    }

    async updateCards() {
        const { isEmpty } = this.props.cardStore;
        if(isEmpty) {
            console.log('thought it was empty!');
            await this.props.cardStore.fetchCardsFromScryfall();
        }
        this.setState({ isLoaded: true });
     }

    render() {
        const  { curImageSrc, isLoaded, error }=this.state;
        if (!isLoaded) {
            return (
                <div>Loading...</div>
            );
        }

        if (error) {
            return (
                <div>Error!</div>
            );
        }

        return (
            <div>
                <p>Successfully added element!</p>
                <img alt="Plane" src={this.props.cardStore.getCardImgUrl()} align="right" className="img-fluid mx-auto d-block" id="Plane-image" />
            </div>
        )
    }
}

PlaneImage.defaultProps = {
    qs: 'Invalid',
    host: 'Scryfall'
}

export default PlaneImage;
