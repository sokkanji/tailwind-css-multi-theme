interface CheckListProps {
  data: JSX.Element[];
}

export default function CheckList({ data }: CheckListProps) {
  return (
    <ul className="space-y-4">
      {data.map((item, i) => {
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
