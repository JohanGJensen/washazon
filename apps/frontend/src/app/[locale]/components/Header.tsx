import Link from "next/link";

interface HeaderProps {
  title: string;
  content?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ title, content }) => {
  return (
    <header className="flex items-center justify-between flex-col sm:flex-row w-full h-auto sm:h-14 bg-nav-primary p-5 fixed top-0 z-10">
      <Link href="/" className="text-white text-2xl">
        {title}
      </Link>

      {content && <nav className={"flex gap-2"}>{content}</nav>}
    </header>
  );
};

export default Header;
