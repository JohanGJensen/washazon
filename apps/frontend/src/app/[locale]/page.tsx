"use server";

import React from "react";

import { getProductOverview } from "../api/products/products";

import ProductCard from "./components/ProductCard";
import PageWrapper from "./components/PageWrapper";
import Filter from "./components/Filter";
import BasketNavButton from "./components/basket/BasketNavButton";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const products = await getProductOverview();
  const searchQuery = searchParams.search?.toString().toLowerCase();

  return (
    <PageWrapper
      headerContent={
        <>
          <Filter query={searchQuery} />
          <BasketNavButton />
        </>
      }
    >
      <section className="product-overview-section">
        <div className={"product-overview-grid"}>
          {products &&
            products.map((product) => {
              if (
                searchQuery &&
                !product.title.toLowerCase().includes(searchQuery)
              ) {
                return null;
              }

              return <ProductCard key={product.id} product={product} />;
            })}
        </div>
      </section>
    </PageWrapper>
  );
}
