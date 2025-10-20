import React from "react";
import ProductList from "../ui/ProductList";
import {productData} from "@/data/productData";
import HightlighText from "../ui/HightlighText";

function AllProduct() {
  return (
    <div>
      <HightlighText text="all product" />
      <ProductList
        data={productData}
        src={(item) => item.image.thumbnail}
        alt={(item) => item.title}
        title={(item) => item.title}
        price={(item) => item.price.toLocaleString()}
        rating={(item) => item.rating}
        view={(item) => item.path}
        order={(item) => item.order}
        className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4"
        imageClass="w-full h-52 object-cover"
        boxClass="border-[1px] border-gray-200 shadow-xl overflow-hidden"
        boxClass2="flex flex-col gap-1  p-1"
        buttonClass="flex flex-col xl:flex-row gap-1"
        titleClass="line-clamp-1"
      />
    </div>
  );
}

export default AllProduct;
