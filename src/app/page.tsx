import CollectionCard from "@/components/sections/CollectionCard";
import HeroImage from "@/components/sections/HeroImage";
import Category from "@/components/sections/Category";
import React from "react";
import ProductPopular from "@/components/sections/ProductPopular";

function page() {
  return (
    <div className="container mx-auto px-2 md:px-0 mt-2 flex flex-col gap-4">
      <HeroImage />
      <Category />
      <CollectionCard />
      <ProductPopular />
    </div>
  );
}

export default page;
