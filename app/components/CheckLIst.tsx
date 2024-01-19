import React from 'react';

export default function CheckList() {
  const textList = [
    <>
      <code className="text-sm font-bold text-gray-900">global.css</code>에 스타일 변수 선언하기
    </>,
    <>
      <code className="text-sm font-bold text-gray-900">tailwind.config.ts</code>에 스타일 변수
      선언하기
    </>,
    <>스타일 변수로 컴포넌트에 스타일 작성하기</>,
    <>
      <code className="text-sm font-bold text-gray-900">localStorage</code>를 이용해서 테마 저장하기
    </>,
  ];

  return (
    <ul className="space-y-4">
      {textList.map((item, i) => {
        return (
          <li key={i} className="flex items-center">
            <svg
              className="h-6 w-6 flex-none fill-secondary stroke-primary stroke-2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="11" />
              <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
            </svg>
            <p className="ml-4">{item}</p>
          </li>
        );
      })}
    </ul>
  );
}
