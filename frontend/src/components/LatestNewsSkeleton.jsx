import React from "react";

const SkeletonBlock = ({ className }) => (
  <div className={`bg-zinc-800 animate-pulse rounded-xl ${className}`} />
);

const LatestNewsSkeleton = () => {
  return (
    <section className="space-y-8">
      {/* Title */}
      <SkeletonBlock className="h-8 w-48 mx-auto" />

      {/* Grid */}
      <div className="grid gap-8 lg:grid-cols-3">
        {/* HERO */}
        <div className="lg:col-span-2 space-y-4">
          <SkeletonBlock className="aspect-video w-full" />
          <SkeletonBlock className="h-6 w-3/4" />
          <SkeletonBlock className="h-4 w-1/2" />
        </div>

        {/* MEDIUM */}
        <div className="flex flex-col gap-8">
          {[1, 2].map((i) => (
            <div key={i} className="space-y-3">
              <SkeletonBlock className="aspect-video w-full" />
              <SkeletonBlock className="h-5 w-4/5" />
              <SkeletonBlock className="h-4 w-2/3" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNewsSkeleton;
