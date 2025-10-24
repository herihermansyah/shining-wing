import About from "@/components/sections/About";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Shining Wing",
  description:
    "Learn more about Shining Wing — a premium footwear brand built on quality, elegance, and authenticity. Discover our story, our values, and our commitment to crafting shoes that empower confidence and style.",
  keywords: [
    "Shining Wing",
    "about Shining Wing",
    "footwear brand story",
    "premium shoes",
    "luxury shoes for millennials",
    "elegant footwear",
    "brand values",
    "handcrafted shoes",
  ],
  openGraph: {
    title: "About Shining Wing | Crafting Confidence Through Footwear",
    description:
      "Shining Wing is a modern footwear brand dedicated to timeless design, premium craftsmanship, and comfort. Explore the story behind our pursuit of perfection.",
    url: "https://shiningwing.com/about",
    siteName: "Shining Wing",
    images: [
      {
        url: "/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "About Shining Wing - Our Story",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Shining Wing | Crafting Confidence Through Footwear",
    description:
      "Discover the story behind Shining Wing — premium handcrafted shoes that combine comfort, elegance, and modern design.",
    images: ["/og-about.jpg"],
  },
};

function page() {
  return (
    <div className="container mx-auto px-2 md:px-0 mt-4 flex flex-col gap-10">
      <About />
    </div>
  );
}

export default page;
