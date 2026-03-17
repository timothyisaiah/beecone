import { Skeleton } from "@/components/ui/Skeleton";

export default function ContactLoading() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-stone-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <Skeleton className="h-12 w-52 mx-auto bg-stone-700" />
          <Skeleton className="h-5 w-96 mx-auto max-w-full bg-stone-700" />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-1 space-y-6">
            <Skeleton className="h-7 w-48" />
            <Skeleton className="h-4 w-full max-w-xs" />

            <div className="space-y-6 pt-2">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex items-start gap-4">
                  <Skeleton className="h-10 w-10 rounded-full shrink-0" />
                  <div className="space-y-1.5">
                    <Skeleton className="h-4 w-16" />
                    <Skeleton className="h-4 w-44" />
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 space-y-3">
              <Skeleton className="h-4 w-20" />
              <div className="flex gap-3">
                {Array.from({ length: 3 }).map((_, i) => (
                  <Skeleton key={i} className="h-8 w-20 rounded-full" />
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl bg-white border border-stone-100 p-8 space-y-5">
              <Skeleton className="h-7 w-48" />
              <Skeleton className="h-4 w-72" />

              <div className="grid sm:grid-cols-2 gap-5 pt-1">
                {Array.from({ length: 2 }).map((_, i) => (
                  <div key={i} className="space-y-1.5">
                    <Skeleton className="h-4 w-14" />
                    <Skeleton className="h-10 w-full rounded-lg" />
                  </div>
                ))}
              </div>
              <div className="space-y-1.5">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-10 w-full rounded-lg" />
              </div>
              <div className="space-y-1.5">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-32 w-full rounded-lg" />
              </div>
              <Skeleton className="h-11 w-40 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
