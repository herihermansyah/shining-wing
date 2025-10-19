"use client";
import Image from "next/image";
import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import type {SwiperProps} from "swiper/react";
import type {SwiperModule} from "swiper/types";

type SliderImageProps<T> = {
  data: T[];
  src: (item: T) => string;
  alt: (item: T) => string;
  height?: number;
  width?: number;
  imageClass?: string;
  swiperSlideClass?: string;
  swiperProps?: SwiperProps;
  modules?: SwiperModule[];
  children?: React.ReactNode;
};

function SliderImage<T>({
  children,
  data,
  src,
  alt,
  height,
  width,
  imageClass = "",
  swiperSlideClass = "",
  swiperProps,
  modules,
}: SliderImageProps<T>) {
  return (
    <div>
      <Swiper modules={modules} {...swiperProps}>
        {data.map((item, index) => (
          <SwiperSlide key={index} className={swiperSlideClass}>
            {data && (
              <Image
                src={src(item)}
                alt={alt(item)}
                width={width}
                height={height}
                className={imageClass}
              />
            )}

            {children}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SliderImage;
