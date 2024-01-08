'use client';

import { useState } from 'react';
import ThemeProvider from './provider';

import Buttons from './components/Buttons';
import Content from './components/Content';

export default function Home() {
  const [theme, setTheme] = useState<string>(localStorage.getItem('theme') ?? '');

  return (
    <ThemeProvider theme={theme}>
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
        <div className="absolute inset-0 bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

        <div className="relative bg-white px-6 pt-10 pb-10 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
          <div className="mx-auto max-w-md">
            <Content />
            <Buttons setTheme={setTheme} />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
