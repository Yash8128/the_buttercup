"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as any,
      },
    },
  };

  return (
    <section className="relative flex min-h-screen w-full overflow-hidden bg-cream pt-32 pb-20 md:pt-40 lg:flex-row">
      {/* Left Column: Text Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container relative z-10 flex flex-col justify-center px-6 lg:w-[60%] lg:px-12"
      >
        <motion.span
          variants={itemVariants}
          className="mb-6 font-body text-xs font-medium uppercase tracking-[0.2em] text-caramel"
        >
          Ahmedabad&apos;s finest since 2011 — everyday fresh
        </motion.span>

        <motion.h1
          variants={itemVariants}
          className="mb-8 font-display leading-[0.95]"
        >
          <span className="block text-6xl italic font-light text-cocoa md:text-8xl">
            Fresh
          </span>
          <span className="block text-5xl font-semibold text-cocoa md:text-7xl">
            from the oven
          </span>
        </motion.h1>

        {/* Mobile Hero Image */}
        <motion.div
          variants={itemVariants}
          className="relative mb-10 h-[250px] w-[calc(100%+3rem)] -mx-6 overflow-hidden sm:w-full sm:mx-0 sm:rounded-2xl lg:hidden"
        >
          <img
            src="https://static.wixstatic.com/media/0a15d0_f4f74405cad34186aa9d4c34ecbd4503~mv2.jpg"
            alt="Artisan Cupcake"
            className="h-full w-full object-cover"
          />
          {/* Floating Card Overlay - Mobile version */}
          <div className="absolute bottom-4 left-4 flex flex-col items-center gap-1 rounded-xl bg-warm-white/90 px-3 py-2 shadow-lg backdrop-blur-sm">
            <span className="script-text text-xl text-cocoa leading-none">Made Fresh Daily</span>
            <div className="h-0.5 w-8 bg-butter" />
            <span className="font-body text-[8px] uppercase tracking-widest text-caramel">Pure Artisan</span>
          </div>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="mb-10 max-w-[440px] font-body text-base font-light leading-relaxed text-bark md:text-lg"
        >
          No preservatives. No shortcuts. Just the finest cupcakes, bundt cakes,
          brownies, and biscuits — made fresh daily.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <Link href="/menu">
            <Button variant="primary" size="lg" className="px-10">
              See Today&apos;s Menu
            </Button>
          </Link>
          <Link href="/contact-us">
            <Button variant="secondary" size="lg" className="px-10">
              Visit Us
            </Button>
          </Link>
        </motion.div>


        {/* Trust Strip */}
        <motion.div
          variants={itemVariants}
          className="mt-12 flex items-center gap-6 border-t border-bark/10 pt-8"
        >
          <div className="flex flex-col">
            <span className="font-display text-lg font-medium text-cocoa">4.5★</span>
            <span className="font-body text-[10px] uppercase tracking-wider text-bark/60">Google</span>
          </div>
          <div className="h-8 w-[1px] bg-bark/10" />
          <div className="flex flex-col">
            <span className="font-display text-lg font-medium text-cocoa">4.8★</span>
            <span className="font-body text-[10px] uppercase tracking-wider text-bark/60">MagicPin</span>
          </div>
          <div className="h-8 w-[1px] bg-bark/10" />
          <div className="flex flex-col">
            <span className="font-display text-lg font-medium text-cocoa">86%</span>
            <span className="font-body text-[10px] uppercase tracking-wider text-bark/60">Recommend</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Right Column: Hero Image (Desktop only) */}
      <div className="absolute right-0 top-0 bottom-0 hidden w-[45%] lg:block">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as any, delay: 0.2 }}
          className="relative h-full w-full"
        >
          <img
            src="https://static.wixstatic.com/media/0a15d0_f4f74405cad34186aa9d4c34ecbd4503~mv2.jpg"
            alt="Artisan Cupcake"
            className="h-full w-full object-cover"
          />
          {/* Floating Card Overlay */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] as any }}
            className="absolute bottom-20 -left-10 flex flex-col items-center gap-2 rounded-2xl bg-warm-white p-6 shadow-lg shadow-cocoa/10"
          >
            <span className="script-text text-3xl text-cocoa">Made Fresh Daily</span>
            <div className="h-0.5 w-12 bg-butter" />
            <span className="font-body text-[10px] uppercase tracking-widest text-caramel">Pure Artisan</span>
          </motion.div>
          {/* Decorative Arc */}
          <div className="absolute top-10 right-10 opacity-20 transform rotate-45">
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
              <path d="M10 190C10 190 40 10 190 10" stroke="#E8C97A" strokeWidth="1" strokeDasharray="4 4" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
