import { z } from "zod";

export const Product = z.object({
  id: z.number(),
  name: z.string(),
  brand: z.string(),
  capacity: z.string(),
  price: z.number(),
  image: z.string().url(),
});

export const ProductDetailed = z.intersection(
  Product,
  z.object({ description: z.string().max(500) })
);

export const ProductOverview = z.array(Product);

export type ProductType = z.infer<typeof Product>;
export type ProductDetailedType = z.infer<typeof ProductDetailed>;
