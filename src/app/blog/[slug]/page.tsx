import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPostBySlug } from "@/data/blog-posts";
import { Clock, ChevronLeft } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[400px]">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pb-12">
            <span className="inline-block rounded-full bg-amber-600 px-3 py-1 text-xs font-semibold text-white capitalize mb-4">
              {post.category}
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {post.title}
            </h1>
            <div className="mt-4 flex items-center gap-3 text-sm text-stone-300">
              <span>{post.author}</span>
              <span>&middot;</span>
              <span>{post.date}</span>
              <span>&middot;</span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm text-stone-500 hover:text-amber-700 transition-colors mb-8"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        <article className="prose prose-stone prose-lg max-w-none prose-headings:font-serif prose-a:text-amber-700 prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl">
          {post.content.split("\n\n").map((paragraph, i) => {
            if (paragraph.startsWith("## ")) {
              return (
                <h2 key={i} className="text-2xl font-bold mt-10 mb-4">
                  {paragraph.replace("## ", "")}
                </h2>
              );
            }
            if (paragraph.startsWith("### ")) {
              return (
                <h3 key={i} className="text-xl font-bold mt-8 mb-3">
                  {paragraph.replace("### ", "")}
                </h3>
              );
            }
            if (paragraph.startsWith("**")) {
              return (
                <p key={i} className="font-semibold text-stone-900">
                  {paragraph.replace(/\*\*/g, "")}
                </p>
              );
            }
            if (paragraph.startsWith("- ")) {
              const items = paragraph.split("\n").filter((l) => l.startsWith("- "));
              return (
                <ul key={i} className="list-disc pl-6 space-y-1">
                  {items.map((item, j) => (
                    <li key={j} className="text-stone-600">
                      {item.replace("- ", "").replace(/\*\*/g, "")}
                    </li>
                  ))}
                </ul>
              );
            }
            if (paragraph.startsWith("---")) {
              return <hr key={i} className="my-10 border-stone-200" />;
            }
            if (paragraph.startsWith("*") && paragraph.endsWith("*")) {
              return (
                <p key={i} className="italic text-stone-500">
                  {paragraph.replace(/^\*/, "").replace(/\*$/, "")}
                </p>
              );
            }
            return (
              <p key={i} className="text-stone-600 leading-relaxed">
                {paragraph}
              </p>
            );
          })}
        </article>

        {/* Tags */}
        <div className="mt-12 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-amber-50 border border-amber-100 px-3 py-1 text-xs font-medium text-amber-700"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
