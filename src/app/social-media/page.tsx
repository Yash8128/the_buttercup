"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { InstagramGallery } from "@/components/InstagramGallery";
import { Facebook, Instagram, Share2 } from "lucide-react";
import { Button } from "@/components/Button";

export default function SocialPage() {
  return (
    <div className="flex flex-col min-h-screen bg-cream">
      <Navbar />
      <main className="flex-grow">
        <section className="relative flex h-[280px] w-full flex-col items-center justify-center bg-espresso px-6 text-center pt-24">
           <div className="flex flex-col gap-4">
            <span className="font-body text-[11px] font-medium uppercase tracking-[0.2em] text-butter opacity-70">
                Join our community
            </span>
            <h1 className="font-display text-5xl font-light italic text-cream md:text-6xl">
              Follow Our Sweet Life
            </h1>
          </div>
        </section>

        {/* Platform Grid */}
        <section className="py-24">
          <div className="container mx-auto max-w-[1000px] px-6">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
               {/* Instagram Card */}
               <div className="flex flex-col items-center rounded-3xl bg-gradient-to-br from-cream to-blush p-12 text-center shadow-sm border border-border">
                  <div className="mb-6 h-16 w-16 text-rose-500">
                    <Instagram size={64} />
                  </div>
                  <h3 className="font-display text-3xl font-light text-cocoa">Instagram</h3>
                  <p className="font-body text-sm font-light text-bark/60 mt-2 mb-8">@buttercuppamd</p>
                  <Button variant="primary">Follow on Instagram →</Button>
               </div>

               {/* Facebook Card */}
               <div className="flex flex-col items-center rounded-3xl bg-gradient-to-br from-cream to-blue-50 p-12 text-center shadow-sm border border-border">
                  <div className="mb-6 h-16 w-16 text-blue-600">
                    <Facebook size={64} />
                  </div>
                  <h3 className="font-display text-3xl font-light text-cocoa">Facebook</h3>
                  <p className="font-body text-sm font-light text-bark/60 mt-2 mb-8">86% recommend · 2,695 reviews</p>
                  <Button variant="primary">Follow on Facebook →</Button>
               </div>
            </div>
          </div>
        </section>

        <section className="py-12 text-center">
            <h2 className="script-text text-5xl text-butter">Taste it first on Instagram</h2>
        </section>

        <InstagramGallery />
      </main>
      <Footer />
    </div>
  );
}
