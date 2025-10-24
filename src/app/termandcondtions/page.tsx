import TermAndConditions from "@/components/sections/TermAndConditions";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Terms & Conditions | Shining Wing",
  description:
    "Review Shining Wing’s Terms and Conditions to understand our service policies, purchase guidelines, and user responsibilities.",
  keywords: [
    "Shining Wing terms",
    "purchase policy",
    "service agreement",
    "return policy",
    "legal terms",
  ],
  openGraph: {
    title: "Terms & Conditions | Shining Wing",
    description:
      "By using Shining Wing, you agree to our transparent service terms designed to ensure a fair shopping experience.",
    url: "https://shiningwing.com/terms-and-conditions",
    siteName: "Shining Wing",
    images: [
      {
        url: "/og-terms.jpg",
        width: 1200,
        height: 630,
        alt: "Shining Wing Terms and Conditions",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | Shining Wing",
    description:
      "Learn about Shining Wing’s terms of service, returns, and customer rights.",
    images: ["/og-terms.jpg"],
  },
};

function page() {
  return (
    <div className="container mx-auto px-2 md:px-0 mt-4 flex flex-col gap-4">
      <TermAndConditions />
    </div>
  );
}

export default page;
