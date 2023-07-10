export interface ChemicalElement {
  number: number;
  symbol: string;
  name: string;
  group: number;
  period: number;
  discovery: number;
  weight: number;
  density: number;
  melt: number;
  boil: number;
  noImage?: boolean;
  noImageText?: string;
}

export interface DataProperty {
  name: string;
  unit: string;
  description: string[];
}

export interface DataObject extends DataProperty {
  value: string | number;
}
