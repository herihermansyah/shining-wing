"use client";
import React, {useState, useEffect, Suspense} from "react";
import {useSearchParams, useRouter} from "next/navigation";
import AllProduct from "@/components/sections/AllProduct";
import Category from "@/components/sections/Category";
import {productData} from "@/data/productData";

// 🧩 Komponen utama
function ShopContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // 🔹 Ambil kategori dari URL, default ke "all"
  const categoryParam = searchParams.get("category") || "all";

  // 🔹 Simpan kategori aktif di state
  const [selectedCategory, setSelectedCategory] =
    useState<string>(categoryParam);

  // 🧠 Sinkronkan state dengan URL
  useEffect(() => {
    setSelectedCategory(categoryParam);
  }, [categoryParam]);

  // 🔄 Saat user klik kategori
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    router.push(`/shop?category=${category}`);
  };

  // 🧮 Filter produk berdasarkan kategori
  const filteredProducts =
    selectedCategory === "all"
      ? productData
      : productData.filter(
          (item) =>
            item.category.toLowerCase() === selectedCategory ||
            (selectedCategory === "new" && item.newProduct) ||
            (selectedCategory === "popular" && item.popular)
        );

  return (
    <div className="container mx-auto px-2 md:px-0 mt-4 flex flex-col gap-10">
      {/* 🧭 Komponen kategori */}
      <Category onSelectCategory={handleCategorySelect} />

      {/* 🛍️ Produk hasil filter */}
      <AllProduct data={filteredProducts} />
    </div>
  );
}

// ⚡ Komponen pembungkus pakai Suspense
// ini yang bikin useSearchParams() bisa jalan aman di build
export default function Shop() {
  return (
    <Suspense
      fallback={
        <div className="text-center flex justify-center items-center mt-10">
          Loading...
        </div>
      }
    >
      <ShopContent />
    </Suspense>
  );
}
