import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MetaPixel from "../components/MetaPixel";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Impact School Of AI",
  description: "Empowering India Through Skills",
  // Yahan par humne Facebook domain verification add kiya hai
  verification: {
    other: {
      "facebook-domain-verification": ["mo2lbe9lnldwc2p1r5xjszp35hehpr"],
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {/* Meta Pixel ko Suspense ke andar rakha hai taaki build error na aaye */}
        <Suspense fallback={null}>
          <MetaPixel pixelId="727044806727599" />
        </Suspense>
        
        {children}
      </body>
    </html>
  );
}