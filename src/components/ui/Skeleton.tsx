import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-lg bg-stone-200/70",
        className
      )}
    />
  );
}

export function SkeletonText({
  lines = 3,
  className,
}: {
  lines?: number;
  className?: string;
}) {
  return (
    <div className={cn("space-y-2.5", className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={cn("h-4", i === lines - 1 ? "w-2/3" : "w-full")}
        />
      ))}
    </div>
  );
}

export function SkeletonProductCard() {
  return (
    <div className="rounded-2xl bg-white border border-stone-100 overflow-hidden">
      <Skeleton className="aspect-square rounded-none" />
      <div className="p-4 space-y-3">
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-1/2" />
        <div className="flex items-center justify-between pt-2">
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-10 w-10 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export function SkeletonBlogCard({ featured = false }: { featured?: boolean }) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-white border border-stone-100 overflow-hidden",
        featured && "md:col-span-2"
      )}
    >
      <Skeleton
        className={cn(
          "rounded-none",
          featured ? "aspect-[2.5/1]" : "aspect-[16/9]"
        )}
      />
      <div className="p-6 space-y-3">
        <div className="flex gap-3">
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-3 w-24" />
          <Skeleton className="h-3 w-16" />
        </div>
        <Skeleton className="h-6 w-3/4" />
        <SkeletonText lines={2} />
        <Skeleton className="h-4 w-24" />
      </div>
    </div>
  );
}
