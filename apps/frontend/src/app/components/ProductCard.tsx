import { OverviewProduct } from "../../types/products";
import Image from "next/image";
import Link from "next/link";

import styles from "./productCard.module.css";

interface ProductCardProps {
  product: OverviewProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div
      key={product.id}
      className={styles.card}
    >
      <Link href={`/product/${product.id}`}>
        <Image
          className="p-3 flex rounded-xl"
          src={product.image}
          alt={product.name}
          width={300}
          height={300}
        />
        <div className="mt-4 px-5 pb-5">
          <h4 className="text-xl tracking-tight text-slate-900">
            {product.name}
          </h4>
          <div className="mt-2 mb-5 flex items-center justify-between">
            <p>
              <span className="text-3xl font-bold text-slate-900">
                {product.price},-
              </span>
            </p>
          </div>
          <button className={styles.cardButton}>
            Add to cart
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
