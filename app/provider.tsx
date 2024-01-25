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
    const storedTheme = localStorage.getItem('theme') ?? 'blue';
    setTheme(storedTheme);
    document.querySelector('html')?.setAttribute('data-theme', storedTheme);
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

  if (theme === '') {
    return <Loading />;
  }

  return <ThemeContext.Provider value={{ setTheme }}>{children}</ThemeContext.Provider>;
}
