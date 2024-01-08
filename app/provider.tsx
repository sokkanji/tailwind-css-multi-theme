'use client';

import { useEffect } from 'react';

interface ThemeProviderProps {
  theme: string;
  children: React.ReactNode;
}

export default function ThemeProvider({ theme, children }: ThemeProviderProps) {
  useEffect(
    function handleLocalStorageTheme() {
      if (!theme) {
        return;
      }
      localStorage.setItem('theme', theme);
      document.querySelector('html')?.setAttribute('data-theme', theme);
    },
    [theme],
  );

  return <>{children}</>;
}
