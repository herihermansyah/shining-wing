import React from "react";
import ProductList from "../ui/ProductList";
import {productData} from "@/data/productData";
import HightlighText from "../ui/HightlighText";

function ProductPopular() {
  return (
    <div>
      <HightlighText text="popular" />
      <ProductList
        data={productData.filter((item) => item.popular)}
        src={(item) => item.image.thumbnail}
        alt={(item) => item.description}
        title={(item) => item.title}
        price={(item) => item.price.toLocaleString()}
        rating={(item) => item.rating}
        view={(item) => `/product/${item.id}`}
    
      />
    </div>
  );
}

export default ProductPopular;
