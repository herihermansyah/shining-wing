"use client";
import React from "react";
import SliderImage from "../ui/SliderImage";
import {heroImage} from "@/data/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import "swiper/css/autoplay";
import {Autoplay, Mousewheel, Pagination} from "swiper/modules";

function HeroImage() {
  return (
    <div>
      <SliderImage
        data={heroImage}
        src={(item) => item.path}
        alt={(item) => item.title}
        width={400}
        height={600}
        imageClass="rounded-xl w-full lg:h-120"
        swiperProps={{
          autoplay: {
            delay: 5000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          },
          slidesPerView: 1,
          pagination: {clickable: true},
          mousewheel: {forceToAxis: true},
          loop: true,
        }}
        modules={[Pagination, Mousewheel, Autoplay]}
      />
    </div>
  );
}

export default HeroImage;
