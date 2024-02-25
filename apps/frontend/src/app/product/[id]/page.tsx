import { getProductDetails } from "../../api/products/products";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PageWrapper from "../../components/PageWrapper";
import { DetailedProduct } from "../../../types/products";
import DetailedOverview from "../components/DetailedOverview";

interface DetailsPageProps {
  params: { id: string };
}

const Details: React.FC<DetailsPageProps> = async ({ params }) => {
  const productId = parseInt(params.id);
  const product = (await getProductDetails(productId)) as DetailedProduct;

  return (
    <PageWrapper>
      <Header title="washazon" />

      {!product && <p>no product found</p>}
      {product && <DetailedOverview product={product} />}

      <Footer />
    </PageWrapper>
  );
};

export default Details;
