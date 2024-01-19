'use client';

import CheckList from '../../components/CheckLIst';

export default function SecondContent() {
  return (
    <div className="divide-y divide-gray-300/50">
      <div className="space-y-6 py-4 text-base leading-7 text-gray-600">
        <h2 className="text-3xl text-primary">두번째 페이지</h2>

        <CheckList />

        <p>
          아래 버튼을 클릭하여 테마를 변경해 보세요. <br />
          테마가 변경될 때마다 로컬 스토리지에 지정한 테마가 저장됩니다. <br />
          새로고침을 하거나 창을 닫고 재접속을 해도 <br />
          테마가 유지됩니다 :)
        </p>

        <div className="pt-8 text-base font-semibold leading-7 border-t border-[#e9e9e9e9]">
          <p>
            <a href="/" className="text-primary">
              메인 페이지로 돌아가기 &rarr;
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
