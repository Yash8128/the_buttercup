"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { QrCode, CreditCard, Smartphone, Banknote } from "lucide-react";

export default function PaymentPage() {
  return (
    <div className="flex flex-col min-h-screen bg-cream">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center py-32">
        <div className="container mx-auto max-w-[600px] px-6 text-center">
          <div className="flex flex-col gap-4 mb-12">
            <h1 className="font-display text-5xl font-light italic text-cocoa md:text-6xl text-center">
              Pay with Ease
            </h1>
            <p className="font-body text-sm font-light text-bark/60 text-center">
              Scan to pay directly at the counter
            </p>
          </div>

          <div className="mx-auto max-w-[320px] rounded-3xl bg-warm-white p-8 shadow-md border-1.5 border-border flex flex-col items-center gap-8">
             <div className="aspect-square w-full rounded-2xl bg-cream p-6 border border-border shadow-inner flex items-center justify-center">
                <QrCode size={180} strokeWidth={1} className="text-cocoa" />
             </div>
             <div className="flex flex-col gap-2">
                <h3 className="font-body text-base font-medium text-cocoa">Buttercupp</h3>
                <p className="font-body text-xs font-light text-bark/60">A Cupcake Shoppe</p>
             </div>
          </div>

          <div className="mt-16 flex flex-col items-center gap-6">
             <span className="font-body text-[10px] uppercase tracking-widest text-caramel">Accepted Payments</span>
             <div className="flex gap-8 text-bark/40">
                <div className="flex flex-col items-center gap-2">
                   <Smartphone size={24} />
                   <span className="text-[10px] uppercase font-medium">UPI</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                   <CreditCard size={24} />
                   <span className="text-[10px] uppercase font-medium">Cards</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                   <Banknote size={24} />
                   <span className="text-[10px] uppercase font-medium">Cash</span>
                </div>
             </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
