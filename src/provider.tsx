'use client';
import { ThemeProvider } from 'styled-components';
import AuthProvider from './providers/authProvider';
import QueryProvider from './providers/queryProvider';
import { darkTheme, theme as lightTheme } from './styles/theme';
import { useThemeStore } from './stores/themeStore';

const Provider = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useThemeStore();

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <QueryProvider>
        <AuthProvider>{children}</AuthProvider>
      </QueryProvider>
    </ThemeProvider>
  );
};

export default Provider;
