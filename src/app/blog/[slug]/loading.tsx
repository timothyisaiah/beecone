import { Skeleton, SkeletonText } from "@/components/ui/Skeleton";

export default function BlogPostLoading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[400px] bg-stone-200 animate-pulse">
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-stone-900/80 via-stone-900/40 to-transparent">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pb-12 space-y-4">
            <Skeleton className="h-6 w-24 rounded-full bg-stone-600" />
            <Skeleton className="h-12 w-full bg-stone-600" />
            <Skeleton className="h-12 w-2/3 bg-stone-600" />
            <div className="flex gap-3">
              <Skeleton className="h-4 w-28 bg-stone-600" />
              <Skeleton className="h-4 w-24 bg-stone-600" />
              <Skeleton className="h-4 w-20 bg-stone-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
        <Skeleton className="h-4 w-28 mb-8" />

        <div className="space-y-6">
          <SkeletonText lines={4} />
          <Skeleton className="h-8 w-2/3" />
          <SkeletonText lines={5} />
          <Skeleton className="h-8 w-1/2" />
          <SkeletonText lines={4} />
          <SkeletonText lines={3} />
          <Skeleton className="h-8 w-2/3" />
          <SkeletonText lines={5} />
        </div>

        {/* Tags */}
        <div className="mt-12 flex gap-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} className="h-7 w-20 rounded-full" />
          ))}
        </div>
      </div>
    </div>
  );
}
