'use client';

import Buttons from './components/Buttons';
import CheckList from './components/CheckLIst';
import Wrapper from './components/Wrapper';
import Link from 'next/link';

export default function MainPage() {
  const textList = [
    <>
      <code className="text-sm font-bold text-gray-900">global.css</code>에 스타일 변수 선언하기
    </>,
    <>
      <code className="text-sm font-bold text-gray-900">tailwind.config.ts</code>에 스타일 변수
      선언하기
    </>,
    <>스타일 변수로 컴포넌트 스타일 작성하기</>,
    <>테마 변경하는 버튼 이벤트 추가하기</>,
    <>
      <code className="text-sm font-bold text-gray-900">localStorage</code>를 이용해서 테마 저장하기
    </>,
  ];

  return (
    <Wrapper>
      <div className="divide-y divide-gray-300/50">
        <div className="space-y-8 py-4 text-base leading-7 text-gray-600">
          <h2 className="text-3xl text-primary">멀티 테마 구현하기</h2>

          <CheckList data={textList} />

          <p>
            아래 버튼을 클릭하여 테마 색상을 변경해 보세요. <br />
            테마가 변경될 때마다 로컬 스토리지에 지정한 테마가 저장됩니다. <br />
            새로고침을 하거나 창을 닫고 재접속을 해도 테마가 유지됩니다 :)
          </p>
        </div>
      </div>

      <div className="text-base font-semibold leading-7 border-t border-[#e9e9e9e9]">
        <Buttons />

        <p className="pt-5">
          <Link href="/second" className="text-primary">
            두 번째 페이지로 이동하기 &rarr;
          </Link>
        </p>
      </div>
    </Wrapper>
  );
}
