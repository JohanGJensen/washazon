import { getProductDetails } from "../../api/products/products";
import PageWrapper from "../../components/PageWrapper";
import DetailedOverview from "../components/DetailedOverview";

interface DetailsPageProps {
  params: { id: string };
}

const Details: React.FC<DetailsPageProps> = async ({ params }) => {
  const productId = parseInt(params.id);
  const product = await getProductDetails(productId);

  return (
    <PageWrapper>
      <section className={"product-detailed-section"}>
        {!product && <p>no product found</p>}
        {product && <DetailedOverview product={product} />}
      </section>
    </PageWrapper>
  );
};

export default Details;
