import CollectionCard from "@/components/sections/CollectionCard";
import HeroImage from "@/components/sections/HeroImage";
import React from "react";
import ProductPopular from "@/components/sections/ProductPopular";
import NewProduct from "@/components/sections/NewProduct";
import Category from "@/components/sections/Category";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shining Wing | Premium & Elegant Footwear for Modern Millennials",
  description:
    "Step into confidence with Shining Wing — a boutique footwear brand offering elegant, high-quality shoes that combine comfort and timeless design for modern millennials.",
  keywords: [
    "Shining Wing",
    "elegant shoes",
    "millennial fashion",
    "premium footwear",
    "luxury sneakers",
    "leather shoes",
    "modern shoes",
    "stylish footwear",
  ],
  openGraph: {
    title: "Shining Wing | Premium & Elegant Footwear",
    description:
      "Discover exclusive collections of handcrafted, premium-quality shoes. Experience the comfort and sophistication that defines Shining Wing.",
    url: "https://shiningwing.com",
    siteName: "Shining Wing",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Shining Wing Home Page Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shining Wing | Premium & Elegant Footwear",
    description:
      "Explore Shining Wing — premium handcrafted shoes designed for comfort, confidence, and modern style.",
    images: ["/og-home.jpg"],
  },
};

function page() {
  return (
    <div className="container mx-auto px-2 md:px-0 mt-2 flex flex-col gap-4">
      <HeroImage />
      <Category />
      <CollectionCard />
      <ProductPopular />
      <NewProduct />
    </div>
  );
}

export default page;
