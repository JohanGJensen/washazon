import { DetailedProduct } from "../../../../types/products";
import Image from "next/image";
import AddToCartButton from "../../components/AddToCartButton";

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
            alt={product.title}
            width={300}
            height={300}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {product.brand}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {product.title}
            </h1>

            <div className="mt-5 mb-10">
              <p className="leading-relaxed">{product.description}</p>
            </div>

            <div className="flex flex-wrap">
              <span className="title-font font-medium text-2xl text-gray-900">
                {product.price},-
              </span>
              <span className={"ml-auto"}>
                <AddToCartButton product={product} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailedOverview;
