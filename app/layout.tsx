import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartSidebar } from "@/components/cart/CartSidebar";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kuchteekhahojaye.com"),

  title: {
    default: "Hygienic Golgappe & Pani Puri in Karachi | kuchteekhahojaye",
    template: "%s | kuchteekhahojaye",
  },

  description:
    "Order hygienic golgappe & mineral water pani puri in Karachi. Authentic Karachi pani puri delivered safely near you by kuchteekhahojaye.",

  keywords: [
    "hygienic golgappe",
    "pani puri karachi",
    "karachi golgappe",
    "mineral water pani puri",
    "pani puri near me",
    "kuchteekhahojaye",
    "street food karachi",
    "hygienic pani puri",
  ],

  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "https://kuchteekhahojaye.com",
    siteName: "kuchteekhahojaye",
    title: "Hygienic Golgappe & Pani Puri in Karachi | kuchteekhahojaye",
    description:
      "kuchteekhahojaye offers hygienic golgappe & mineral water pani puri in Karachi with authentic street taste and safe delivery.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hygienic Golgappe & Pani Puri in Karachi - kuchteekhahojaye",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Hygienic Golgappe & Pani Puri in Karachi | kuchteekhahojaye",
    description:
      "Order hygienic golgappe & mineral water pani puri in Karachi. Safe, fresh & authentic taste.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* ✅ Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-K2CQ09KZXG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-K2CQ09KZXG');
          `}
        </Script>

        <CartProvider>
          <Header />
          <CartSidebar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
