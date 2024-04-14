export type OverviewProduct = {
  id: number;
  title: string;
  brand: string;
  capacity: string;
  price: number;
  image: string;
};

export type DetailedProduct = OverviewProduct & {
  description: string;
};

export type BasketProduct = {
  id: number;
  title: string;
  image: string;
  price: number;
  amount: number;
};
