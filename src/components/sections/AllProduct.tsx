"use client";
import React from "react";
import ProductList from "../ui/ProductList";
import HightlighText from "../ui/HightlighText";
import {ProductDataType} from "@/types";

type AllProductProps = {
  data: ProductDataType[];
};

function AllProduct({data}: AllProductProps) {
  return (
    <div>
      <HightlighText text="all product" />
      <ProductList
        data={data}
        src={(item) => item.image.thumbnail}
        alt={(item) => item.title}
        title={(item) => item.title}
        price={(item) => item.price.toLocaleString()}
        rating={(item) => item.rating}
        view={(item) => `/product/${item.id}`}
      />
    </div>
  );
}

export default AllProduct;
