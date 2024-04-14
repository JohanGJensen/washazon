"use client"

import React from "react";
import { HiTrash } from "react-icons/hi";
import PageWrapper from "../components/PageWrapper";
import Image from "next/image";
import { BasketProduct } from "../../../types/products";

const BasketPage: React.FC = () => {
  const [basketItems, setBasketItems] = React.useState<BasketProduct[]>([]);

  React.useEffect(() => {
    const basketStorage: BasketProduct[] | null = JSON.parse(
      localStorage.getItem("basket")!
    );

    if (basketStorage) {
      setBasketItems(basketStorage);
    }
  }, []);

  const onRemoveItem = (id: number) => {
    const index = basketItems.findIndex((item) => item.id === id);
    const newBasketItems = basketItems;
    newBasketItems.splice(index, 1);

    setBasketItems([...newBasketItems]);
    localStorage.setItem("basket", JSON.stringify([...newBasketItems]));
  };

  return (
    <PageWrapper>
      <section className="basket-overview-section">
        <div className={"w-2/5 bg-gray-50 p-10"}>
          {basketItems.map((item) => (
            <div
              key={item.id}
              className="w-full flex flex-wrap justify-between border-b-[1px] border-nav-primary mb-3 pb-2"
            >
              <div className={"flex justify-start"}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={100}
                  height={100}
                />
                <div className="lg:w-1/2 w-full pl-3">
                  <h1 className="text-gray-900 text-2xl font-medium">
                    {item.title}
                  </h1>

                  <div className="flex flex-wrap">
                    <span className="text-gray-700">{item.price},-</span>
                  </div>
                  {/* <div className="flex flex-wrap">
                  <span className="text-2xl text-gray-900">
                    {item.price},-
                  </span>
                </div> */}
                </div>
              </div>

              <div>
                <button onClick={() => onRemoveItem(item.id)}>
                  <HiTrash color={"#d42828"} size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
};

export default BasketPage;
