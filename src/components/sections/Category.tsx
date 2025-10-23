"use client";
import React from "react";
import CategoryList from "../ui/CategoryList";
import {categoryData} from "@/data/categoryData";
import {CategoryType} from "@/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import {useRouter} from "next/navigation";
import {Mousewheel} from "swiper/modules";
import "swiper/css";
import {TbCategoryPlus} from "react-icons/tb";

type CategoryProps = {
  onSelectCategory?: (category: string) => void;
};

function Category({onSelectCategory}: CategoryProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const router = useRouter();

  const handleCategoryClick = (category: string) => {
    const categorySlug = category.toLowerCase();

    if (onSelectCategory) {
      onSelectCategory(categorySlug);
    } else {
      router.push(`/shop?category=${categorySlug}`);
    }
  };

  return (
    <div className="flex gap-1">
      <div className="rounded-xl text-center flex items-center justify-center p-1 border border-gray-300 ">
        <span>
          <TbCategoryPlus size={30} />
        </span>
      </div>
      <div className=" flex-1 min-w-0">
        {!isDesktop ? (
          <CategoryList
            swiperProps={{
              slidesPerView: 4,
              spaceBetween: 5,
              mousewheel: {forceToAxis: true},
              loop: true,
            }}
            swiperModule={[Mousewheel]}
            data={categoryData}
            src={(item) => item.image}
            alt={(item) => item.title}
            title={(item) => item.title}
            className3="rounded-xl border border-gray-300 hover:shadow-md transition"
            imageClass="w-8 h-8"
            titleClass="capitalize whitespace-nowrap text-[12px]"
            onItemClick={(item: CategoryType) =>
              handleCategoryClick(item.title)
            }
          />
        ) : (
          <CategoryList
            data={categoryData}
            title={(item) => item.title}
            titleClass2="capitalize whitespace-nowrap"
            className2="grid grid-cols-5 lg:grid-cols-8 gap-2 text-center"
            className3="rounded-xl border border-gray-300 hover:shadow-md transition"
            onItemClick={(item: CategoryType) =>
              handleCategoryClick(item.title)
            }
          />
        )}
      </div>
    </div>
  );
}

export default Category;
