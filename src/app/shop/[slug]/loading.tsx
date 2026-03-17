import { Skeleton, SkeletonText } from "@/components/ui/Skeleton";

export default function ProductDetailLoading() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <Skeleton className="h-4 w-28 mb-8" />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Gallery */}
          <div>
            <Skeleton className="aspect-square rounded-2xl" />
            <div className="mt-4 flex gap-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <Skeleton key={i} className="w-20 h-20 rounded-lg" />
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="space-y-4">
            <Skeleton className="h-6 w-24 rounded-full" />
            <Skeleton className="h-10 w-3/4" />

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Skeleton key={i} className="h-4 w-4 rounded-sm" />
                ))}
              </div>
              <Skeleton className="h-4 w-24" />
            </div>

            {/* Price */}
            <Skeleton className="h-9 w-32" />
            <Skeleton className="h-4 w-20" />

            {/* Description */}
            <SkeletonText lines={5} className="pt-2" />

            {/* Quantity + Add to cart */}
            <div className="flex items-center gap-4 pt-4">
              <Skeleton className="h-11 w-32 rounded-full" />
              <Skeleton className="h-11 w-44 rounded-full" />
            </div>

            {/* Benefits */}
            <div className="pt-6 space-y-3">
              <Skeleton className="h-6 w-56" />
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Skeleton className="h-4 w-4 rounded-sm shrink-0" />
                  <Skeleton className="h-4 w-48" />
                </div>
              ))}
            </div>

            {/* Nutritional info */}
            <div className="rounded-xl bg-amber-50/50 border border-amber-100 p-5 space-y-3 mt-4">
              <Skeleton className="h-4 w-44" />
              <Skeleton className="h-3 w-32" />
              <div className="grid grid-cols-2 gap-3">
                {Array.from({ length: 4 }).map((_, i) => (
                  <Skeleton key={i} className="h-4 w-28" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="mt-16 border-t border-stone-100 pt-12 space-y-8">
          <Skeleton className="h-8 w-52" />
          <div className="grid md:grid-cols-2 gap-6">
            {Array.from({ length: 2 }).map((_, i) => (
              <div
                key={i}
                className="rounded-xl border border-stone-100 p-5 space-y-3"
              >
                <div className="flex items-center gap-2">
                  <Skeleton className="h-9 w-9 rounded-full" />
                  <div className="space-y-1.5">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-3 w-20" />
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Skeleton key={j} className="h-3.5 w-3.5 rounded-sm" />
                  ))}
                </div>
                <SkeletonText lines={2} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
