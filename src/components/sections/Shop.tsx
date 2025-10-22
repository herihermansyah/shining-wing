"use client";
import React, {useState, useEffect} from "react";
import {useSearchParams, useRouter} from "next/navigation";
import AllProduct from "@/components/sections/AllProduct";
import Category from "@/components/sections/Category";
import {productData} from "@/data/productData";

function Shop() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // 🔹 Ambil kategori dari URL, default ke "all"
  const categoryParam = searchParams.get("category") || "all";

  // 🔹 Simpan kategori aktif di state
  const [selectedCategory, setSelectedCategory] =
    useState<string>(categoryParam);

  // 🧠 Sinkronkan state dengan URL (biar URL dan state selalu sama)
  useEffect(() => {
    setSelectedCategory(categoryParam);
  }, [categoryParam]);

  // 🔄 Saat user klik kategori di halaman ini
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    router.push(`/shop?category=${category}`); // update URL juga
  };

  // 🧠 Logika filter produk berdasarkan kategori
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

      {/* 🛍️ Tampilkan hasil filter */}
      <AllProduct data={filteredProducts} />
    </div>
  );
}

export default Shop;
