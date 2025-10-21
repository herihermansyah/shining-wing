"use client";
import React from "react";
import CategoryList from "../ui/CategoryList";
import {categoryData} from "@/data/categoryData";
import {Mousewheel} from "swiper/modules";
import "swiper/css";
import HightlighText from "../ui/HightlighText";
import {TbCategoryPlus} from "react-icons/tb";
import useMediaQuery from "@/hooks/useMediaQuery";

function Category() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return (
    <div className="flex items-center gap-2">
      <HightlighText
        text="category"
        textClass="text-[10px] capitalize"
        className="flex flex-col md:flex-row border-[1px] rounded-sm border-gray-300 p-2 gap-2 items-center shrink-0 "
        iconClass="text-[23px] md:text-[15px]"
        icon={<TbCategoryPlus />}
      />
      <div className="flex-1 min-w-0">
        {isDesktop ? (
          <CategoryList
            data={categoryData}
            path={(item) => item.path}
            title={(item) => item.title}
            className2="flex gap-2"
            className3="border-[1px] rounded-sm border-gray-300 w-24 h-8 text-center"
            titleClass2="text-[10px] capitalize hover:bg-hover"
          />
        ) : (
          <CategoryList
            data={categoryData}
            path={(item) => item.path}
            src={(item) => item.image}
            alt={(item) => item.title}
            title={(item) => item.title}
            width={30}
            height={70}
            className="flex items-center gap-2 "
            swiperSlideClass="w-72 border-[1px] border-gray-300 p-2 overflow-hidden rounded-sm"
            linkClass="flex flex-col items-center"
            titleClass="whitespace-nowrap capitalize text-[10px] "
            swiperModule={[Mousewheel]}
            swiperProps={{
              slidesPerView: 4,
              loop: true,
              spaceBetween: 4,
              mousewheel: {forceToAxis: true},
            }}
          />
        )}
      </div>
    </div>
  );
}

export default Category;
