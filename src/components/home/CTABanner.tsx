import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="py-20 bg-stone-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-amber-600/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-600/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase">
          Limited Time Offer
        </span>
        <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          Get 15% Off Your First Order
        </h2>
        <p className="mt-4 text-stone-300 max-w-xl mx-auto leading-relaxed">
          Experience the pure, unprocessed sweetness of Beecone honey. Use code{" "}
          <span className="font-mono font-bold text-amber-400">SWEET15</span>{" "}
          at checkout.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/shop"
            className="inline-flex items-center justify-center rounded-full bg-amber-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-amber-500 transition-all hover:shadow-amber-500/25"
          >
            Shop the Collection
          </Link>
          <Link
            href="/shop?category=gift-set"
            className="inline-flex items-center justify-center rounded-full border-2 border-amber-500/30 px-8 py-3.5 text-sm font-semibold text-amber-400 hover:bg-amber-500/10 transition-all"
          >
            Explore Gift Sets
          </Link>
        </div>
      </div>
    </section>
  );
}
