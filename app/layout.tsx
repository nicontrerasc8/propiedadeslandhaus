import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import FloatingCartMenu from "@/components/floating-cart-menu";
import { InterestProvider } from "@/context/interest-context";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GOXA Propiedades",
  description: "Compra, venta y alquiler de propiedades premium en Peru.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${manrope.variable} ${playfair.variable} antialiased`}>
        <InterestProvider>
          <FloatingCartMenu />
          {children}
        </InterestProvider>
      </body>
    </html>
  );
}
