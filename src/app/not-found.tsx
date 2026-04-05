import Link from "next/link";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-cream px-6 text-center">
      {/* Toppled Cupcake SVG */}
      <div className="mb-12">
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-80"
        >
          {/* Wrapper/Liner */}
          <path
            d="M60 140L50 100H150L140 140C138 150 130 160 120 160H80C70 160 62 150 60 140Z"
            fill="#E8C97A"
            fillOpacity="0.4"
            stroke="#C4853A"
            strokeWidth="2"
          />
          {/* Frosting (Toppled) */}
          <path
            d="M40 100C40 80 60 60 100 60C140 60 160 80 160 100H40Z"
            fill="#F2D9D2"
            stroke="#E8B4A8"
            strokeWidth="2"
            transform="rotate(15 100 100) translate(-10, 10)"
          />
          {/* Crumbs */}
          <circle cx="165" cy="150" r="3" fill="#2C1A0E" opacity="0.3" />
          <circle cx="175" cy="140" r="2" fill="#2C1A0E" opacity="0.2" />
        </svg>
      </div>

      <h1 className="mb-4 font-display text-5xl font-light italic text-cocoa md:text-6xl">
        Oops, this page got eaten.
      </h1>
      <p className="mb-10 max-w-md font-body text-base font-light leading-relaxed text-bark/60">
        We couldn&apos;t find the cupcake you were looking for. It might have been sold
        out or moved to a different tray.
      </p>
      
      <Link href="/">
        <Button variant="primary" size="lg">
          Take Me Home
        </Button>
      </Link>
    </div>
  );
}
