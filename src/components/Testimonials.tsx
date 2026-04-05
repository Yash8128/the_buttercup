import { Star } from "lucide-react";

const REVIEWS = [
  {
    name: "Visitor via TripAdvisor",
    quote: "Freshly made cupcakes straight outta the oven. Soft, moist, rich with sumptuous frosting. At a price hard to believe.",
    source: "TripAdvisor",
  },
  {
    name: "Customer via Google",
    quote: "Double Choco Dip is a must-try. Perfectly baked, moist, with chocolate frosting bang on.",
    source: "Google",
  },
  {
    name: "Customer via TripAdvisor",
    quote: "Cupcakes better than this in Ahmedabad? Complete no. Melt in mouth. Reasonable rates.",
    source: "TripAdvisor",
  },
];

export function Testimonials() {
  return (
    <section className="bg-blush py-24 md:py-32">
      <div className="container mx-auto max-w-[1200px] px-6 lg:px-12 text-center">
        <div className="mb-16 flex flex-col items-center gap-4">
          <span className="font-body text-[11px] font-medium uppercase tracking-[0.2em] text-caramel">
            Kind Words
          </span>
          <h2 className="font-display text-4xl font-light text-cocoa md:text-5xl">
            From our regular guests
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <div
              key={i}
              className="group flex flex-col items-center rounded-2xl bg-warm-white p-8 text-center shadow-sm transition-all hover:shadow-md md:p-10"
            >
              <div className="mb-6 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-butter text-butter"
                  />
                ))}
              </div>

              <blockquote className="mb-8 font-display text-xl font-normal italic leading-relaxed text-cocoa">
                &ldquo;{review.quote}&rdquo;
              </blockquote>

              <div className="mt-auto flex flex-col items-center gap-2">
                <p className="font-body text-sm font-medium text-bark">
                  — {review.name}
                </p>
                <span className="rounded-full bg-white px-3 py-1 font-body text-[10px] font-medium uppercase tracking-wider text-bark/40 shadow-sm">
                  {review.source}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
