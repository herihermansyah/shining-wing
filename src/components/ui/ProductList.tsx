import {Button} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {LuView} from "react-icons/lu";
import {LuShoppingBag} from "react-icons/lu";

type ProductListProps<T> = {
  data: T[];
  src: (item: T) => string;
  alt: (item: T) => string;
  title: (item: T) => string;
  price: (item: T) => number | string;
  rating: (item: T) => number;
  width?: number;
  height?: number;
  view: (item: T) => string;
  order: (item: T) => string;
  className?: string;
  imageClass?: string;
  boxClass?: string;
  boxClass2?: string;
  buttonClass?: string;
  titleClass?: string;
  priceClass?: string;
  ratingClass?: string;
};

function ProductList<T>({
  data,
  src,
  alt,
  width = 100,
  height = 200,
  title,
  price,
  rating,
  view,
  order,
  className = "",
  imageClass = "",
  boxClass = "",
  boxClass2 = "",
  buttonClass = "",
  titleClass = "",
  priceClass = "",
  ratingClass = "",
}: ProductListProps<T>) {
  return (
    <div className={className}>
      {data.map((item, index) => (
        <div key={index} className={boxClass}>
          <Image
            src={src(item)}
            alt={alt(item)}
            width={width}
            height={height}
            className={imageClass}
          />
          <div className={boxClass2}>
            <span className={titleClass}>{title(item)}</span>
            <span className={priceClass}>Rp : {price(item)}</span>
            <span className={ratingClass}>★ {rating(item)}</span>
            <div className={buttonClass}>
              <Link href={view(item)}>
                <Button size="small" variant="contained" endIcon={<LuView />}>
                  view
                </Button>
              </Link>
              <Link href={order(item)}>
                <Button
                  size="small"
                  variant="contained"
                  endIcon={<LuShoppingBag />}
                >
                  get free sample
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
