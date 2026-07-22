interface Props {
  page: number;
  total: number;
  pageSize: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ page, total, pageSize, onPageChange }: Props) {
  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  if (totalPages <= 1) return null;

  return (
    <div className="mt-5 flex justify-center items-center gap-4">
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        className="text-sm px-3 py-1.5 border border-[var(--color-line)] disabled:opacity-30 disabled:cursor-not-allowed hover:border-[var(--color-accent)]"
      >
        Prev
      </button>

      <span className="text-sm font-[var(--font-mono)] text-[var(--color-muted)]">
        {page} / {totalPages}
      </span>

      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
        className="text-sm px-3 py-1.5 border border-[var(--color-line)] disabled:opacity-30 disabled:cursor-not-allowed hover:border-[var(--color-accent)]"
      >
        Next
      </button>
    </div>
  );
}