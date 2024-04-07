import { useTranslations } from "next-intl";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const t = useTranslations("general.company");

  return (
    <footer className="flex items-center justify-center w-full h-14 bg-nav-primary p-5 text-white fixed bottom-0">
      <span className="text-[8px] md:text-xs">{t("trademark")}</span>
    </footer>
  );
};

export default Footer;
