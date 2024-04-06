import Link from "next/link";

interface HeaderProps {
  title: string;
  content?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ title, content }) => {
  return (
    <header className="flex items-center justify-between w-full h-14 bg-[#131921] p-5 fixed top-0">
      <Link href="/" className="text-white text-2xl">
        {title}
      </Link>

      {content}
    </header>
  );
};

export default Header;
