export async function get_scryfall() {
  const response = await fetch("https://api.scryfall.com/cards/search?q=t%3Aphenomenon+OR+t%3Aplane");
  const res = await response.json();
  return res.data;
}

export async function get_imgur() {
  const response = await fetch("https://api.imgur.com/3/album/7XIjH4t", {
    headers: {
      'Authorization': 'Client-ID 6d9d9566773c008'
    }
  });
  const res = await response.json();
  return res.data.images;
}


