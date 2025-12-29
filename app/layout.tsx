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
  metadataBase: new URL("https://kuchtheekhahojae.com"),
  title: {
    default: "Kuch Theek Ho Jae | Graphic Golgappa Delivery",
    template: "%s | Kuch Theek Ho Jae",
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
    url: "https://kuchtheekhahojae.com",
    siteName: "Kuch Theek Ho Jae",
    title: "Kuch Theek Ho Jae | Graphic Golgappa Delivery",
    description:
      "Order hygienic Golgappa Party Kits online. Crispy puris, chatpata pani, and masala fillings delivered to your doorstep in Karachi.",
    images: [
      {
        url: "/og-image.jpg", // Ensure this image exists in public folder or remove if not available yet
        width: 1200,
        height: 630,
        alt: "Kuch Theek Ho Jae Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kuch Theek Ho Jae | Graphic Golgappa Delivery",
    description:
      "Order hygienic Golgappa Party Kits online. Crispy puris, chatpata pani, and masala fillings delivered to your doorstep in Karachi.",
    // images: ['/twitter-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
