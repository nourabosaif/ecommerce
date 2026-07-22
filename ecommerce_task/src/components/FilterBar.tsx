import { useEffect, useState } from "react";
import { getCategories } from "../api/products";
import type { Filters, Category } from "../types/product";

interface Props {
  filters: Filters;
  onChange: (filters: Filters) => void;
}

export function FilterBar({ filters, onChange }: Props) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [searchInput, setSearchInput] = useState(filters.search);

  useEffect(() => {
    getCategories().then(setCategories).catch(() => setCategories([]));
  }, []);

 
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (searchInput !== filters.search) {
        onChange({ ...filters, search: searchInput });
      }
    }, 400);
    return () => clearTimeout(timeout);
  }, [searchInput]);

  return (
    <div className="border-b border-color-line pb-6 mb-6 space-y-4">
      <input
        type="text"
        placeholder="Search products..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        className="w-full border border-color-line px-3 py-2 text-sm focus:outline-none focus:border-color-accent"
      />

      <div className="flex flex-wrap gap-4 items-center">
        <button
          onClick={() => onChange({ ...filters, category: "" })}
          className={`text-sm pb-1 border-b-2 ${
            filters.category === ""
              ? "border-color-accent text-color-ink"
              : "border-transparent text-color-muted"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => onChange({ ...filters, category: cat.slug })}
            className={`text-sm pb-1 border-b-2 capitalize ${
              filters.category === cat.slug
                ? "border-color-accent text-color-ink"
                : "border-transparent text-color-muted"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="flex gap-3 items-center">
        <input
          type="number"
          placeholder="Min price"
          value={filters.minPrice ?? ""}
          onChange={(e) =>
            onChange({
              ...filters,
              minPrice: e.target.value ? Number(e.target.value) : null,
            })
          }
          className="w-28 border border-color-line px-2 py-1.5 text-sm focus:outline-none focus:border-color-accent"
        />
        <span className="text-color-muted text-sm">–</span>
        <input
          type="number"
          placeholder="Max price"
          value={filters.maxPrice ?? ""}
          onChange={(e) =>
            onChange({
              ...filters,
              maxPrice: e.target.value ? Number(e.target.value) : null,
            })
          }
          className="w-28 border border-color-line px-2 py-1.5 text-sm focus:outline-none focus:border-color-accent"
        />
      </div>
    </div>
  );
}