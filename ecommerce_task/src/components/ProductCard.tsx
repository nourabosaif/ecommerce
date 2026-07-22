import type { Product } from "../types/product";

interface Props {
  product: Product;
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart, onViewDetails }: Props) {
  return (
    <div className="group border border-color-line bg-white">
      <div className="relative overflow-hidden">
        <span className="absolute top-2 left-2 z-10 font-font-mono text-xs text-white bg-black/50 px-1.5 py-0.5">
          No. {String(product.id).padStart(3, "0")}
        </span>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <span className="text-xs uppercase tracking-wide text-color-muted">
          {product.category}
        </span>
        <h3
          className="font-font-display text-lg font-medium mt-1 leading-snug inline
          bg-[linear-gradient(var(--color-ink),var(--color-ink))] bg-no-repeat bg-[length:0%_1px] bg-[position:0_100%]
          group-hover:bg-[length:100%_1px] transition-[background-size] duration-300"
        >
          {product.title}
        </h3>
        <p className="text-sm text-color-muted mt-1 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-4">
          <span className="font-font-mono text-color-accent text-sm bg-color-accent-soft px-2 py-1 rounded-sm">
            ${product.price}
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => onViewDetails(product)}
              className="text-sm underline underline-offset-2 text-color-muted hover:text-color-ink"
            >
              Details
            </button>
            <button
              onClick={() => onAddToCart(product)}
              className="text-sm bg-green-700 text-white px-3 py-1.5 hover:opacity-90"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}