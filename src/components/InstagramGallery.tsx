"use client";

import { Instagram } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./Button";

const GALLERY_IMAGES = [
  "https://static.wixstatic.com/media/0a15d0_eda33912dfc7456395fa94a21be4b164~mv2.jpg",
  "https://static.wixstatic.com/media/0a15d0_945e77bf2bd140d2a633de75da0ddfa1~mv2.jpg",
  "https://static.wixstatic.com/media/0a15d0_dddb495902b24e8fa2ff41c99d3b3d61~mv2.jpg",
  "https://static.wixstatic.com/media/0a15d0_e05a454fc68b4516aeb833fafcfbd95c~mv2.jpg",
  "https://static.wixstatic.com/media/0a15d0_9be10c87a3b04c40a0b9910273f6ebd6~mv2.jpg",
];

export function InstagramGallery() {
  return (
    <section className="bg-espresso py-24 md:py-32">
      <div className="container mx-auto max-w-[1200px] px-6 lg:px-12 text-center">
        <div className="mb-16 flex flex-col items-center gap-4">
          <span className="font-body text-[11px] font-medium uppercase tracking-[0.2em] text-butter opacity-70">
            Follow Along
          </span>
          <h2 className="font-display text-4xl font-light italic text-cream md:text-5xl">
            @buttercuppamd
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-1 overflow-hidden rounded-xl bg-white/5 md:grid-cols-5">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-square overflow-hidden"
            >
              <img
                src={img}
                alt="Instagram post"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 flex items-center justify-center bg-butter/35"
              >
                <Instagram size={32} className="text-white drop-shadow-md" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Button variant="outline" size="lg" className="border-butter text-butter hover:bg-butter hover:text-cocoa">
            View on Instagram
          </Button>
        </div>
      </div>
    </section>
  );
}
