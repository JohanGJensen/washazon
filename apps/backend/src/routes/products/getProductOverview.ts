import { Request, Response } from "express";
import { StatusEnum } from "../../types/status";
import { ProductType, ProductOverview } from "../../schemas/product";

// METHOD=GET
const getProductOverview = async (req: Request, res: Response) => {
  const { OK, BAD_REQUEST } = StatusEnum;

  const data: ProductType[] = await require("../../database/overview.json");
  if (data) {
    if (!ProductOverview.safeParse(data).success) {
      console.log('GET=product-overview', `STATUS=${BAD_REQUEST}`);
      res.status(BAD_REQUEST).json({ message: "Dataset is incorrect!" });
    }

    console.log('GET=product-overview', `STATUS=${OK}`);
    res.status(OK).json(data);
  }

  if (!data) {
    console.log('GET=product-overview', `STATUS=${BAD_REQUEST}`);
    res.status(BAD_REQUEST).json({ message: "Houston, we got a problem!" });
  }
};

export default getProductOverview;
