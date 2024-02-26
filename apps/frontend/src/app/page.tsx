import React from "react";

import { getProductOverview } from "./api/products/products";

import ProductCard from "./components/ProductCard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageWrapper from "./components/PageWrapper";

export default async function Home() {
  const products = await getProductOverview();

  return (
    <PageWrapper>
      <Header title={'washazon'} />
 
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 md:mx-10">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </section>

      <Footer />
    </PageWrapper>
  );
}
