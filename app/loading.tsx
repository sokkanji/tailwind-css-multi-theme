import LoadingIcon from '@/public/loading.svg';

export default function Loading() {
  return (
    <div className="fixed left-0 top-0 z-50 h-full w-full bg-white opacity-75">
      <div className="mt-[50vh] flex items-center justify-center">
        <LoadingIcon className="animate-spin" />
      </div>
    </div>
  );
}
