import { Request, Response } from "express";
import { StatusEnum } from "../../types/status";
import { ProductDetailedType, ProductDetailed } from "../../schemas/product";

import { pool } from "../../database";

// METHOD=GET
const getProductDetails = async (req: Request, res: Response) => {
  const id = parseInt(req.params.productid);
  const { OK, BAD_REQUEST } = StatusEnum;

  pool.query("SELECT * FROM products WHERE id = $1", [id], (err, result) => {
    if (err) {
      console.error("Error executing query", err);
      res
        .status(BAD_REQUEST)
        .json({ message: "Error getting data from database!" });
    }

    const data: ProductDetailedType[] = result.rows;
    const product: ProductDetailedType = data[0];

    if (data && product) {
      // zod schema validation
      if (!ProductDetailed.safeParse(product).success) {
        console.log("GET=product-detail", `STATUS=${BAD_REQUEST}`);
        res.status(BAD_REQUEST).json({ message: "product data is incorrect!" });
      }

      console.log("GET=product-detail", `STATUS=${OK}`);
      res.status(OK).json(product);
    }

    if (data && !product) {
      console.log("GET=product-detail", `STATUS=${BAD_REQUEST}`);
      res.status(BAD_REQUEST).json({ message: "product does not exist!" });
    }

    if (!data) {
      console.log("GET=product-detail", `STATUS=${BAD_REQUEST}`);
      res.status(BAD_REQUEST).json({ message: "Houston, we got a problem!" });
    }
  });
};

export default getProductDetails;
