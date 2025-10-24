import Privacy from "@/components/sections/Privacy";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Privacy Policy | Shining Wing",
  description:
    "Read Shining Wing’s Privacy Policy to understand how we collect, use, and protect your personal information with transparency and care.",
  keywords: [
    "Shining Wing privacy policy",
    "data protection",
    "user privacy",
    "data usage",
    "GDPR compliance",
  ],
  openGraph: {
    title: "Privacy Policy | Shining Wing",
    description:
      "We value your privacy. Learn how Shining Wing responsibly handles your personal data and ensures secure shopping experiences.",
    url: "https://shiningwing.com/privacy-policy",
    siteName: "Shining Wing",
    images: [
      {
        url: "/og-privacy.jpg",
        width: 1200,
        height: 630,
        alt: "Shining Wing Privacy Policy",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Shining Wing",
    description:
      "Learn how Shining Wing protects your data and respects your privacy rights.",
    images: ["/og-privacy.jpg"],
  },
};

function page() {
  return (
    <div className="container mx-auto px-2 md:px-0 mt-4 flex flex-col gap-4">
      <Privacy />
    </div>
  );
}

export default page;
