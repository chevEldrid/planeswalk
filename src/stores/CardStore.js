import { observable, action, computed } from "mobx"
import { get_scryfall, get_imgur } from "../utils/api";
import { shuffle, filterCards } from "../utils/utility";

export default class CardStore {
  @observable cards = {};
  @observable curIndex = 0;
  @observable isOfficial = true;
  @observable isLoading = true;

  @action updateCards(cards) {
    this.cards = cards;
  }

  @action updateCurIndex(index) {
    this.curIndex = index;
  }

  @action updateIsOfficial(isOfficial) {
    this.isOfficial = isOfficial;
  }

  @action updateIsLoading(load) {
    this.isLoading = load;
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
    return this.cards[this.curIndex];
  }

  fetchCardsFromScryfall = async () => {
    this.updateIsLoading(true);
    let deck = await get_scryfall();
    deck = deck.map(card => card.image_uris.normal);
    deck = shuffle(deck);
    this.updateCards(deck);
    this.updateIsLoading(false);
  }

  fetchCardsFromImgur = async () => {
    this.updateIsLoading(true);
    const toRemove = [2,3,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,32,34,36,51,55,62,68,69];
    let deck = await get_imgur();
    deck = filterCards(deck, toRemove);
    deck = deck.map(card => card.link);
    deck = shuffle(deck);
    this.updateCards(deck);
    this.updateIsLoading(false);
  }

  async updateCardSource(isOfficial) {
    this.updateIsOfficial(isOfficial);
    if(isOfficial) {
      await this.fetchCardsFromScryfall();
    } else {
      await this.fetchCardsFromImgur();
    }
  }
}
