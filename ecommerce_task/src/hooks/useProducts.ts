import { useEffect, useState } from "react";
import { getProducts } from "../api/products";
import type { Product, Filters } from "../types/product";

const PAGE_SIZE = 12;

export function useProducts(filters: Filters, page: number) {
  const [products, setProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchProducts() {
      setLoading(true);
      setError(null);

      try {
        const skip = (page - 1) * PAGE_SIZE;
        const data = await getProducts({
          limit: PAGE_SIZE,
          skip,
          search: filters.search || undefined,
          category: filters.category || undefined,
        });

        if (cancelled) return;

        let results = data.products;

        // Client-side price filter — DummyJSON has no price-range param
        if (filters.minPrice != null) {
          results = results.filter((p) => p.price >= filters.minPrice!);
        }
        if (filters.maxPrice != null) {
          results = results.filter((p) => p.price <= filters.maxPrice!);
        }

        setProducts(results);
        setTotal(data.total);
      } catch (err) {
        if (!cancelled) setError("Failed to load products.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchProducts();

    return () => {
      cancelled = true;
    };
  }, [filters.search, filters.category, filters.minPrice, filters.maxPrice, page]);

  return { products, total, loading, error, pageSize: PAGE_SIZE };
}