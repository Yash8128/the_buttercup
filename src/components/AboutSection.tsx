"use client";

import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section className="bg-warm-white py-24 md:py-32">
      <div className="container mx-auto max-w-[1200px] px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Image Column */}
          <div className="relative order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, rotate: 0 }}
              whileInView={{ opacity: 1, rotate: -1.5 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-xl shadow-cocoa/5"
            >
              <img
                src="https://static.wixstatic.com/media/0a15d0_08f5b8c4d0544114b40e1f871770d002~mv2.jpg"
                alt="Baking Process"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full border border-butter/30 p-2 lg:-bottom-10 lg:-right-10 lg:h-40 lg:w-40">
              <div className="h-full w-full rounded-full border border-dashed border-butter/60" />
            </div>
          </div>

          {/* Text Column */}
          <div className="order-1 flex flex-col gap-8 lg:order-2 lg:pl-12">
            <div className="flex flex-col gap-4">
              <span className="font-body text-[11px] font-medium uppercase tracking-[0.2em] text-caramel">
                Our Story
              </span>
              <h2 className="font-display text-5xl font-light italic leading-tight text-cocoa md:text-6xl">
                Made with love, <br />
                not shortcuts.
              </h2>
            </div>

            <p className="font-body text-base font-light leading-loose text-bark md:text-lg">
              Buttercupp brings modern luxury to your table — cupcakes, bundt
              cakes, brownies, and biscuits crafted without preservatives,
              hydrogenated oils, or artificial flavours. Just the finest
              ingredients, fresh every single day.
            </p>

            <div className="flex flex-col gap-6 pt-4">
              <p className="script-text text-4xl text-butter">baked fresh daily</p>
              <div className="flex items-center gap-3">
                <div className="h-[1px] w-6 bg-caramel/30" />
                <span className="font-body text-xs font-medium uppercase tracking-wider text-caramel">
                  Open 2pm daily — until stocks last
                </span>
                <div className="h-[1px] w-6 bg-caramel/30" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
