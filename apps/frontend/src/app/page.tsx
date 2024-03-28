import React from "react";

import { getProductOverview } from "./api/products/products";

import ProductCard from "./components/ProductCard";
import PageWrapper from "./components/PageWrapper";

export default async function Home() {
  const products = await getProductOverview();

  return (
    <PageWrapper>
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
