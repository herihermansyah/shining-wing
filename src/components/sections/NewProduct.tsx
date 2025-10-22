import React from "react";
import HightlighText from "../ui/HightlighText";
import ProductList from "../ui/ProductList";
import {productData} from "@/data/productData";

function NewProduct() {
  return (
    <div>
      <HightlighText text="new product" />
      <ProductList
        data={productData.filter((item) => item.newProduct)}
        src={(item) => item.image.thumbnail}
        alt={(item) => item.description}
        title={(item) => item.title}
        price={(item) => item.price.toLocaleString()}
        rating={(item) => item.rating}
        view={(item) => item.path}
        order={(item) => item.order}
      />
    </div>
  );
}

export default NewProduct;
