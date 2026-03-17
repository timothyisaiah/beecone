import Link from "next/link";
import { getFeaturedProducts } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";

export default function FeaturedProducts() {
  const featured = getFeaturedProducts().slice(0, 6);

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-amber-600 text-sm font-semibold tracking-widest uppercase">
            Our Collection
          </span>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-stone-900">
            Featured Products
          </h2>
          <p className="mt-3 text-stone-500 max-w-xl mx-auto">
            Handpicked favourites from our hive. Each jar is a testament to
            nature&apos;s finest craftsmanship.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/shop"
            className="inline-flex items-center justify-center rounded-full border-2 border-amber-600 px-8 py-3 text-sm font-semibold text-amber-700 hover:bg-amber-600 hover:text-white transition-all"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
