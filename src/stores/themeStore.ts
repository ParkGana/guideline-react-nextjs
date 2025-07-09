import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type ThemeStoreType = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  hasHydrated: boolean;
  setHasHydrated: (state: boolean) => void;
};

// export const useThemeStore = create<ThemeStoreType>((set) => ({
//   theme: 'light',
//   toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' }))
// }));

export const useThemeStore = create(
  persist<ThemeStoreType>(
    (set) => ({
      theme: 'light',
      toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
      hasHydrated: false,
      setHasHydrated: (state) => set({ hasHydrated: state })
    }),
    {
      name: 'theme-storage',
      onRehydrateStorage: () => (state) => state?.setHasHydrated(true)
    }
  )
);
