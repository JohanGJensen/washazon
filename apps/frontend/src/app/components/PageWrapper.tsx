import "../globals.css";
import Footer from "./Footer";
import Header from "./Header";

type PageWrapperProps = {
  children: React.ReactNode;
};

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <main className="flex flex-col items-center justify-between h-screen w-full">
      <Header title={"washazon"} />
      {children}
      <Footer />
    </main>
  );
};

export default PageWrapper;
