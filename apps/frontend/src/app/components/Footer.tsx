interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="flex items-center justify-center w-full h-14 bg-nav-primary p-5 text-white fixed bottom-0">
      <span className="text-[8px] md:text-xs">
        © 1996-2024, Washazon.com, Inc. or its affiliates
      </span>
    </footer>
  );
};

export default Footer;