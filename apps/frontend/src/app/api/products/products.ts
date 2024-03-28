import env from "../../../constants/env";
import type { OverviewProduct, DetailedProduct } from "../../../types/products";
import {
  getMockedProductOverview,
  getMockedProductdetails,
} from "./products.mock";

type ProductOverviewResponse = Omit<Response, "json"> & {
  json: () => Promise<OverviewProduct[]>;
};

type ProductDetailedResponse = Omit<Response, "json"> & {
  json: () => Promise<DetailedProduct>;
};

const responseHandler = <R>(res: Response) => {
  return res as R;
};

export const getProductOverview = async () => {
  if (env.MOCKED) {
    return getMockedProductOverview();
  }

  const data = await fetch(`${env.API_HOST}/product-overview`, {
    method: "get",
  })
    .then((res) => responseHandler<ProductOverviewResponse>(res))
    .catch((err) => {
      throw Error(err);
    });

  return data.json();
};

export const getProductDetails = async (productId: number) => {
  if (env.MOCKED) {
    return await getMockedProductdetails(productId);
  }

  const data = await fetch(`${env.API_HOST}/product-detail/${productId}`, {
    method: "get",
  })
    .then((res) => responseHandler<ProductDetailedResponse>(res))
    .catch((err) => {
      throw Error(err);
    });

  return data.json();
};
