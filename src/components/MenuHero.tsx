export function MenuHero() {
  return (
    <section className="relative flex h-[280px] w-full flex-col items-center justify-center bg-espresso px-6 text-center pt-24">
      <div className="flex flex-col gap-4">
        <span className="font-body text-[11px] font-medium uppercase tracking-[0.2em] text-butter opacity-70">
          What&apos;s Fresh Today
        </span>
        <h1 className="font-display text-6xl font-light italic text-cream md:text-7xl">
          Our Menu
        </h1>
        <p className="mx-auto max-w-md font-body text-sm font-light leading-relaxed text-cream/60">
          Made fresh daily using the finest ingredients. No preservatives, no shortcuts.
        </p>
      </div>
      
      {/* Decorative SVG pattern */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none overflow-hidden">
        <svg width="100%" height="100%" className="w-full h-full">
          <pattern id="menu-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
             <circle cx="50" cy="50" r="2" fill="white" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#menu-pattern)" />
        </svg>
      </div>
    </section>
  );
}
