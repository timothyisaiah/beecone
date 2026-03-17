import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blog-posts";
import { Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Explore articles about honey benefits, delicious recipes, sustainability, and beekeeping news.",
};

const categoryColors: Record<string, string> = {
  benefits: "bg-green-100 text-green-700",
  recipes: "bg-orange-100 text-orange-700",
  sustainability: "bg-blue-100 text-blue-700",
  news: "bg-purple-100 text-purple-700",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-stone-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white">
            The Beecone Blog
          </h1>
          <p className="mt-3 text-stone-300 max-w-xl mx-auto">
            Stories, recipes, and insights from the world of honey and
            sustainable beekeeping.
          </p>
        </div>
      </div>

      {/* Posts */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className={`group rounded-2xl overflow-hidden bg-white border border-stone-100 shadow-sm hover:shadow-lg transition-all duration-300 ${
                index === 0 ? "md:col-span-2" : ""
              }`}
            >
              <Link href={`/blog/${post.slug}`}>
                <div
                  className={`relative overflow-hidden ${
                    index === 0 ? "aspect-[2.5/1]" : "aspect-[16/9]"
                  }`}
                >
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes={
                      index === 0
                        ? "100vw"
                        : "(max-width: 768px) 100vw, 50vw"
                    }
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span
                    className={`absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-semibold capitalize ${
                      categoryColors[post.category] || "bg-stone-100 text-stone-700"
                    }`}
                  >
                    {post.category}
                  </span>
                </div>
              </Link>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-stone-500">
                  <span>{post.author}</span>
                  <span>&middot;</span>
                  <span>{post.date}</span>
                  <span>&middot;</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="mt-3 font-serif text-xl font-bold text-stone-900 group-hover:text-amber-700 transition-colors">
                    {post.title}
                  </h2>
                </Link>
                <p className="mt-2 text-sm text-stone-500 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 inline-flex items-center text-sm font-semibold text-amber-700 hover:text-amber-600 transition-colors"
                >
                  Read More
                  <svg
                    className="ml-1 h-4 w-4"
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
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
