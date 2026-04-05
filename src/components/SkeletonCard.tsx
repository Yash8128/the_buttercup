export function SkeletonCard() {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg bg-warm-white shadow-card">
      {/* Shimmer Image */}
      <div className="relative aspect-[4/3] bg-blush overflow-hidden">
        <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-cream/50 to-transparent bg-[length:200%_100%]" />
      </div>

      {/* Shimmer Content */}
      <div className="flex flex-grow flex-col p-6 gap-3">
        <div className="h-3 w-20 rounded bg-blush animate-pulse" />
        <div className="h-6 w-3/4 rounded bg-blush animate-pulse" />
        <div className="h-4 w-full rounded bg-blush animate-pulse" />
        <div className="mt-auto flex justify-between">
          <div className="h-5 w-16 rounded bg-blush animate-pulse" />
          <div className="h-4 w-24 rounded bg-blush animate-pulse" />
        </div>
      </div>
    </div>
  );
}
