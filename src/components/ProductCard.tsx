"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";

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

  const badgeColors = {
    Veg: "bg-green-50 text-green-700 border-green-200",
    Egg: "bg-amber-50 text-amber-700 border-amber-200",
    GF: "bg-purple-50 text-purple-700 border-purple-200",
  };

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-lg bg-warm-white shadow-card transition-shadow hover:shadow-md",
        className
      )}
    >
      {/* Image Section */}
      <div className="relative aspect-[4/3] overflow-hidden bg-blush">
        <motion.img
          src={image}
          alt={name}
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="h-full w-full object-cover"
        />
        
        {/* Wishlist Heart */}
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsWishlisted(!isWishlisted);
          }}
          className={cn(
            "absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm transition-all duration-300 md:opacity-0 md:group-hover:opacity-100",
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
      </div>

      {/* Content Section */}
      <div className="flex flex-grow flex-col p-5 md:p-6">
        <span className="mb-1 size-base font-body text-[11px] font-medium uppercase tracking-wider text-caramel">
          {category}
        </span>
        <h3 className="mb-2 font-display text-xl font-normal text-cocoa leading-tight md:text-2xl">
          {name}
        </h3>
        {description && (
          <p className="mb-4 line-clamp-2 font-body text-sm font-light text-bark leading-relaxed">
            {description}
          </p>
        )}
        <div className="mt-auto flex items-center justify-between">
          <span className="font-display text-xl font-medium text-cocoa">
            ₹{price}
          </span>
          <Link href="/menu">
            <button className="text-xs font-medium uppercase tracking-wider text-caramel hover:underline">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

