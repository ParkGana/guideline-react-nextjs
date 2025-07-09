import Footer from './Footer';
import Header from './Header';

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="w-full max-w-7xl flex-1 bg-gray-100 p-4 mx-auto">{children}</div>
      <Footer />
    </div>
  );
};

export default PageLayout;
