import type {Metadata} from "next";
import {Poppins} from "next/font/google";
import "../style/globals.css";
import SiteLayout from "./layouts/SiteLayout";

const poppinsFonts = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Shining Wing | Premium & Elegant Footwear for Modern Millennials",
    template: "%s | Shining Wing",
  },
  description:
    "Shining Wing is a trusted footwear boutique offering premium-quality shoes that combine elegance, comfort, and contemporary design. Perfectly crafted for millennials who appreciate style, sophistication, and authenticity.",
  keywords: [
    "Shining Wing",
    "premium shoes",
    "elegant footwear",
    "millennial fashion",
    "handcrafted shoes",
    "modern sneakers",
    "leather shoes",
    "stylish footwear",
    "comfortable shoes",
    "luxury footwear brand",
  ],
  openGraph: {
    title: "Shining Wing | Premium & Elegant Footwear",
    description:
      "Discover Shining Wing — a boutique brand known for quality, polished design, and ultimate comfort. Explore our exclusive collections and order your free sample today.",
    url: "https://shining-wing.vercel.app/",
    siteName: "Shining Wing",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shining Wing Product Showcase",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shining Wing | Premium & Elegant Footwear",
    description:
      "Shop premium-quality shoes crafted with elegance and comfort for the modern millennial generation.",
    images: ["/og-image.jpg"],
  },
  metadataBase: new URL("https://shining-wing.vercel.app/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppinsFonts.className} antialiased`}>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
