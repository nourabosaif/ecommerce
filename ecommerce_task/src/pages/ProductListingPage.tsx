import { useState } from "react";
import { useProducts } from "../hooks/useProducts";
import { ProductGrid } from "../components/ProductGrid";
import { FilterBar } from "../components/FilterBar";
import { Pagination } from "../components/Pagination";
import { ProductForm } from "../components/ProductForm";
import type { Product, Filters } from "../types/product";

const initialFilters: Filters = {
  search: "",
  category: "",
  minPrice: null,
  maxPrice: null,
};

export function ProductListingPage() {
  const [filters, setFilters] = useState<Filters>(initialFilters);
  const [page, setPage] = useState(1);
  const [cartCount, setCartCount] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [localProducts, setLocalProducts] = useState<Product[]>([]);

  const { products, total, loading, error, pageSize } = useProducts(filters, page);

  function handleAddProduct(product: Product) {
    setLocalProducts((prev) => [product, ...prev]);
  }

  function handleFiltersChange(newFilters: Filters) {
    setFilters(newFilters);
    setPage(1);
  }

  function handleAddToCart(product: Product) {
    setCartCount((c) => c + 1);
    console.log("add to cart:", product.title);
  }

  function handleViewDetails(product: Product) {
    console.log("view details:", product.title);
  }

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <header className="border-b border-[var(--color-line)] bg-white">
        <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
          <h1 className="font-[var(--font-display)] text-2xl tracking-tight">
            Catalogue
          </h1>
          <button className="relative">
            <span className="text-sm">Cart</span>
            {cartCount > 0 && (
              <span
                key={cartCount}
                className="cart-badge-pop absolute -top-2 -right-3 bg-[var(--color-accent)] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full"
              >
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <button
          onClick={() => setShowForm((s) => !s)}
          className="text-sm underline mb-4"
        >
          {showForm ? "Close form" : "+ Add Product"}
        </button>
        {showForm && (
          <ProductForm onAdd={handleAddProduct} onClose={() => setShowForm(false)} />
        )}

        <FilterBar filters={filters} onChange={handleFiltersChange} />

        <ProductGrid
          products={[...localProducts, ...products]}
          loading={loading}
          error={error}
          onAddToCart={handleAddToCart}
          onViewDetails={handleViewDetails}
        />

        <Pagination
          page={page}
          total={total}
          pageSize={pageSize}
          onPageChange={setPage}
        />
      </main>
    </div>
  );
}