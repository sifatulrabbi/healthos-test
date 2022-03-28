import React from "react";
import {useRecoilValue} from "recoil";
import {v4} from "uuid";
import {productsData} from "../atoms";
import {productImg1} from "../images";
import {FiShare2} from "react-icons/fi";
import {BsThreeDotsVertical} from "react-icons/bs";

function ProductsOverview() {
  const products = useRecoilValue(productsData);

  return (
    <>
      {products.map((product) => (
        <div
          key={v4()}
          className="rounded-md z-0 shadow-sm bg-white p-2 relative"
        >
          <button className="absolute top-2 right-2 text-gray-500">
            <BsThreeDotsVertical />
          </button>
          {/* top part */}
          <div className="flex justify-start items-start gap-3 mb-2 pb-2 border-b-[1px] border-gray-300">
            <img
              src={productImg1}
              alt=""
              height={85}
              width={80}
              className="bg-gray-300 rounded-md"
            />
            <div className="flex flex-col">
              <span className="block text-gray-800">{product.name}</span>
              <span className="block text-xs text-gray-500">
                {product.stock} {product.stock > 1 ? "Units" : "Unit"}
              </span>
              <span className="block text-black mt-2 font-medium">
                &#36;{product.price}
              </span>
              {product.stock > 0 ? (
                <span className="block text-green-500 text-xs">in stock</span>
              ) : (
                <span className="block text-red-500 text-xs">out of stock</span>
              )}
            </div>
          </div>
          {/* bottom part */}
          <button className="p-1 w-full text-sm text-gray-800 flex justify-center items-center gap-2">
            <FiShare2 />
            Share product
          </button>
        </div>
      ))}
    </>
  );
}

export default ProductsOverview;
