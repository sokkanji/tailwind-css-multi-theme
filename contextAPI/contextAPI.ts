'use client';

import { Dispatch, SetStateAction, createContext } from 'react';

export const ThemeContext = createContext<{
  setTheme: Dispatch<SetStateAction<string | null>>;
} | null>(null);
