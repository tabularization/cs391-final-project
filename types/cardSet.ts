export interface SetImage {
  symbol: string;
  logo: string;
}

export interface CardSet {
  id: string;
  name: string;
  series: string;
  images: SetImage;
}
