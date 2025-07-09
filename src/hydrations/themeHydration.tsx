'use client';
import { useThemeStore } from '@/stores/themeStore';

const ThemeHydration = ({ children }: { children: React.ReactNode }) => {
  const hasHydrated = useThemeStore((state) => state.hasHydrated);

  if (!hasHydrated) return null;

  return <>{children}</>;
};

export default ThemeHydration;
