"use client";

import { motion } from "framer-motion";

const ITEMS = [
  "No Preservatives",
  "Made Fresh Daily",
  "Finest Ingredients",
  "Ahmedabad's Favourite",
  "No Artificial Flavours",
  "Artisan Handcrafted",
];

export function Marquee() {
  return (
    <div className="relative w-full overflow-hidden bg-cocoa py-4">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: [0, "-50%"] }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex items-center gap-12"
        >
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-12">
              {ITEMS.map((item) => (
                <div key={item} className="flex items-center gap-12">
                  <span className="font-body text-xs font-medium uppercase tracking-wider text-butter">
                    {item}
                  </span>
                  <span className="text-butter/40 text-lg">✦</span>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
