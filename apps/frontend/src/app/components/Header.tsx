import Link from "next/link";
import Filter from "./Filter";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="flex items-center w-full h-14 bg-[#131921] p-5 fixed top-0">
      <Link href="/" className="text-white text-2xl">
        {title}
      </Link>

      <Filter />
    </header>
  );
};

export default Header;
