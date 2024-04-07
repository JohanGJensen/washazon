"use client";

import Link from "next/link";
import React from "react";
import { HiShoppingCart } from "react-icons/hi";
import { BasketProduct } from "../../../../types/products";
import { useLocale } from "next-intl";

interface BasketNavButtonProps {}

const BasketNavButton: React.FC<BasketNavButtonProps> = () => {
  const locale = useLocale();
  const [count, setCount] = React.useState<number>(0);
  
  React.useEffect(() => {    
    const updateStorage = () => {
      const basketStorage: BasketProduct[] | null = JSON.parse(
        localStorage.getItem("basket")!
      );
      let count = 0;

      if (basketStorage) {
        basketStorage.forEach((item) => count = count + item.amount);
        setCount(count);
      }
    };

    updateStorage();
    window.addEventListener("storage", updateStorage);

    return () => window.removeEventListener("storage", updateStorage);
  }, []);

  return (
    <Link href={`/${locale}/basket`} className={"relative bg-[#243c5a] rounded-md p-1 flex"}>
      <HiShoppingCart
        type={"button"}
        className={"cursor-pointer"}
        color={"#FFF"}
        size={"1.5em"}
      />
      {count > 0 && <div className={"absolute text-xs px-1 rounded-[1em] text-[#FFFFFF] bg-[#d42828] bottom-[-0.5em] right-[-0.5em]"}>{count}</div>}
    </Link>
  );
};

export default BasketNavButton;
