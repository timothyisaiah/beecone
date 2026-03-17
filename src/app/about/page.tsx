import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Heart, Leaf, Shield, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Beecone's story, mission, and commitment to sustainable, ethical honey production.",
};

const values = [
  {
    icon: Leaf,
    title: "100% Natural",
    description:
      "Our honey is never heated, filtered, or blended with additives. Pure, raw sweetness as nature intended.",
  },
  {
    icon: Shield,
    title: "Ethically Sourced",
    description:
      "We partner with smallholder beekeepers who share our commitment to sustainable, chemical-free practices.",
  },
  {
    icon: Heart,
    title: "Community First",
    description:
      "Every jar supports fair wages, training programs, and rural economic development across West Africa.",
  },
  {
    icon: Users,
    title: "Transparency",
    description:
      "From hive to home, we believe in full traceability. Know exactly where your honey comes from.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-stone-900 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=1920&q=80"
            alt="Beehives in nature"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase">
            Our Story
          </span>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Crafted by Nature,
            <br />
            Curated with Care
          </h1>
          <p className="mt-6 text-stone-300 max-w-2xl mx-auto leading-relaxed">
            Beecone was born from a simple belief: that the world deserves
            honey in its purest form — unprocessed, unadulterated, and produced
            in harmony with nature.
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-amber-600 text-sm font-semibold tracking-widest uppercase">
                The Beginning
              </span>
              <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-stone-900 leading-tight">
                From a Love of Nature
                <br />
                to a Mission for Purity
              </h2>
              <div className="mt-6 space-y-4 text-stone-600 leading-relaxed">
                <p>
                  Beecone started with a question: why is it so hard to find
                  truly pure, unprocessed honey? Founded by Beacon Flame
                  Innovations, we set out to bridge the gap between
                  nature&apos;s perfect creation and the consumer&apos;s table.
                </p>
                <p>
                  We work directly with a network of over 50 smallholder
                  beekeepers across West Africa, providing training in
                  sustainable beekeeping practices and paying fair prices that
                  support their families and communities.
                </p>
                <p>
                  Every jar of Beecone honey is a testament to our commitment:
                  no heat treatment, no ultra-filtration, no additives. Just
                  pure honey, exactly as the bees made it. We believe this is
                  how honey should be — and how it will be, as long as we
                  protect the bees and the ecosystems they depend on.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&q=80"
                alt="Pure golden honey"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-amber-50/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-amber-600 text-sm font-semibold tracking-widest uppercase">
            Mission & Vision
          </span>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-stone-900">
            What Drives Us
          </h2>

          <div className="mt-12 grid sm:grid-cols-2 gap-8 text-left">
            <div className="rounded-2xl bg-white border border-amber-100 p-8">
              <h3 className="font-serif text-xl font-bold text-stone-900">
                Our Mission
              </h3>
              <p className="mt-3 text-stone-600 leading-relaxed">
                To deliver the world&apos;s purest honey while empowering
                smallholder beekeepers and protecting bee populations for
                future generations. We are committed to sustainability at every
                step of the value chain.
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-amber-100 p-8">
              <h3 className="font-serif text-xl font-bold text-stone-900">
                Our Vision
              </h3>
              <p className="mt-3 text-stone-600 leading-relaxed">
                A world where every jar of honey is a force for good — nourishing
                bodies, sustaining ecosystems, and uplifting communities. We
                envision Beecone as the gold standard of ethical, premium honey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-amber-600 text-sm font-semibold tracking-widest uppercase">
              Our Values
            </span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-stone-900">
              What We Stand For
            </h2>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl bg-amber-50/50 border border-amber-100 p-6 text-center"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                  <value.icon className="h-6 w-6 text-amber-700" />
                </div>
                <h3 className="mt-4 font-serif text-lg font-semibold text-stone-900">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing */}
      <section className="py-20 bg-stone-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1471943311424-646960669fbc?w=800&q=80"
                alt="Sustainable beekeeping"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase">
                Ethical Sourcing
              </span>
              <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
                Responsible from
                <br />
                Hive to Home
              </h2>
              <div className="mt-6 space-y-4 text-stone-300 leading-relaxed">
                <p>
                  Our honey is sourced from chemical-free apiaries where bees
                  forage on organic wildflowers and forest blossoms. We never
                  over-harvest — always leaving enough for the bees to thrive.
                </p>
                <p>
                  We invest in our beekeepers through training, equipment, and
                  fair pricing. We also actively plant bee-friendly flora and
                  partner with conservation organizations to protect natural
                  habitats.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-6">
                <div>
                  <p className="font-serif text-3xl font-bold text-amber-400">
                    50+
                  </p>
                  <p className="mt-1 text-sm text-stone-400">
                    Partner Beekeepers
                  </p>
                </div>
                <div>
                  <p className="font-serif text-3xl font-bold text-amber-400">
                    0
                  </p>
                  <p className="mt-1 text-sm text-stone-400">
                    Chemicals Used
                  </p>
                </div>
                <div>
                  <p className="font-serif text-3xl font-bold text-amber-400">
                    100%
                  </p>
                  <p className="mt-1 text-sm text-stone-400">
                    Fair Trade
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-amber-50/50 text-center">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="font-serif text-3xl font-bold text-stone-900">
            Taste the Difference
          </h2>
          <p className="mt-3 text-stone-500">
            Experience pure, ethically sourced honey that nourishes your body
            and supports a better world.
          </p>
          <Link
            href="/shop"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-amber-600 px-8 py-3.5 text-sm font-semibold text-white hover:bg-amber-500 transition-colors shadow-lg"
          >
            Shop Our Collection
          </Link>
        </div>
      </section>
    </div>
  );
}
