"use client";

import * as React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MenuHero } from "@/components/MenuHero";
import { ProductCard } from "@/components/ProductCard";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  "All",
  "Cupcakes (Eggless)",
  "Cupcakes (With Egg)",
  "Biscuits",
  "Bundt Cake",
  "Cheesecake",
  "Brownie",
  "Chocolate Torte",
];

const MENU_ITEMS = [
  // EGGLESS CUPCAKES
  { name: "Double Dip", category: "Cupcakes (Eggless)", price: "100", description: "Chocolate sponge + chocolate frosting", image: "https://static.wixstatic.com/media/0a15d0_f4f74405cad34186aa9d4c34ecbd4503~mv2.jpg", badge: "Veg" as const },
  { name: "Chocolate Vanilla", category: "Cupcakes (Eggless)", price: "100", description: "Classic chocolate sponge with vanilla bean frosting", image: "https://static.wixstatic.com/media/0a15d0_eda33912dfc7456395fa94a21be4b164~mv2.jpg", badge: "Veg" as const },
  { name: "Oreo", category: "Cupcakes (Eggless)", price: "100", description: "Oreo chunks in sponge and frosting", image: "https://static.wixstatic.com/media/0a15d0_08f5b8c4d0544114b40e1f871770d002~mv2.jpg", badge: "Veg" as const },
  { name: "Classic Vanilla", category: "Cupcakes (Eggless)", price: "100", description: "Simple, elegant Madagascar vanilla", image: "https://static.wixstatic.com/media/0a15d0_94d98268292c43d9a152a1c9e9f0fd0d~mv2.png", badge: "Veg" as const },
  
  // EGG CUPCAKES
  { name: "Red Velvet", category: "Cupcakes (With Egg)", price: "100", description: "Classic crimson cocoa cake with cream cheese frosting", image: "https://static.wixstatic.com/media/0a15d0_a132b853c3a9415996dfe4a87d879629~mv2.jpg", badge: "Egg" as const },
  { name: "Lemon Blueberry", category: "Cupcakes (With Egg)", price: "110", description: "Fresh berries and zesty lemon cream", image: "https://static.wixstatic.com/media/0a15d0_407467e41e724d2e82927ed0e3fd0d96~mv2.jpg", badge: "Egg" as const },
  { name: "Dark Knight", category: "Cupcakes (With Egg)", price: "110", description: "Intense dark chocolate for true cocoa lovers", image: "https://static.wixstatic.com/media/0a15d0_9be10c87a3b04c40a0b9910273f6ebd6~mv2.jpg", badge: "Egg" as const },
  
  // OTHERS
  { name: "Butter Biscuit", category: "Biscuits", price: "160", description: "200g Box of pure buttery goodness", image: "https://static.wixstatic.com/media/0a15d0_945e77bf2bd140d2a633de75da0ddfa1~mv2.jpg", badge: "Veg" as const },
  { name: "Bundt Cake of the Day", category: "Bundt Cake", price: "110/slice", description: "Our heritage recipe, baked fresh", image: "https://static.wixstatic.com/media/0a15d0_dddb495902b24e8fa2ff41c99d3b3d61~mv2.jpg", badge: "Veg" as const },
  { name: "Classic Cheesecake", category: "Cheesecake", price: "220/slice", description: "Baked New York style perfection", image: "https://static.wixstatic.com/media/0a15d0_e05a454fc68b4516aeb833fafcfbd95c~mv2.jpg", badge: "Veg" as const },
  { name: "D.C. Brownie", category: "Brownie", price: "110", description: "Deep chocolate brownie, gooey center", image: "https://static.wixstatic.com/media/0a15d0_0c207b827fed4facb90ac53dafca1536~mv2.jpg", badge: "Veg" as const },
  { name: "Chocolate Torte", category: "Chocolate Torte", price: "240/slice", description: "Gluten Free, flourless rich chocolate", image: "https://static.wixstatic.com/media/0a15d0_9be10c87a3b04c40a0b9910273f6ebd6~mv2.jpg", badge: "GF" as const },
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredItems = activeCategory === "All" 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="flex flex-col min-h-screen bg-cream">
      <Navbar />
      <main className="flex-grow">
        <MenuHero />

        {/* Filter Tabs */}
        <div className="sticky top-[60px] z-30 w-full border-b border-border bg-cream/90 backdrop-blur-md md:top-[72px]">
          <div className="container mx-auto max-w-[1200px] overflow-x-auto no-scrollbar px-6 flex items-center gap-2 md:px-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "whitespace-nowrap px-4 py-4 text-xs font-body font-medium uppercase tracking-wider transition-all duration-300",
                  activeCategory === cat
                    ? "text-cocoa border-b-2 border-butter"
                    : "text-bark/50 hover:text-caramel"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto max-w-[1200px] px-6 md:px-12">
            <motion.div 
              layout
              className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
            >
              <AnimatePresence mode="popLayout">
                {filteredItems.map((product) => (
                  <motion.div
                    key={product.name}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <ProductCard {...product} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Allergen Legend */}
        <div className="border-t border-border py-8 opacity-60">
           <div className="container mx-auto max-w-[1200px] px-6 flex flex-wrap justify-center gap-8 text-[10px] uppercase font-medium tracking-widest text-bark md:px-12">
              <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-500" /> Vegetarian</div>
              <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-500" /> Contains Eggs</div>
              <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-purple-500" /> Gluten Free</div>
           </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
