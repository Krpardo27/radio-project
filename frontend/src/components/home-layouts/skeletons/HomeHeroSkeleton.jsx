const HomeHeroSkeleton = () => {
  return (
    <section className="space-y-6 animate-pulse">
      <div className="max-w-5xl mx-auto">
        <div className="aspect-video w-full bg-zinc-800" />
      </div>

      <div className="max-w-3xl mx-auto space-y-3 px-2">
        <div className="h-3 w-24 bg-zinc-700 rounded" />

        <div className="h-6 w-full bg-zinc-700 rounded" />
        <div className="h-6 w-4/5 bg-zinc-700 rounded" />

        <div className="h-4 w-3/4 bg-zinc-700 rounded" />

        <div className="flex items-center gap-2 mt-3">
          <div className="w-5 h-5 rounded-full bg-zinc-700" />
          <div className="h-3 w-32 bg-zinc-700 rounded" />
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSkeleton;
