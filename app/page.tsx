'use client';

import Link from 'next/link';
import Buttons from './components/Buttons';
import MainContent from './components/MainContent';

export default function MainPage() {
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      <div className="absolute inset-0 bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

      <div className="relative bg-white px-6 pt-10 pb-10 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
        <div className="mx-auto max-w-md">
          <MainContent />
        </div>
        <div className="text-base font-semibold leading-7 border-t border-[#e9e9e9e9]">
          <Buttons />
          <p className="pt-5">
            <Link href="/second" className="text-primary">
              두 번째 페이지로 이동하기 &rarr;
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
