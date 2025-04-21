import { CardSet } from "@/types/cardSet";

export default async function getSetData(release: string): Promise<CardSet[]> {
  const res = await fetch(`https://api.pokemontcg.io/v2/sets?orderBy=${release}&pageSize=15`);
  const { data } = await res.json();
  return data;
}
