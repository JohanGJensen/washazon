import { Request, Response } from "express";
import { StatusEnum } from "../../types/status";
import { ProductDetailedType, ProductDetailed } from "../../schemas/product";
import { DatabaseTableEnum, pool } from "../../database";
import { queryError } from "../../utils/responses/queryError";

// METHOD=GET
const getProductDetails = async (req: Request, res: Response) => {
  const id = parseInt(req.params.productid);
  const { OK, BAD_REQUEST } = StatusEnum;
  const { PRODUCTS } = DatabaseTableEnum;
  const query = `SELECT * FROM ${PRODUCTS} WHERE id = $1`;
  const values = [id];

  pool.query(query, values, (err, result) => {
    if (err) queryError(res, err);

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
