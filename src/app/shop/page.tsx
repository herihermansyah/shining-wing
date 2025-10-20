import AllProduct from "@/components/sections/AllProduct";
import Category from "@/components/sections/Category";
import React from "react";

function page() {
  return (
    <div className="container mx-auto px-2 md:px-0 mt-4 flex flex-col gap-10">
      <Category />
      <AllProduct />
    </div>
  );
}

export default page;
