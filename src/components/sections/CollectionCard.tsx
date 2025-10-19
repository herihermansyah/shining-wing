"use client";
import React from "react";
import SliderImage from "../ui/SliderImage";
import {collectionImage} from "@/data/image";
import {EffectCoverflow, Mousewheel} from "swiper/modules";
import "swiper/css/effect-coverflow";
import HightlighText from "../ui/HightlighText";

function CollectionCard() {
  return (
    <div className="lg:hidden">
      <HightlighText text="new collections" />
      <SliderImage
        data={collectionImage}
        src={(item) => item.path}
        alt={(item) => item.title}
        width={400}
        height={600}
        swiperProps={{
          effect: "coverflow",
          slidesPerView: "auto",
          mousewheel: {forceToAxis: true},
          grabCursor: true,
          centeredSlides: true,
          loop: true,
          coverflowEffect: {
            rotate: 5,
            stretch: 0,
            depth: 700,
            modifier: 1,
            slideShadows: true,
          },
        }}
        modules={[EffectCoverflow, Mousewheel]}
        swiperSlideClass="!w-[150px] !h-[300px] md:!w-[250px] md:!h-[450px] flex items-center justify-center rounded-2xl shadow-lg"
        imageClass="object-cover rounded-2xl w-full h-full"
      />
    </div>
  );
}

export default CollectionCard;
