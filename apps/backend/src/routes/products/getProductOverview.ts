import { Request, Response } from "express";
import { StatusEnum } from "../../types/status";
import { ProductType, ProductOverview } from "../../schemas/product";
import { DatabaseTableEnum, pool } from "../../database";
import { queryError } from "../../utils/responses/queryError";

// METHOD=GET
const getProductOverview = async (req: Request, res: Response) => {
  const { OK, BAD_REQUEST } = StatusEnum;
  const { PRODUCTS } = DatabaseTableEnum;
  const query = `SELECT id, title, brand, capacity, price, image FROM ${PRODUCTS}`;

  pool.query(query, (err, result) => {
    if (err) queryError(res, err);

    const data: ProductType[] = result.rows;

    if (data) {
      // zod schema validation
      if (!ProductOverview.safeParse(data).success) {
        console.log("GET=product-overview", `STATUS=${BAD_REQUEST}`);
        res.status(BAD_REQUEST).json({ message: "Dataset is incorrect!" });
      }

      console.log("GET=product-overview", `STATUS=${OK}`);
      res.status(OK).json(data);
    }

    if (!data) {
      console.log("GET=product-overview", `STATUS=${BAD_REQUEST}`);
      res.status(BAD_REQUEST).json({ message: "Houston, we got a problem!" });
    }
  });
};

export default getProductOverview;
