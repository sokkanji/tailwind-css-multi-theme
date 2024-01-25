import Link from 'next/link';
import Wrapper from '../components/Wrapper';

export default function SecondPage() {
  return (
    <Wrapper>
      <div className="divide-y divide-gray-300/50">
        <div className="space-y-6 py-4 text-base leading-7 text-gray-600">
          <h2 className="text-3xl text-primary">두 번째 페이지</h2>

          <p>provider를 사용하여 선택한 테마를 여러 페이지에 적용할 수 있습니다.</p>

          <div className="pt-8 text-base font-semibold leading-7 border-t border-[#e9e9e9e9]">
            <p>
              <Link href="/" className="text-primary">
                메인 페이지로 돌아가기 &rarr;
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
