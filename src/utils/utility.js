export function shuffle(array) {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  while(0 !== currentIndex) {
    //pick a remaining spot
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    //swap with current element
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

export function filterCards(cards, toRemove) {
  return cards.filter((card, index) => !toRemove.includes(index));
}
