import ThemeButton from './ThemeButton';

const Header = () => {
  return (
    <div className="sticky top-0 z-50 border-b border-gray-300 bg-gray-100">
      <div className="w-full max-w-7xl flex items-center justify-between p-4 mx-auto">
        <p className="text-4xl font-black">Vite</p>
        <ThemeButton />
      </div>
    </div>
  );
};

export default Header;
