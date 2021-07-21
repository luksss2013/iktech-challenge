export interface Hero {
  id: string;
  name: string;
  appearance: Appearance;
  powerstats: PowerStats;
  image: Image;
  checked: boolean;
}

interface Appearance {
  height: string[];
  weight: string[];
  gender: string;
}

interface PowerStats {
  combat: string;
  durability: string;
  intelligence: string;
  power: string;
  speed: string;
  strength: string;
}

interface Image {
  url: string;
}
