"use client";
import React from "react";
import CategoryList from "../ui/CategoryList";
import {categoryData} from "@/data/categoryData";
import {CategoryType} from "@/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import {useRouter} from "next/navigation";
import "swiper/css";

type CategoryProps = {
  // callback opsional → biar komponen ini reusable (bisa dipakai di halaman lain)
  onSelectCategory?: (category: string) => void;
};

function Category({onSelectCategory}: CategoryProps) {
  // 🧠 Deteksi apakah ukuran layar >= 768px (desktop)
  const isDesktop = useMediaQuery("(min-width: 768px)");

  // 🧭 Hook bawaan Next.js untuk navigasi dan cek path aktif
  const router = useRouter();

  /**
   * 🎯 Fungsi utama: dijalankan saat user klik kategori
   * - Kalau parent kasih prop `onSelectCategory`, kita panggil callback itu (komunikasi antar komponen)
   * - Kalau tidak, otomatis redirect ke halaman /shop dengan query ?category=namaKategori
   *
   * Tujuan: bikin komponen ini fleksibel — bisa dipakai di 2 skenario
   *    1️⃣ Filter produk langsung di halaman yang sama
   *    2️⃣ Navigasi antar halaman (misal klik kategori di homepage → pindah ke /shop)
   */
  const handleCategoryClick = (category: string) => {
    const categorySlug = category.toLowerCase();

    if (onSelectCategory) {
      // Mode filter lokal (komunikasi ke parent)
      onSelectCategory(categorySlug);
    } else {
      // Mode navigasi (redirect ke halaman shop)
      router.push(`/shop?category=${categorySlug}`);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {/* 🏷️ Judul section */}
      <h2 className="text-xl font-bold mb-2 capitalize">choose category</h2>

      {/* 🔁 Responsif: kalau mobile → tampil pakai swiper, kalau desktop → tampil grid biasa */}
      {!isDesktop ? (
        <CategoryList
          swiperProps={{
            slidesPerView: 5,
            spaceBetween: 5,
          }}
          // ✅ Langsung ambil dari categoryData (karena sudah termasuk "all")
          data={categoryData}
          src={(item) => item.image}
          alt={(item) => item.title}
          title={(item) => item.title}
          className2="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-4 text-center"
          className3="p-2 rounded-xl border hover:shadow-md transition"
          imageClass="w-8 h-8 object-contain mx-auto"
          onItemClick={(item: CategoryType) => handleCategoryClick(item.title)}
        />
      ) : (
        <CategoryList
          data={categoryData}
          title={(item) => item.title}
          width={80}
          height={80}
          className2="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-1 text-center"
          className3="p-2 rounded-xl border hover:shadow-md transition"
          imageClass="w-8 h-8 object-contain mx-auto"
          onItemClick={(item: CategoryType) => handleCategoryClick(item.title)}
        />
      )}
    </div>
  );
}

export default Category;
