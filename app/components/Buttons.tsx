import { ThemeContext } from '@/contextAPI/contextAPI';
import { useContext } from 'react';

export default function Buttons() {
  const context = useContext(ThemeContext);

  return (
    <div className="flex gap-[20px] mt-[20px]">
      <button
        type="button"
        className="bg-[#e0f2fe] text-[#0ea5e9] p-[5px]"
        onClick={() => context?.setTheme('blue')}
      >
        Blue theme
      </button>

      <button
        type="button"
        className="bg-[#e9e9e9e9] text-[#909090] p-[5px]"
        onClick={() => context?.setTheme('gray')}
      >
        Gray theme
      </button>

      <button
        type="button"
        className="bg-[#ffdeeb] text-[#f783ac] p-[5px]"
        onClick={() => context?.setTheme('pink')}
      >
        Pink theme
      </button>
    </div>
  );
}
