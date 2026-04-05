"use client";

import * as React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MenuHero } from "@/components/MenuHero";
import { motion } from "framer-motion";
import { MapPin, Clock, Truck, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/Button";
import { cn } from "@/lib/utils";

const FAQ = [
  { q: "Do you deliver outside Ahmedabad?", a: "Currently, we only deliver within Ahmedabad city limits to ensure our cupcakes stay fresh and perfectly frosted." },
  { q: "What is the delivery time?", a: "Standard delivery takes 60–90 minutes once the order is placed. For pre-orders, we deliver within your chosen 1-hour slot." },
  { q: "Can I order in advance for a special occasion?", a: "Absolutely! We recommend ordering at least 24 hours in advance for large quantities or specific customized bundt cakes." },
  { q: "Do you deliver whole cakes / bundt cakes?", a: "Yes, we deliver whole uncut bundt cakes and cheesecakes. These require a 1-day notice." },
];

export default function DeliveryPage() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  return (
    <div className="flex flex-col min-h-screen bg-cream">
      <Navbar />
      <main className="flex-grow">
        <section className="relative flex h-[280px] w-full flex-col items-center justify-center bg-espresso px-6 text-center pt-24">
           <div className="flex flex-col gap-4">
            <span className="font-body text-[11px] font-medium uppercase tracking-[0.2em] text-butter opacity-70">
              Fresh to your doorstep
            </span>
            <h1 className="font-display text-5xl font-light italic text-cream md:text-6xl">
              Delivery in Ahmedabad
            </h1>
          </div>
        </section>

        {/* Info Cards */}
        <section className="py-20">
          <div className="container mx-auto max-w-[900px] px-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {[
                { icon: MapPin, title: "We deliver across Ahmedabad", text: "From Bodakdev to Bopal, we've got you covered." },
                { icon: Clock, title: "Order by 12pm for same-day", text: "Freshly baked items delivered the same afternoon." },
                { icon: Truck, title: "Minimum order may apply", text: "Contact us for large party orders or office caterings." },
                { icon: Phone, title: "+91 79 4032 5838", text: "Direct support for all delivery queries." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 rounded-xl bg-warm-white p-6 shadow-sm border border-border">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-butter/10 text-caramel">
                    <item.icon size={24} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-display text-xl text-cocoa">{item.title}</h3>
                    <p className="font-body text-sm font-light text-bark/60">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platforms */}
        <section className="bg-warm-white py-24">
          <div className="container mx-auto max-w-[1200px] px-6 text-center">
            <h2 className="font-display text-4xl font-light italic text-cocoa mb-16">Order Through</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
               {["Swiggy", "Zomato", "Direct"].map((platform) => (
                 <div key={platform} className="group relative flex flex-col items-center gap-6 rounded-2xl border-1.5 border-border p-10 transition-all hover:border-butter hover:bg-cream">
                    <div className="h-16 w-16 grayscale transition-all group-hover:grayscale-0">
                      {platform === "Direct" ? (
                        <Phone size={48} className="text-caramel" />
                      ) : (
                        <div className="h-full w-full bg-slate-200 rounded-lg animate-pulse" />
                      )}
                    </div>
                    <h4 className="font-display text-2xl text-cocoa">{platform}</h4>
                    <Button variant="ghost" className="text-caramel">Order Now →</Button>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24">
           <div className="container mx-auto max-w-[700px] px-6">
              <h2 className="font-display text-4xl text-center text-cocoa mb-16">Common Questions</h2>
              <div className="flex flex-col border-t border-border">
                {FAQ.map((item, i) => (
                  <div key={i} className="border-b border-border">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="flex w-full items-center justify-between py-6 px-4 text-left transition-colors hover:bg-warm-white"
                    >
                      <span className="font-body text-base font-medium text-cocoa">{item.q}</span>
                      <ChevronDown className={cn("text-caramel transition-transform", openFaq === i && "rotate-180")} />
                    </button>
                    <motion.div
                      initial={false}
                      animate={{ height: openFaq === i ? "auto" : 0, opacity: openFaq === i ? 1 : 0 }}
                      className="overflow-hidden"
                    >
                      <p className="px-4 pb-6 font-body text-sm font-light leading-relaxed text-bark/70">
                        {item.a}
                      </p>
                    </motion.div>
                  </div>
                ))}
              </div>
           </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
