import { useTranslations } from "next-intl";
import "../../globals.css";
import Footer from "./Footer";
import Header from "./Header";

type PageWrapperProps = {
  children: React.ReactNode;
  headerContent?: React.ReactNode;
};

const PageWrapper: React.FC<PageWrapperProps> = ({
  children,
  headerContent,
}) => {
  const t = useTranslations("general.company");

  return (
    <main className="flex flex-col items-center justify-between h-screen w-full">
      <Header title={t("title")} content={headerContent ?? null} />
      {children}
      <Footer />
    </main>
  );
};

export default PageWrapper;
