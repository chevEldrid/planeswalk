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
            error: false
        }
        this.updateCards = this.updateCards.bind(this);
    }

    async componentDidMount() {
        await this.updateCards();
    }

    async updateCards() {
        await this.props.cardStore.fetchCardsFromScryfall();
    }

    render() {
        const { isOfficial, isLoading }=this.props.cardStore;
        const  { error }=this.state;
        if (isLoading) {
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
                <img 
                    alt="Plane" 
                    src={this.props.cardStore.getCardImgUrl()} 
                    align="right" 
                    className="img-fluid mx-auto d-block" 
                    id={isOfficial ? "Plane-image" : "Plane-image-imgur"}
                />
            </div>
        )
    }
}

export default PlaneImage;
