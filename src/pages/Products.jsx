import React from "react";
import {useRecoilState, useRecoilValue} from "recoil";
import {productsData, productsPageState} from "../atoms";
import {HeaderText} from "../components";
import {ProductsOverview} from "../features";
import {useUpdateHeader} from "../hooks";

function Products() {
  const updateHeader = useUpdateHeader();
  const [{products}, setProducts] = useRecoilState(productsPageState);
  const productData = useRecoilValue(productsData);

  function showProducts() {
    setProducts({products: true});
  }

  function showCategories() {
    setProducts({products: false});
  }

  React.useEffect(() => {
    updateHeader(<HeaderText name={`Products (${productData.length})`} />, "/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="fixed z-50 right-0 left-0 top-[60px] bg-blue-500 w-full grid grid-cols-2 lg:px-[20vw]">
        <button
          className={`text-white p-3 border-b-4 ${
            products ? "border-white" : "border-transparent"
          }`}
          onClick={showProducts}
        >
          Products
        </button>
        <button
          className={`text-white p-3 border-b-4 ${
            products ? "border-transparent" : "border-white"
          }`}
          onClick={showCategories}
        >
          Categories
        </button>
      </div>
      <div className="page-normal">
        <ProductsOverview />
      </div>
    </>
  );
}

export default Products;
