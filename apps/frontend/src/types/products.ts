export type OverviewProduct = {
  id: number;
  name: string;
  brand: string;
  capacity: string;
  price: number;
  image: string;
};

export type DetailedProduct = OverviewProduct & {
  description: string;
};
