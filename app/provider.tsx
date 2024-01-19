'use client';

import { ThemeContext } from '@/contextAPI/contextAPI';
import { useEffect, useState } from 'react';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<string>(localStorage.getItem('theme') ?? 'blue');

  useEffect(function initialize() {
    document
      .querySelector('html')
      ?.setAttribute('data-theme', localStorage.getItem('theme') ?? 'blue');
  }, []);

  useEffect(
    function handleLocalStorageTheme() {
      localStorage.setItem('theme', theme);
      document.querySelector('html')?.setAttribute('data-theme', theme);
    },
    [theme],
  );

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}
