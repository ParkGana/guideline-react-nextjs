'use client';
import { useEffect, useState } from 'react';

const ThemeButton = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    theme === 'light'
      ? document.documentElement.classList.remove('dark')
      : document.documentElement.classList.add('dark');
  }, []);

  /* 테마 Toggle */
  const handleToggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="text-body cursor-pointer" onClick={handleToggleTheme}>
      {theme.toLocaleUpperCase()}
    </div>
  );
};

export default ThemeButton;
