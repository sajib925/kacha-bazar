import React from "react";

const ProductsHeading = ({title, description}) => {
  return (
    <div className="text-center w-full lg:w-2/5">
      <h2 className="text-xl lg:text-2xl mb-2 font-inter font-semibold">
        {title}
      </h2>
      <p className="text-base font-inter text-gray-600 leading-6">
        {description}
      </p>
    </div>
  );
};

export default ProductsHeading;
