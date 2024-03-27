import React from "react";

import { getProductOverview } from "./api/products/products";

import ProductCard from "./components/ProductCard";
import PageWrapper from "./components/PageWrapper";
import Filter from "./components/Filter";

export default async function Home() {
  const products = await getProductOverview();

  return (
    <PageWrapper headerContent={<Filter />}>
      <section className="product-overview-section">
        <div className={"product-overview-grid"}>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </section>
    </PageWrapper>
  );
}
