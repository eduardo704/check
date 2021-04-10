export interface Tab {
  label: string;
  selected: boolean;
  value: string;
}

export interface Phone {
  id: number;
  name: string;
  price: number;
  price_reduced: number | null;
  rating: number;
  topseller: boolean;
  new: boolean;
  brand: string;
  image: string;
}
export interface MappedPhone extends Phone {
  selected: boolean;
}
