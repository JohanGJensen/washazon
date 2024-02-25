import { DetailedProduct } from "../../../types/products";
import Image from "next/image";

interface DetailedOverviewProps {
  product: DetailedProduct;
}

const DetailedOverview: React.FC<DetailedOverviewProps> = ({ product }) => {
  return (
    <section className="bg-white h-[100vh] md:h-auto w-full md:w-auto">
      <div className="container py-24 flex justify-center">
        <div className="w-4/5 flex flex-wrap justify-around">
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={300}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {product.brand}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {product.name}
            </h1>

            <div className="mt-5 mb-10">
              <p className="leading-relaxed">{product.description}</p>
            </div>

            <div className="flex flex-wrap">
              <span className="title-font font-medium text-2xl text-gray-900">
                {product.price},-
              </span>
              <button className="ml-auto text-white bg-slate-900 hover:bg-gray-700 border-0 py-2 px-6 focus:outline-none rounded">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailedOverview;
