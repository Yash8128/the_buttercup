import { ProductCard } from "./ProductCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const FEATURED_PRODUCTS = [
  {
    name: "Double Dip",
    category: "Cupcake (Eggless)",
    price: "100",
    description: "Rich chocolate sponge topped with our signature chocolate frosting.",
    image: "https://static.wixstatic.com/media/0a15d0_f4f74405cad34186aa9d4c34ecbd4503~mv2.jpg",
    badge: "Veg" as const,
  },
  {
    name: "Lemon Blueberry",
    category: "Cupcake (Egg)",
    price: "110",
    description: "Zesty lemon cake with fresh blueberries and lemon cream cheese frosting.",
    image: "https://static.wixstatic.com/media/0a15d0_407467e41e724d2e82927ed0e3fd0d96~mv2.jpg",
    badge: "Egg" as const,
  },
  {
    name: "D.C. Brownie",
    category: "Brownie",
    price: "110",
    description: "Dark chocolate brownie with a gooey center and crisp top.",
    image: "https://static.wixstatic.com/media/0a15d0_0c207b827fed4facb90ac53dafca1536~mv2.jpg",
    badge: "Veg" as const,
  },
  {
    name: "Classic Cheesecake",
    category: "Cheesecake",
    price: "220/slice",
    description: "Creamy New York style cheesecake with a buttery graham cracker crust.",
    image: "https://static.wixstatic.com/media/0a15d0_e05a454fc68b4516aeb833fafcfbd95c~mv2.jpg",
    badge: "Veg" as const,
  },
  {
    name: "Bundt Cake",
    category: "Bundt Cake",
    price: "110/slice",
    description: "Daily selection of our heritage recipe bundt cakes.",
    image: "https://static.wixstatic.com/media/0a15d0_dddb495902b24e8fa2ff41c99d3b3d61~mv2.jpg",
    badge: "Veg" as const,
  },
  {
    name: "Red Velvet",
    category: "Cupcake (Egg)",
    price: "100",
    description: "Velvety cocoa cake with tangy cream cheese frosting.",
    image: "https://static.wixstatic.com/media/0a15d0_a132b853c3a9415996dfe4a87d879629~mv2.jpg",
    badge: "Egg" as const,
  },
];

export function FeaturedProducts() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="container mx-auto max-w-[1200px] px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row">
          <div className="flex flex-col gap-4">
            <span className="font-body text-[11px] font-medium uppercase tracking-[0.2em] text-caramel">
              Fresh Today
            </span>
            <h2 className="font-display text-4xl font-light text-cocoa md:text-5xl">
              Our Signatures
            </h2>
          </div>
          <Link
            href="/menu"
            className="group flex items-center gap-2 font-body text-sm font-medium tracking-wide text-caramel transition-colors hover:text-cocoa"
          >
            See Full Menu
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {FEATURED_PRODUCTS.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
