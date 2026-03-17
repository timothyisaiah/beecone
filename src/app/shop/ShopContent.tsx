"use client";

import { useState, useMemo } from "react";
import { products, categoryLabels } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";
import { SlidersHorizontal } from "lucide-react";

const categories = Object.keys(categoryLabels);
const sizes = ["All Sizes", "60g", "100g", "250g", "400g", "1Litre"];
const priceRanges = [
  { label: "All Prices", min: 0, max: Infinity },
  { label: "Under $25", min: 0, max: 25 },
  { label: "$25 – $35", min: 25, max: 35 },
  { label: "$35 – $50", min: 35, max: 50 },
  { label: "Over $50", min: 50, max: Infinity },
];

export default function ShopContent() {
  const [category, setCategory] = useState("all");
  const [size, setSize] = useState("All Sizes");
  const [priceRange, setPriceRange] = useState(0);
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      if (size !== "All Sizes" && p.size !== size) return false;
      const range = priceRanges[priceRange];
      if (p.price < range.min || p.price > range.max) return false;
      return true;
    });
  }, [category, size, priceRange]);

  return (
    <div className="min-h-screen bg-amber-50/30">
      {/* Header */}
      <div className="bg-stone-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white">
            Our Collection
          </h1>
          <p className="mt-3 text-stone-300 max-w-xl mx-auto">
            Explore our range of pure, natural honey — each variety crafted by
            nature, harvested with care.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Mobile filter toggle */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="lg:hidden mb-6 flex items-center gap-2 text-sm font-medium text-stone-700 hover:text-amber-700 transition-colors"
        >
          <SlidersHorizontal className="h-4 w-4" />
          {showFilters ? "Hide Filters" : "Show Filters"}
        </button>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar filters */}
          <aside
            className={`lg:w-64 shrink-0 space-y-8 ${showFilters ? "block" : "hidden lg:block"}`}
          >
            {/* Category */}
            <div>
              <h3 className="text-sm font-semibold text-stone-900 uppercase tracking-wider">
                Category
              </h3>
              <div className="mt-3 space-y-1">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      category === cat
                        ? "bg-amber-100 text-amber-800 font-medium"
                        : "text-stone-600 hover:bg-stone-100"
                    }`}
                  >
                    {categoryLabels[cat]}
                  </button>
                ))}
              </div>
            </div>

            {/* Size */}
            <div>
              <h3 className="text-sm font-semibold text-stone-900 uppercase tracking-wider">
                Size
              </h3>
              <div className="mt-3 space-y-1">
                {sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      size === s
                        ? "bg-amber-100 text-amber-800 font-medium"
                        : "text-stone-600 hover:bg-stone-100"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div>
              <h3 className="text-sm font-semibold text-stone-900 uppercase tracking-wider">
                Price
              </h3>
              <div className="mt-3 space-y-1">
                {priceRanges.map((range, i) => (
                  <button
                    key={range.label}
                    onClick={() => setPriceRange(i)}
                    className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      priceRange === i
                        ? "bg-amber-100 text-amber-800 font-medium"
                        : "text-stone-600 hover:bg-stone-100"
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm text-stone-500">
                {filtered.length} product{filtered.length !== 1 && "s"}
              </p>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-stone-500">
                  No products match your filters. Try adjusting your selection.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
