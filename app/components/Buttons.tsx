interface ButtonsProps {
  setTheme: (theme: string) => void;
}

export default function Buttons({ setTheme }: ButtonsProps) {
  return (
    <div className="flex gap-[20px] mt-[20px]">
      <button
        type="button"
        className="bg-[#e0f2fe] text-[#0ea5e9] p-[5px]"
        onClick={() => {
          setTheme('blue');
        }}
      >
        Blue theme
      </button>

      <button
        type="button"
        className="bg-[#e9e9e9e9] text-[#909090] p-[5px]"
        onClick={() => {
          setTheme('gray');
        }}
      >
        Gray theme
      </button>

      <button
        type="button"
        className="bg-[#ffdeeb] text-[#f783ac] p-[5px]"
        onClick={() => {
          setTheme('pink');
        }}
      >
        Pink theme
      </button>
    </div>
  );
}
