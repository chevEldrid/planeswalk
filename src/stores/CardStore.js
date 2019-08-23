import { observable, action, computed } from "mobx"
import get_scryfall from "../utils/api";
import shuffle from "../utils/utility";

class CardStore {
  @observable cards = {};

  @action updateCards(cards) {
    this.cards = cards;
  }

  @computed isEmpty = () => {
    return Object.keys(this.cards).length === 0;
  }

  fetchCardsFromScryfall = async () => {
    let deck = await get_scryfall();
    deck = shuffle(deck);
    this.updateCards(deck);
  }
}
