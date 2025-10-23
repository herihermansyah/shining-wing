"use client";
import React, {useState} from "react";
import {useParams, useRouter} from "next/navigation";
import {productData} from "@/data/productData";
import Image from "next/image";
import {Button, IconButton} from "@mui/material";
import {FaLongArrowAltLeft} from "react-icons/fa";
import ProductList from "@/components/ui/ProductList";

function PreviewProduct() {
  const {id} = useParams();
  const router = useRouter();
  const [selectedSize, setSelectedSize] = useState<string | number | null>(
    null
  );
  const product = productData.find((item) => item.id === id);

  if (!product) {
    return (
      <div className="text-center py-20 text-gray-500">Product not found</div>
    );
  }

  const handleWhatsApp = () => {
    const message = `Hello, I am interested in the product ${
      product.title
    } (size: ${selectedSize ?? "-"}). Can send samples?`;
    const phoneNumber = "6281234567890";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  const recommended = productData
    .filter(
      (item) => item.category === product.category && item.id !== product.id
    )
    .slice(0, 4);

  return (
    <div className="container mx-auto px-2 md:px-0 py-2">
      {/* 🔙  Back */}
      <div className="my-2 flex items-center gap-1">
        <IconButton onClick={() => router.back()}>
          <FaLongArrowAltLeft size={20} />
        </IconButton>
        <span className="text-[10px]">Back</span>
      </div>

      {/* Gambar produk */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col items-center md:items-start gap-4 md:relative md:overflow-hidden">
          <Image
            src={product.image.thumbnail}
            alt={product.title}
            width={400}
            height={400}
            className="rounded-xl"
          />
          <div className="flex items-center gap-2 md:absolute bottom-4 left-4">
            <Image
              src={product.image.image1}
              alt="image1"
              width={100}
              height={100}
              className="rounded-md object-cover"
            />
            <Image
              src={product.image.image2}
              alt="image2"
              width={100}
              height={100}
              className="rounded-md object-cover"
            />
          </div>
        </div>

        {/* Detail produk */}
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-gray-600">{product.description}</p>
          <span className="text-lg font-semibold">
            Rp {product.price.toLocaleString()}
          </span>
          <span>★ {product.rating}</span>

          <div>
            <h2 className="font-semibold mb-2">Size:</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {product.size.map((s) => (
                <Button
                  key={s}
                  variant={selectedSize === s ? "contained" : "outlined"}
                  size="small"
                  onClick={() => setSelectedSize(s)}
                >
                  {s}
                </Button>
              ))}
            </div>
          </div>

          <Button
            variant="contained"
            size="large"
            className="w-fit"
            onClick={handleWhatsApp}
          >
            Get Sample
          </Button>
        </div>
      </div>

      {/* Rekomendasi Produk */}
      {recommended.length > 0 && (
        <div className="mt-16">
          <h2 className="text-xl font-semibold mb-4">
            Similar Products in Category {product.category}
          </h2>

          <ProductList
            data={recommended}
            src={(item) => item.image.thumbnail}
            alt={(item) => item.title}
            title={(item) => item.title}
            price={(item) => item.price.toLocaleString()}
            rating={(item) => item.rating}
            view={(item) => `/product/${item.id}`}
          />
        </div>
      )}
    </div>
  );
}

export default PreviewProduct;
