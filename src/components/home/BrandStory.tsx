import Image from "next/image";
import Link from "next/link";

export default function BrandStory() {
  return (
    <section className="py-20 bg-amber-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800&q=80"
              alt="Beekeeper tending to hives"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 to-transparent" />
          </div>

          {/* Content */}
          <div>
            <span className="text-amber-600 text-sm font-semibold tracking-widest uppercase">
              Our Story
            </span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-stone-900 leading-tight">
              From Hive to Home,
              <br />
              <span className="text-amber-700">Crafted with Care</span>
            </h2>
            <p className="mt-6 text-stone-600 leading-relaxed">
              Beecone was born from a deep reverence for nature and a passion
              for purity. We partner with smallholder beekeepers who share our
              commitment to sustainable, chemical-free practices — ensuring every
              jar of honey is as good for the planet as it is for your palate.
            </p>
            <p className="mt-4 text-stone-600 leading-relaxed">
              Our honey is never heated, filtered, or blended with additives.
              What you taste is pure, raw sweetness — exactly as the bees
              intended. From wildflower meadows to deep tropical forests, each
              variety carries the unique character of its origin.
            </p>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-6">
              <div>
                <p className="font-serif text-3xl font-bold text-amber-700">
                  500+
                </p>
                <p className="mt-1 text-sm text-stone-500">Bee Colonies</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-amber-700">
                  100%
                </p>
                <p className="mt-1 text-sm text-stone-500">Natural & Raw</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-amber-700">
                  50+
                </p>
                <p className="mt-1 text-sm text-stone-500">
                  Partner Beekeepers
                </p>
              </div>
            </div>

            <Link
              href="/about"
              className="mt-8 inline-flex items-center text-sm font-semibold text-amber-700 hover:text-amber-600 transition-colors group"
            >
              Learn more about our mission
              <svg
                className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
