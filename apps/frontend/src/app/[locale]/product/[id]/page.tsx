import { getProductDetails } from "../../../api/products/products";
import PageWrapper from "../../components/PageWrapper";
import BasketNavButton from "../../components/basket/BasketNavButton";
import DetailedOverview from "../components/DetailedOverview";
import { getTranslations } from "next-intl/server";

interface DetailsPageProps {
  params: { id: string };
}

const Details: React.FC<DetailsPageProps> = async ({ params }) => {
  const t = await getTranslations("layout");
  const productId = parseInt(params.id);
  const product = await getProductDetails(productId);

  return (
    <PageWrapper headerContent={<BasketNavButton />}>
      <section className={"product-detailed-section"}>
        {!product && <p>{t("productNotFound")}</p>}
        {product && <DetailedOverview product={product} />}
      </section>
    </PageWrapper>
  );
};

export default Details;
