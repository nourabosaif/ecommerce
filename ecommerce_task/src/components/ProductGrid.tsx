import type { Product } from "../types/product";
import { ProductCard } from "./ProductCard";
import { ProductGridSkeleton } from "./ProductGridSkeleton";

interface Props {
  products: Product[];
  loading: boolean;
  error: string | null;
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

export function ProductGrid({ products, loading, error, onAddToCart, onViewDetails }: Props) {
  if (loading) {
    return <ProductGridSkeleton />;
  }

  if (error) {
    return (
      <p className="text-center text-color-muted py-12">
        {error}
      </p>
    );
  }

  if (products.length === 0) {
    return (
      <p className="text-center text-color-muted py-12">
        No products match your filters.
      </p>
    );
  }

  return (
    <div className="grid mb-1 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  );
}