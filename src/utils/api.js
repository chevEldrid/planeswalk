export default async function get_scryfall() {
  const response = await fetch("https://api.scryfall.com/cards/search?q=t%3Aphenomenon+OR+t%3Aplane");
  const res = await response.json();
  return res.data;
}
