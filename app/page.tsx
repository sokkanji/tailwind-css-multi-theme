"use client";

import { useState } from "react";
import ThemeProvider from "./provider";

export default function Home() {
  const [theme, setTheme] = useState<string>(localStorage.getItem("theme") ?? "");

  return (
    <ThemeProvider theme={theme}>
      <main className="flex min-h-screen flex-col items-center justify-center gap-[30px] p-24 bg-primary dark:bg-blue-500">
        <button
          type="button"
          className="bg-primary text-secondary border border-[#dddd] p-[4px]"
          onClick={() => {
            setTheme("dark");
          }}
        >
          Dark theme
        </button>

        <button
          type="button"
          className="bg-primary text-secondary border border-[#dddd] p-[4px]"
          onClick={() => {
            setTheme("second");
          }}
        >
          Second theme
        </button>
      </main>
    </ThemeProvider>
  );
}
