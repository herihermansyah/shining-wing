import React from "react";
import Shop from "@/components/sections/Shop";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop All Products | Shining Wing",
  description:
    "Browse all Shining Wing collections — premium, elegant, and handcrafted shoes for every style. Discover comfort and confidence in every step.",
  keywords: [
    "Shining Wing shop",
    "all products",
    "elegant footwear",
    "premium shoes",
    "sneakers",
    "leather shoes",
    "footwear store",
  ],
  openGraph: {
    title: "Shop | Shining Wing",
    description:
      "Explore Shining Wing’s complete collection of premium shoes — designed for comfort, crafted for confidence.",
    url: "https://shiningwing.com/shop",
    siteName: "Shining Wing",
    images: [
      {
        url: "/og-shop.jpg",
        width: 1200,
        height: 630,
        alt: "Shining Wing Shop All Products",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shop | Shining Wing",
    description:
      "Browse all elegant and premium handcrafted shoes from Shining Wing.",
    images: ["/og-shop.jpg"],
  },
};


function page() {
  return (
    <div>
      <Shop />
    </div>
  );
}

export default page;
