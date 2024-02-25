import '../globals.css';

type PageWrapperProps = {
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {children}
    </main>
  );
};

export default PageWrapper;
