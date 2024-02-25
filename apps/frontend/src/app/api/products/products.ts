// import { OverviewProduct } from "@/types/products";
import env from "../../../constants/env";
import {
  getMockedProductOverview,
  getMockedProductdetails
} from "./products.mock";

export const getProductOverview = async () => {
  if (env.MOCKED) {
    return await getMockedProductOverview();
  }

  return (await fetch(`${env.API_HOST}/product-overview`, { method: 'get' })).json();
};

export const getProductDetails = async (productId: number) => {
  if (env.MOCKED) {
    return await getMockedProductdetails(productId);
  }

  return (await fetch(`${env.API_HOST}/product-detail/${productId}`, { method: 'get' })).json();
};
