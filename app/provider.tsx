'use client';

import { ThemeContext } from '@/contextAPI/contextAPI';
import { useEffect, useState } from 'react';
import Loading from './loading';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(function initialize() {
    const storedTheme = localStorage.getItem('theme') ?? '';

    setTheme(storedTheme);

    if (storedTheme !== '') {
      document.querySelector('html')?.setAttribute('data-theme', storedTheme);
    }
  }, []);

  useEffect(
    function handleChangedTheme() {
      if (theme === null) {
        return;
      }

      document.querySelector('html')?.setAttribute('data-theme', theme);

      if (theme === '') {
        localStorage.removeItem('theme');
        return;
      }

      localStorage.setItem('theme', theme);
    },
    [theme],
  );

  if (theme === null) {
    return <Loading />;
  }

  return <ThemeContext.Provider value={{ setTheme }}>{children}</ThemeContext.Provider>;
}
