import ThemeHydration from './hydrations/themeHydration';

const Hydration = ({ children }: { children: React.ReactNode }) => {
  return <ThemeHydration>{children}</ThemeHydration>;
};

export default Hydration;
