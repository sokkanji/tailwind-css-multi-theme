import CheckList from './CheckLIst';

export default function MainContent() {
  return (
    <div className="divide-y divide-gray-300/50">
      <div className="space-y-8 py-4 text-base leading-7 text-gray-600">
        <h2 className="text-3xl text-primary">커스텀 테마 3가지 이상 구현하기</h2>

        <CheckList />

        <p>
          아래 버튼을 클릭하여 테마 색상을 변경해 보세요. <br />
          테마가 변경될 때마다 로컬 스토리지에 지정한 테마가 저장됩니다. <br />
          새로고침을 하거나 창을 닫고 재접속을 해도 테마가 유지됩니다 :)
        </p>
      </div>
    </div>
  );
}
