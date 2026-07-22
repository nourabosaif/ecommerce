export function ProductCardSkeleton() {
  return (
    <div className="border border-[var(--color-line)] bg-white animate-pulse">
      <div className="h-44 w-full bg-[var(--color-line)]" />
      <div className="p-4">
        <div className="h-3 w-1/3 bg-[var(--color-line)] rounded-sm" />
        <div className="h-5 w-3/4 mt-2 bg-[var(--color-line)] rounded-sm" />
        <div className="h-3 w-full mt-2 bg-[var(--color-line)] rounded-sm" />
        <div className="h-3 w-5/6 mt-1 bg-[var(--color-line)] rounded-sm" />
        <div className="flex items-center justify-between mt-4">
          <div className="h-6 w-14 bg-[var(--color-line)] rounded-sm" />
          <div className="h-6 w-20 bg-[var(--color-line)] rounded-sm" />
        </div>
      </div>
    </div>
  );
}