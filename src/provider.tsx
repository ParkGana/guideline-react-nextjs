'use client';
import { ThemeProvider } from 'styled-components';
import AuthProvider from './providers/authProvider';
import QueryProvider from './providers/queryProvider';
import { theme } from './styles/theme';

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <QueryProvider>
        <AuthProvider>{children}</AuthProvider>
      </QueryProvider>
    </ThemeProvider>
  );
};

export default Provider;
