import { Skeleton, SkeletonProductCard } from "@/components/ui/Skeleton";

export default function ShopLoading() {
  return (
    <div className="min-h-screen bg-amber-50/30">
      {/* Header */}
      <div className="bg-stone-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <Skeleton className="h-12 w-64 mx-auto bg-stone-700" />
          <Skeleton className="h-5 w-96 mx-auto max-w-full bg-stone-700" />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="hidden lg:block w-64 shrink-0 space-y-8">
            {Array.from({ length: 3 }).map((_, section) => (
              <div key={section} className="space-y-3">
                <Skeleton className="h-4 w-20" />
                <div className="space-y-1">
                  {Array.from({ length: section === 0 ? 6 : section === 1 ? 5 : 5 }).map(
                    (_, i) => (
                      <Skeleton key={i} className="h-9 w-full" />
                    )
                  )}
                </div>
              </div>
            ))}
          </aside>

          {/* Grid */}
          <div className="flex-1">
            <Skeleton className="h-4 w-24 mb-6" />
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <SkeletonProductCard key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
