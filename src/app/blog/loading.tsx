import { Skeleton, SkeletonBlogCard } from "@/components/ui/Skeleton";

export default function BlogLoading() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-stone-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <Skeleton className="h-12 w-56 mx-auto bg-stone-700" />
          <Skeleton className="h-5 w-96 mx-auto max-w-full bg-stone-700" />
        </div>
      </div>

      {/* Posts */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <SkeletonBlogCard featured />
          {Array.from({ length: 3 }).map((_, i) => (
            <SkeletonBlogCard key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
