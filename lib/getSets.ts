// getSetData Function By Dennis Chen - fetches a list of set data from Pokémon TCG API
import { CardSet } from "@/types/cardSet";

export default async function getSetData(release: string): Promise<CardSet[]> {
  // Fetch sets from the Pokémon TCG API, ordering by the release date parameter and gets 15 card sets
  const res = await fetch(`https://api.pokemontcg.io/v2/sets?orderBy=${release}&pageSize=15`);
  // Extract the 'data' field from the JSON response and return array of card sets
  const { data } = await res.json();
  return data;
}
