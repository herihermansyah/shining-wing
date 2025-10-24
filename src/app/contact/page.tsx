import Contact from "@/components/sections/Contact";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact Us | Shining Wing",
  description:
    "Get in touch with Shining Wing. We're here to help you with inquiries, product information, or partnership opportunities. Your satisfaction is our priority.",
  keywords: [
    "Shining Wing contact",
    "customer support",
    "premium footwear contact",
    "shoe brand contact",
    "fashion brand inquiry",
  ],
  openGraph: {
    title: "Contact Shining Wing | We're Here to Help",
    description:
      "Reach out to our team for product information, feedback, or support. Experience professional service from Shining Wing.",
    url: "https://shiningwing.com/contact",
    siteName: "Shining Wing",
    images: [
      {
        url: "/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Shining Wing - Customer Support",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Shining Wing | Customer Support",
    description:
      "Need help or want to connect with us? Contact Shining Wing for premium service and product inquiries.",
    images: ["/og-contact.jpg"],
  },
};

function page() {
  return (
    <div className="container mx-auto px-2 md:px-0 mt-4 flex flex-col gap-4">
      <Contact />
    </div>
  );
}

export default page;
