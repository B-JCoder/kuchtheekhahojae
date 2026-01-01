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
    default: "Kuch Teekha Hojaye | Graphic Golgappa Delivery",
    template: "%s | Kuch Teekha Hojaye",
  },
  description:
    "Order hygienic Golgappa Party Kits online. Crispy puris, chatpata pani, and masala fillings delivered to your doorstep in Karachi.",
  keywords: [
    "Golgappa",
    "Pani Puri",
    "Karachi",
    "Food Delivery",
    "Party Kits",
    "Snacks",
    "Street Food",
    "Hygenic",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kuchteekhahojaye.com",
    siteName: "Kuch Teekha Hojaye",
    title: "Kuch Teekha Hojaye | Graphic Golgappa Delivery",
    description:
      "Order hygienic Golgappa Party Kits online. Crispy puris, chatpata pani, and masala fillings delivered to your doorstep in Karachi.",
    images: [
      {
        url: "/og-image.jpg", // Ensure this image exists in public folder or remove if not available yet
        width: 1200,
        height: 630,
        alt: "Kuch Teekha Hojaye Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kuch Teekha Hojaye | Graphic Golgappa Delivery",
    description:
      "Order hygienic Golgappa Party Kits online. Crispy puris, chatpata pani, and masala fillings delivered to your doorstep in Karachi.",
    // images: ['/twitter-image.jpg'],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  manifest: "/site.webmanifest",
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
