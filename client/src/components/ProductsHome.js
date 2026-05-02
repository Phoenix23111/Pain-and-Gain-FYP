import React from "react";

const ProductsHome = () => {
  return (
    <div className="flex-row w-auto mx-40 mt-16">
      <div className="w-auto h-auto text-red-700 justify-center text-center text-4xl font-bold font-serif">
        PRODUCTS
      </div>
      <div className="border border-red-700 border-double mt-1 w-auto"></div>
      <div className="grid border  border-green-800 grid-cols-2 mt-16 gap-y-14 gap-x-80 px-14 py-2">
        <div className="grid grid-cols-1 w-full border border-black col-span-1 text-center items-baseline font-serif italic ">
          <div className="border border-black  h-80 w-full object-cover mx-auto">
            <img
              className=" h-full w-auto object-cover mx-auto"
              src="/images/image.png"
              alt="1"
            />
          </div>
        </div>
        <div className=" border w-full border-black items-center grid grid-cols-1 col-span-1">
          <div className="h-80 border border-black w-full object-cover mx-auto">
            <img
              className="h-full w-auto object-cover mx-auto"
              src="/images/image.png"
              alt="1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsHome;
