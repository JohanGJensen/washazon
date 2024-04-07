"use client";

import { useTranslations } from "next-intl";
import { BasketProduct, OverviewProduct } from "../../../types/products";
import styles from "./addToCartButton.module.css";

interface AddToCartButtonProps {
  product: OverviewProduct;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product }) => {
  const t = useTranslations("layout.button");

  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const basketStorage: BasketProduct[] | null = JSON.parse(
      localStorage.getItem("basket")!
    );

    try {
      if (basketStorage) {
        const storedItemIndex = basketStorage.findIndex(
          (item) => item.id === product.id
        );

        // if stored item already exist, add to total shopped count
        if (storedItemIndex >= 0) {
          const item = basketStorage[storedItemIndex];
          basketStorage[storedItemIndex] = { ...item, amount: item.amount + 1 };
        }

        if (storedItemIndex === -1) {
          basketStorage.push({
            id: product.id,
            name: product.name,
            image: product.image,
            price: product.price,
            amount: 1,
          });
        }

        // set new local storage
        localStorage.setItem("basket", JSON.stringify(basketStorage));
        window.dispatchEvent(new Event("storage"));
      }

      // create storage item, if none exist
      if (!basketStorage) {
        const newBasketStorage: BasketProduct[] = [
          {
            id: product.id,
            name: product.name,
            image: product.image,
            price: product.price,
            amount: 1,
          },
        ];
        localStorage.setItem("basket", JSON.stringify(newBasketStorage));
        window.dispatchEvent(new Event("storage"));
      }
    } catch (err) {
      alert(`An error occured: ${err}`);
    }
  };

  return (
    <button onClick={handleOnClick} className={styles.cardButton}>
      {t("addToCart")}
    </button>
  );
};

export default AddToCartButton;
