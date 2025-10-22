"use client";
import Image from "next/image";
import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import type {SwiperProps} from "swiper/react";
import type {SwiperModule} from "swiper/types";

type CategoryListProps<T> = {
  data: T[];
  src?: (item: T) => string;
  alt?: (item: T) => string;
  width?: number;
  height?: number;
  title: (item: T) => string;
  swiperProps?: SwiperProps;
  swiperModule?: SwiperModule[];
  className?: string;
  className2?: string;
  className3?: string;
  swiperSlideClass?: string;
  linkClass?: string;
  linkClass2?: string;
  imageClass?: string;
  titleClass?: string;
  titleClass2?: string;
  onItemClick?: (item: T) => void;
};

function CategoryList<T>({
  data,
  src,
  alt,
  title,
  swiperProps,
  swiperModule,
  className = "",
  className2 = "",
  className3 = "",
  swiperSlideClass = "",
  imageClass = "",
  titleClass = "",
  titleClass2 = "",
  width = 50,
  height = 50,
  onItemClick, // 🆕 props baru
}: CategoryListProps<T>) {
  const isSwiper = swiperProps || swiperModule;
  return (
    <>
      {isSwiper ? (
        <div className={className}>
          <Swiper modules={swiperModule} {...swiperProps}>
            {data.map((item, index) => (
              <SwiperSlide key={index} className={swiperSlideClass}>
                <div
                  onClick={() => onItemClick?.(item)}
                  className={`${className3} cursor-pointer flex flex-col items-center gap-2`}
                >
                  {src && (
                    <Image
                      loading="lazy"
                      priority={false}
                      unoptimized
                      src={src(item)}
                      alt={alt?.(item) ?? ""}
                      width={width}
                      height={height}
                      className={imageClass}
                    />
                  )}
                  <span className={titleClass}>{title(item)}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <div className={className2}>
          {data.map((item, index) => (
            <div
              key={index}
              className={`${className3} cursor-pointer flex flex-col items-center gap-2`}
              onClick={() => onItemClick?.(item)}
            >
              <span className={titleClass2}>{title(item)}</span>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default CategoryList;
