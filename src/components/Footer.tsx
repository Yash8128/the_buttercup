import Link from "next/link";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "./Button";

export function Footer() {
  return (
    <footer className="w-full bg-espresso text-cream pt-20 pb-8">
      <div className="container mx-auto max-w-[1200px] px-6 md:px-12">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="inline-block">
              <img
                src="https://static.wixstatic.com/media/0a15d0_94d98268292c43d9a152a1c9e9f0fd0d~mv2.png"
                alt="Buttercupp Logo"
                className="h-14 brightness-0 invert"
              />
            </Link>
            <p className="font-body text-sm font-light opacity-60 leading-relaxed max-w-[200px]">
              A Cupcake Shoppe. Ahmedabads most beloved artisan bakery since 2011.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 transition-all hover:bg-butter hover:text-cocoa hover:border-butter"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 transition-all hover:bg-butter hover:text-cocoa hover:border-butter"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Explore */}
          <div className="flex flex-col gap-6">
            <h4 className="font-body text-xs font-medium uppercase tracking-wider opacity-50">
              Explore
            </h4>
            <div className="flex flex-col gap-4">
              {["Home", "Menu", "Delivery", "Visit Us", "Social Media"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="font-body text-sm font-light opacity-70 transition-all hover:opacity-100 hover:text-butter"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Find Us */}
          <div className="flex flex-col gap-6">
            <h4 className="font-body text-xs font-medium uppercase tracking-wider opacity-50">
              Find Us
            </h4>
            <div className="flex flex-col gap-5">
              <div className="flex gap-3 text-sm font-light opacity-70 leading-snug">
                <MapPin size={18} className="shrink-0 text-butter" />
                <p>
                  4, Advait Complex, Sandesh Press Road, Bodakdev, Ahmedabad 380054
                </p>
              </div>
              <div className="flex gap-3 text-sm font-light opacity-70">
                <Phone size={18} className="shrink-0 text-butter" />
                <p>+91 79 4032 5838</p>
              </div>
              <div className="flex gap-3 text-sm font-light opacity-70 italic text-caramel">
                Open 2pm daily until stocks last
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div className="flex flex-col gap-6">
            <h4 className="font-body text-xs font-medium uppercase tracking-wider opacity-50">
              Stay Sweet
            </h4>
            <p className="font-body text-sm font-light opacity-70">
              Get updates on seasonal flavors and special offers.
            </p>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full rounded-md border border-white/15 bg-white/5 py-2.5 px-4 text-sm font-light placeholder:text-cream/40 focus:border-butter focus:ring-1 focus:ring-butter focus:outline-none"
              />
              <Button variant="primary" size="sm" className="w-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 border-t border-white/10 pt-8 text-center">
          <p className="font-body text-xs font-light opacity-40">
            © {new Date().getFullYear()} Buttercupp — A Cupcake Shoppe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
