import React from 'react';
import './PlaneImage.css';
import get_scryfall from '../../utils/api';
import shuffle from '../../utils/utility';
import { observer } from 'mobx-react';

@observer
class PlaneImage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            error: false,
            index: 0,
            imageID: 'Plane-Image',
            curImageSrc: ''
        }
    }

    async componentDidMount() {
        try {
            //const deck = await get_scryfall();
            let deck = {};
            deck = shuffle(deck);
            //const imgUri = deck[0].image_uris.normal;
            const imgUri = "https://img.scryfall.com/cards/normal/front/e/d/ed4f4210-9871-4cec-9b46-100c80f93cd4.jpg?1547432274";
            this.setState({ cards: deck, isLoaded: true, curImageSrc: imgUri });
        } catch(error) {
            this.setState({ isLoaded: true, error: true });
        }
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
                <img alt="Plane" src={curImageSrc} align="right" className="img-fluid mx-auto d-block" id="Plane-image" />
            </div>
        )
    }
}

PlaneImage.defaultProps = {
    qs: 'Invalid',
    host: 'Scryfall'
}
