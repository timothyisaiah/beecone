import { Skeleton, SkeletonText } from "@/components/ui/Skeleton";

export default function AboutLoading() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-24 bg-stone-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <Skeleton className="h-4 w-24 mx-auto bg-stone-700" />
          <Skeleton className="h-14 w-full max-w-lg mx-auto bg-stone-700" />
          <Skeleton className="h-14 w-2/3 mx-auto bg-stone-700" />
          <div className="space-y-2 pt-2 max-w-2xl mx-auto">
            <Skeleton className="h-5 w-full bg-stone-700" />
            <Skeleton className="h-5 w-3/4 mx-auto bg-stone-700" />
          </div>
        </div>
      </section>

      {/* Brand story */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-4">
              <Skeleton className="h-4 w-28" />
              <Skeleton className="h-10 w-3/4" />
              <Skeleton className="h-10 w-1/2" />
              <SkeletonText lines={4} className="pt-2" />
              <SkeletonText lines={3} />
              <SkeletonText lines={3} />
            </div>
            <Skeleton className="aspect-[4/3] rounded-2xl" />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-amber-50/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <Skeleton className="h-4 w-36 mx-auto" />
          <Skeleton className="h-9 w-52 mx-auto" />
          <div className="mt-12 grid sm:grid-cols-2 gap-8">
            {Array.from({ length: 2 }).map((_, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white border border-amber-100 p-8 space-y-3"
              >
                <Skeleton className="h-6 w-32" />
                <SkeletonText lines={4} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3">
            <Skeleton className="h-4 w-24 mx-auto" />
            <Skeleton className="h-9 w-56 mx-auto" />
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="rounded-2xl bg-amber-50/50 border border-amber-100 p-6 space-y-3 text-center"
              >
                <Skeleton className="h-12 w-12 rounded-full mx-auto" />
                <Skeleton className="h-5 w-28 mx-auto" />
                <SkeletonText lines={3} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
