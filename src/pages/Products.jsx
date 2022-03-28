import React from "react";
import {useRecoilState} from "recoil";
import {productsPageState} from "../atoms";
import {ProductsOverview} from "../features";
import {useUpdateHeader} from "../hooks";

function Products() {
  const updateHeader = useUpdateHeader();
  const [{products}, setProducts] = useRecoilState(productsPageState);

  function showProducts() {
    setProducts({products: true});
  }

  function showCategories() {
    setProducts({products: false});
  }

  React.useEffect(() => {
    updateHeader("Products", "/", "products", false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="fixed z-50 right-0 left-0 top-[60px] bg-blue-500 w-full grid grid-cols-2">
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
