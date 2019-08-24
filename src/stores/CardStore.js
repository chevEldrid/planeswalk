import { observable, action, computed } from "mobx"
import get_scryfall from "../utils/api";
import shuffle from "../utils/utility";

export default class CardStore {
  @observable cards = {};
  @observable curIndex = 0;

  @action updateCards(cards) {
    this.cards = cards;
  }

  @action updateCurIndex(index) {
    this.curIndex = index;
  }

  @computed get isEmpty() {
    return Object.keys(this.cards).length === 0;
  }

  nextPlane = () => {
    if(this.curIndex + 1 >= this.cards.length) {
      this.cards = shuffle(this.cards);
      this.updateCurIndex(0);
    } else {
      this.updateCurIndex(this.curIndex + 1);
    }
  }

  prevPlane = () => {
    if((this.curIndex - 1) >= 0) {
      this.updateCurIndex(this.curIndex - 1);
    }
  }

  getCardImgUrl = () => {
    return this.cards[this.curIndex].image_uris.normal;
  }

  fetchCardsFromScryfall = async () => {
    let deck = await get_scryfall();
    deck = shuffle(deck);
    this.updateCards(deck);
  }
}
