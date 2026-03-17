import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=1920&q=80"
          alt="Golden honey flowing"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/80 via-stone-900/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <span className="inline-block text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4">
            Premium Natural Honey
          </span>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Sweetness
            <br />
            <span className="text-amber-400">from Within</span>
          </h1>
          <p className="mt-6 text-lg text-stone-200 leading-relaxed max-w-lg">
            Discover our collection of ethically sourced, pure honey —
            harvested with care from nature&apos;s finest blossoms. Every jar
            tells a story of sweetness, sustainability, and craft.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center rounded-full bg-amber-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-amber-500 transition-all hover:shadow-amber-500/25 hover:-translate-y-0.5"
            >
              Shop Now
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/30 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-all"
            >
              Our Story
            </Link>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex items-center gap-8 text-stone-300">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-white">100%</span>
              <span className="text-xs uppercase tracking-wider">Natural</span>
            </div>
            <div className="w-px h-10 bg-stone-600" />
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-white">Ethical</span>
              <span className="text-xs uppercase tracking-wider">
                Sourcing
              </span>
            </div>
            <div className="w-px h-10 bg-stone-600" />
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-white">Pure</span>
              <span className="text-xs uppercase tracking-wider">
                Unprocessed
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
