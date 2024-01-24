'use client';

import { ThemeContext } from '@/contextAPI/contextAPI';
import { useEffect, useState } from 'react';
import Loading from './loading';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<string>('');

  useEffect(function initialize() {
    setTheme(localStorage.getItem('theme') ?? 'blue');
    document
      .querySelector('html')
      ?.setAttribute('data-theme', localStorage.getItem('theme') ?? 'blue');
  }, []);

  useEffect(
    function handleChangedTheme() {
      if (!theme) {
        return;
      }

      localStorage.setItem('theme', theme);
      document.querySelector('html')?.setAttribute('data-theme', theme);
    },
    [theme],
  );

  return (
    <ThemeContext.Provider value={{ setTheme }}>
      {theme === '' ? <Loading /> : children};
    </ThemeContext.Provider>
  );
}
