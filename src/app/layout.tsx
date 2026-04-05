import type { Metadata } from "next";
import { Cormorant_Garamond, Jost, Sacramento } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const sacramento = Sacramento({
  variable: "--font-sacramento",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Buttercupp — Ahmedabad's Finest Cupcake Shoppe",
  description: "Freshly baked cupcakes, bundt cakes, brownies & biscuits in Bodakdev, Ahmedabad. No preservatives. Made fresh daily. Open 2pm.",
};

import { CustomCursor } from "@/components/CustomCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${jost.variable} ${sacramento.variable} antialiased`}
    >
      <body className="min-h-screen bg-cream text-cocoa selection:bg-butter selection:text-cocoa">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}


