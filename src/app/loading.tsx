import { Skeleton, SkeletonText, SkeletonProductCard } from "@/components/ui/Skeleton";

export default function HomeLoading() {
  return (
    <>
      {/* Hero skeleton */}
      <section className="relative min-h-[90vh] flex items-center bg-stone-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl space-y-6">
            <Skeleton className="h-4 w-40 bg-stone-700" />
            <Skeleton className="h-16 w-full bg-stone-700" />
            <Skeleton className="h-16 w-2/3 bg-stone-700" />
            <div className="space-y-2 pt-2">
              <Skeleton className="h-5 w-full max-w-lg bg-stone-700" />
              <Skeleton className="h-5 w-3/4 max-w-lg bg-stone-700" />
            </div>
            <div className="flex gap-4 pt-2">
              <Skeleton className="h-12 w-36 rounded-full bg-stone-700" />
              <Skeleton className="h-12 w-32 rounded-full bg-stone-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured products skeleton */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3">
            <Skeleton className="h-4 w-28 mx-auto" />
            <Skeleton className="h-9 w-64 mx-auto" />
            <Skeleton className="h-5 w-96 mx-auto max-w-full" />
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <SkeletonProductCard key={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Brand story skeleton */}
      <section className="py-20 bg-amber-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Skeleton className="aspect-[4/3] rounded-2xl" />
            <div className="space-y-4">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-10 w-3/4" />
              <Skeleton className="h-10 w-1/2" />
              <SkeletonText lines={4} className="pt-2" />
              <SkeletonText lines={3} />
              <div className="grid grid-cols-3 gap-6 pt-4">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="space-y-2">
                    <Skeleton className="h-9 w-16" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials skeleton */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3">
            <Skeleton className="h-4 w-28 mx-auto" />
            <Skeleton className="h-9 w-72 mx-auto" />
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="rounded-2xl bg-amber-50/50 border border-amber-100 p-6 space-y-4"
              >
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Skeleton key={j} className="h-4 w-4 rounded-sm" />
                  ))}
                </div>
                <SkeletonText lines={3} />
                <div className="flex items-center gap-3 pt-2">
                  <Skeleton className="h-10 w-10 rounded-full" />
                  <div className="space-y-1.5">
                    <Skeleton className="h-4 w-28" />
                    <Skeleton className="h-3 w-20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
