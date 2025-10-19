"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import type {SwiperProps} from "swiper/react";
import type {SwiperModule} from "swiper/types";

type CategoryListProps<T> = {
  data: T[];
  path: (item: T) => string;
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
};

function CategoryList<T>({
  data,
  path,
  src,
  alt,
  title,
  swiperProps,
  swiperModule,
  className = "",
  className2 = "",
  className3 = "",
  swiperSlideClass = "",
  linkClass = "",
  linkClass2 = "",
  imageClass = "",
  titleClass = "",
  titleClass2 = "",
  width,
  height,
}: CategoryListProps<T>) {
  const isSwiper = swiperProps || swiperModule;
  return (
    <>
      {isSwiper ? (
        <div className={className}>
          <Swiper modules={swiperModule} {...swiperProps}>
            {data.map((item, index) => (
              <SwiperSlide key={index} className={swiperSlideClass}>
                <Link href={path(item)} className={linkClass}>
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
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <div className={className2}>
          {data.map((item, index) => (
            <div className={className3} key={index}>
              <Link className={linkClass2} href={path(item)}>
                <span className={titleClass2}>{title(item)}</span>
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default CategoryList;
