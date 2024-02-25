import { OverviewProduct } from "../../types/products";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: OverviewProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div
      key={product.id}
      className="w-[300px] overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
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
          <button className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
            Add to cart
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
