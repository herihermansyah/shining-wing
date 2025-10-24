import PreviewProduct from "@/components/sections/PreviewProduct";
import { productData } from "@/data/productData";
import type { Metadata } from "next";

// 🧠 Sekarang params itu Promise<{id: string}>
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params; // ✅ tunggu params di-resolve
  const product = productData.find((item) => item.id === id);

  if (!product) {
    return {
      title: "Product Not Found | Shining Wing",
      description: "The requested product could not be found on Shining Wing.",
    };
  }

  return {
    title: `${product.title} | Shining Wing`,
    description: product.description,
    keywords: [
      product.title,
      "Shining Wing",
      "premium shoes",
      "elegant footwear",
      "handcrafted shoes",
      product.category,
    ],
    openGraph: {
      title: `${product.title} | Shining Wing`,
      description: product.description,
      url: `https://shiningwing.com/product/${product.id}`,
      siteName: "Shining Wing",
      images: [
        {
          url: product.image.thumbnail,
          width: 1200,
          height: 630,
          alt: `${product.title} product preview`,
        },
      ],
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.title} | Shining Wing`,
      description: product.description,
      images: [product.image.thumbnail],
    },
  };
}

// ⚙️ Page component juga sama — ubah params jadi Promise
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params; // ✅ tunggu params di-resolve
  const product = productData.find((item) => item.id === id);

  if (!product) {
    return (
      <div className="container mx-auto text-center py-20">
        <h1 className="text-2xl font-semibold text-gray-800">
          Product not found
        </h1>
        <p className="text-gray-500 mt-2">
          The product you’re looking for doesn’t exist or has been removed.
        </p>
      </div>
    );
  }

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    image: product.image.thumbnail,
    description: product.description,
    sku: product.id,
    brand: {
      "@type": "Brand",
      name: "Shining Wing",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: product.price || "0",
      availability: "https://schema.org/InStock",
      url: `https://shiningwing.com/product/${product.id}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <div>
        <PreviewProduct />
      </div>
    </>
  );
}
