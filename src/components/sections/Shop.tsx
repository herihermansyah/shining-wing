"use client";
import React, {useState, useEffect} from "react";
import {useSearchParams, useRouter, usePathname} from "next/navigation";
import AllProduct from "@/components/sections/AllProduct";
import Category from "@/components/sections/Category";
import {productData} from "@/data/productData";
import {IoSearch} from "react-icons/io5";
import {motion} from "framer-motion";

function ShopContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const categoryParam = searchParams.get("category") || "all";
  const searchQuery = searchParams.get("search")?.toLowerCase() || "";

  const [selectedCategory, setSelectedCategory] =
    useState<string>(categoryParam);
  const [filteredProducts, setFilteredProducts] = useState(productData);

  useEffect(() => {
    setSelectedCategory(categoryParam);

    const filtered = productData.filter((item) => {
      const matchCategory =
        categoryParam === "all" ||
        item.category.toLowerCase() === categoryParam ||
        (categoryParam === "new" && item.newProduct) ||
        (categoryParam === "popular" && item.popular);

      const matchSearch =
        searchQuery === "" ||
        item.title.toLowerCase().includes(searchQuery) ||
        item.description?.toLowerCase().includes(searchQuery);

      return matchCategory && matchSearch;
    });

    setFilteredProducts(filtered);
  }, [selectedCategory, categoryParam, searchQuery, pathname]);

  const handleCategorySelect = (category: string) => {
    router.push(`/shop?category=${category}`);
  };

  return (
    <div className="container mx-auto px-2 md:px-0 mt-4 flex flex-col gap-10">
      <Category onSelectCategory={handleCategorySelect} />

      {filteredProducts.length > 0 ? (
        <AllProduct data={filteredProducts} />
      ) : (
        <motion.div
          initial={{opacity: 0, y: 10}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.3}}
          className="flex flex-col items-center justify-center py-20 text-gray-500"
        >
          <IoSearch size={50} className="mb-4 opacity-60" />
          <p className="text-xl font-semibold">Product not found</p>
          <p className="text-sm text-gray-400 mt-1">
            Try using different keywords or changing the category.
          </p>
        </motion.div>
      )}
    </div>
  );
}

export default ShopContent;
