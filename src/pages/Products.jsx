import React from "react";
import {useUpdateHeader} from "../hooks";

function Products() {
  const updateHeader = useUpdateHeader();

  React.useEffect(() => {
    updateHeader("Products", null, "products", false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>Products</div>;
}

export default Products;
