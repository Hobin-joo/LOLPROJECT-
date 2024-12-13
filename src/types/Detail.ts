export interface Detail {
  id: string;
  key: string;
  name: string;
  title: string;
  image: {
    full: string;
  };
  blurb: string;
  info: {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  };
}
