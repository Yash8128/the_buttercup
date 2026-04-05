"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Facebook, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "./Button";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "Delivery", href: "/delivery-in-ahmedabad" },
  { name: "Visit Us", href: "/contact-us" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const pathname = usePathname();
  const isDarkHeader = ["/menu", "/delivery-in-ahmedabad", "/contact-us", "/social-media"].includes(pathname);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const transparentNavbarTextClass = isDarkHeader ? "text-cream" : "text-bark";

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 transition-all duration-300 md:px-12",
          scrolled || isOpen
            ? "h-[60px] bg-cream/92 shadow-sm backdrop-blur-lg md:h-[72px]"
            : "h-[80px] bg-transparent md:h-[96px]"
        )}
      >
        {/* Logo */}
        <Link href="/" className="relative z-50 flex items-center group">
          <img
            src="https://static.wixstatic.com/media/0a15d0_94d98268292c43d9a152a1c9e9f0fd0d~mv2.png"
            alt="Buttercupp Logo"
            className={cn(
              "h-10 transition-transform duration-300 group-hover:scale-105 md:h-12",
              !scrolled && isDarkHeader && "brightness-0 invert opacity-90"
            )}
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-10 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative py-2 text-xs font-body font-normal tracking-wide uppercase transition-colors duration-200 hover:text-caramel",
                  scrolled 
                    ? (isActive ? "text-cocoa font-medium" : "text-bark")
                    : (isDarkHeader ? (isActive ? "text-butter font-medium" : "text-cream") : (isActive ? "text-cocoa font-medium" : "text-bark"))
                )}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-butter"
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-4 lg:flex">
          <Link href="/delivery-in-ahmedabad">
            <Button variant="primary" size="sm">
              Order Now
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "relative z-50 p-2 transition-colors lg:hidden",
            isOpen || (!scrolled && isDarkHeader) ? "text-cream" : "text-cocoa"
          )}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>


      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 flex flex-col bg-espresso px-8 pt-32 lg:hidden"
          >
            <div className="flex flex-col gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="font-display text-4xl italic text-cream transition-colors hover:text-butter"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-auto mb-12 flex flex-col gap-8"
            >
              <Button variant="primary" className="w-full">
                Order Now
              </Button>
              
              <div className="flex gap-6">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-cream/20 text-cream transition-colors hover:bg-butter hover:text-cocoa hover:border-butter"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-cream/20 text-cream transition-colors hover:bg-butter hover:text-cocoa hover:border-butter"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
