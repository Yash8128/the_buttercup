"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/Button";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-cream">
      <Navbar />
      <main className="flex-grow">
        <section className="relative flex h-[280px] w-full flex-col items-center justify-center bg-espresso px-6 text-center pt-24">
          <div className="flex flex-col gap-4">
            <span className="font-body text-[11px] font-medium uppercase tracking-[0.2em] text-butter opacity-70">
              Visit our shoppe
            </span>
            <h1 className="font-display text-5xl font-light italic text-cream md:text-6xl">
              Come Say Hello
            </h1>
          </div>
        </section>

        {/* Info Grid */}
        <section className="py-24">
          <div className="container mx-auto max-w-[1200px] px-6 md:px-12">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
              {/* Left Column: Details */}
              <div className="flex flex-col gap-12">
                <div className="flex flex-col gap-6">
                  <div className="h-10 w-10 text-butter flex items-center justify-center">
                    <MapPin size={40} />
                  </div>
                  <h3 className="font-display text-3xl font-light text-cocoa leading-tight">
                    4, Advait Complex, <br />
                    Sandesh Press Road, <br />
                    Bodakdev, Ahmedabad 380054
                  </h3>
                </div>

                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
                  <div className="flex flex-col gap-3">
                    <span className="font-body text-xs font-medium uppercase tracking-[0.15em] text-caramel">Hours</span>
                    <p className="font-body text-base font-light text-bark">
                      Open 2:00 PM — Until Stocks Last <br />
                      Monday to Sunday
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <span className="font-body text-xs font-medium uppercase tracking-[0.15em] text-caramel">Contact</span>
                    <p className="font-body text-base font-light text-bark">
                      +91 79 4032 5838 <br />
                      cupcake@buttercupp.com
                    </p>
                  </div>
                </div>

                <div className="rounded-lg bg-blush/30 p-6 border border-blush/50">
                  <p className="font-body text-sm italic text-bark/60 font-light">
                    &quot;Street parking available on Sandesh Press Road. Find us near Vastrapur Lake.&quot;
                  </p>
                </div>
              </div>

              {/* Right Column: Map */}
              <div className="h-[480px] w-full overflow-hidden rounded-2xl border border-border shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.52417833998!2d72.5255413!3d23.041236700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84b3e93596cd%3A0x2fb2a78cfaf682f8!2sButtercupp%20-%20A%20Cupcake%20Shoppe!5e0!3m2!1sen!2sin!4v1775421941986!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="bg-warm-white py-24">
          <div className="container mx-auto max-w-[560px] px-6 text-center">
            <h2 className="font-display text-4xl font-light italic text-cocoa mb-4">Get in Touch</h2>
            <p className="font-body text-sm font-light text-bark/60 mb-12">
              Have a question or a large order? Send us a message and we&apos;ll get back to you soon.
            </p>

            <form className="flex flex-col gap-6 text-left">
              <div className="flex flex-col gap-2">
                <label className="font-body text-xs font-medium uppercase tracking-wider text-bark/50 ml-1">Name</label>
                <input type="text" className="w-full rounded-xl border-1.5 border-border bg-cream/50 p-4 font-body text-sm transition-all focus:border-butter focus:outline-none" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-body text-xs font-medium uppercase tracking-wider text-bark/50 ml-1">Email</label>
                <input type="email" className="w-full rounded-xl border-1.5 border-border bg-cream/50 p-4 font-body text-sm transition-all focus:border-butter focus:outline-none" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-body text-xs font-medium uppercase tracking-wider text-bark/50 ml-1">Message</label>
                <textarea rows={5} className="w-full rounded-xl border-1.5 border-border bg-cream/50 p-4 font-body text-sm transition-all focus:border-butter focus:outline-none resize-none" />
              </div>
              <Button variant="primary" size="lg" className="mt-4 w-full">Send Message</Button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
