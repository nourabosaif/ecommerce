import type { Product } from "../types/product";

interface Props {
  product: Product;
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart, onViewDetails }: Props) {
  return (
    <div className="group border border-[var(--color-line)] bg-white">
      <div className="overflow-hidden">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <span className="text-xs uppercase tracking-wide text-[var(--color-muted)]">
          {product.category}
        </span>
        <h3 className="font-[var(--font-display)] text-lg font-medium mt-1 leading-snug">
          {product.title}
        </h3>
        <p className="text-sm text-[var(--color-muted)] mt-1 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-4">
          <span className="font-[var(--font-mono)] text-[var(--color-accent)] text-sm bg-[var(--color-accent-soft)] px-2 py-1 rounded-sm">
            ${product.price}
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => onViewDetails(product)}
              className="text-sm underline underline-offset-2 text-[var(--color-muted)] hover:text-[var(--color-ink)]"
            >
              Details
            </button>
            <button
              onClick={() => onAddToCart(product)}
              className="text-sm bg-[var(--color-accent)] text-white px-3 py-1.5 hover:opacity-90"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}