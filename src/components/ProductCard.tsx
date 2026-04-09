"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Heart, Info, History, Shovel as Sparkles, Leaf } from "lucide-react";

interface ProductCardProps {
  name: string;
  category: string;
  price: string | number;
  description?: string;
  image: string;
  badge?: "Veg" | "Egg" | "GF";
  className?: string;
}

export function ProductCard({
  name,
  category,
  price,
  description,
  image,
  badge,
  className,
}: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = React.useState(false);
  const [isFlipped, setIsFlipped] = React.useState(false);

  const badgeColors = {
    Veg: "bg-green-50 text-green-700 border-green-200",
    Egg: "bg-amber-50 text-amber-700 border-amber-200",
    GF: "bg-purple-50 text-purple-700 border-purple-200",
  };

  const features = [
    { icon: <Sparkles size={14} />, text: "Freshly Baked" },
    { icon: <Leaf size={14} />, text: "No Preservatives" },
    { icon: <History size={14} />, text: "Homemade Recipe" },
  ];

  return (
    <div 
      className={cn("group relative h-[420px] w-full [perspective:1000px]", className)}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d]"
      >
        {/* Front Side */}
        <div className="absolute inset-0 h-full w-full overflow-hidden rounded-2xl bg-warm-white shadow-card [backface-visibility:hidden]">
          {/* Image Section */}
          <div className="relative h-[60%] overflow-hidden bg-blush">
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            
            {/* Wishlist Heart */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsWishlisted(!isWishlisted);
              }}
              className={cn(
                "absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur-sm transition-all duration-300 md:opacity-0 md:group-hover:opacity-100",
                isWishlisted ? "opacity-100" : "opacity-0"
              )}
            >
              <Heart
                size={16}
                className={cn(
                  "transition-colors",
                  isWishlisted ? "fill-rose-500 text-rose-500" : "text-bark/40"
                )}
              />
            </button>

            {badge && (
              <div
                className={cn(
                  "absolute top-4 left-4 rounded-full border px-2.5 py-0.5 font-body text-[10px] font-medium uppercase tracking-wider",
                  badgeColors[badge]
                )}
              >
                {badge === "GF" ? "Gluten Free" : badge}
              </div>
            )}
            
            <div className="absolute bottom-4 right-4 rounded-full bg-white/20 p-2 backdrop-blur-md md:hidden">
              <Info size={16} className="text-white" />
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col p-5 md:p-6">
            <span className="mb-1 font-body text-[10px] font-medium uppercase tracking-widest text-caramel opacity-80">
              {category}
            </span>
            <h3 className="mb-2 font-display text-xl font-normal text-cocoa leading-tight md:text-2xl">
              {name}
            </h3>
            <div className="mt-2 flex items-center justify-between">
              <span className="font-display text-2xl font-medium text-cocoa">
                ₹{price}
              </span>
              <div className="flex items-center gap-1.5 rounded-full bg-butter/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-caramel">
                <span className="h-1 w-1 rounded-full bg-caramel animate-pulse" />
                Special Ready
              </div>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 h-full w-full overflow-hidden rounded-2xl bg-cocoa p-6 text-cream shadow-card [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="flex h-full flex-col">
            <div className="mb-4 flex items-center justify-between border-b border-cream/10 pb-4">
              <span className="font-body text-[10px] font-bold uppercase tracking-[0.2em] text-butter">
                Composition
              </span>
              <Heart size={16} className={cn(isWishlisted ? "fill-rose-400 text-rose-400" : "text-cream/20")} />
            </div>
            
            <h4 className="mb-3 font-display text-2xl text-cream">{name}</h4>
            
            {description && (
              <p className="mb-6 font-body text-sm font-light leading-relaxed text-cream/80">
                {description}
              </p>
            )}

            <div className="mt-auto space-y-4">
              <div className="grid grid-cols-1 gap-3">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-cream/90">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
                      {feature.icon}
                    </div>
                    <span className="font-body text-[11px] font-medium uppercase tracking-wider">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-cream/10">
                <div className="flex items-center justify-between">
                  <span className="font-body text-[10px] uppercase tracking-widest text-cream/40">Price approx</span>
                  <span className="font-display text-xl text-butter">₹{price}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

