import React from "react";

import { getProductOverview } from "./api/products/products";

import ProductCard from "./components/ProductCard";
import PageWrapper from "./components/PageWrapper";

export default async function Home() {
  const products = await getProductOverview();

  return (
    <PageWrapper>
      <section className="fixed top-14 bottom-14 overflow-y-scroll w-full flex flex-col items-center justify-between">
        <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 md:mx-10"}>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </section>
    </PageWrapper>
  );
}
