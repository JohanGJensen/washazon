import Link from "next/link";


interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="flex items-center w-full h-14 bg-[#131921] p-5">
      <Link href="/" className="text-white text-2xl">
        {title}
      </Link>
    </header>
  );
};

export default Header;
