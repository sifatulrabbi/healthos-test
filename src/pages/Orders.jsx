import React from "react";
import {useUpdateHeader} from "../hooks";

function Orders() {
  const updateHeader = useUpdateHeader();

  React.useEffect(() => {
    updateHeader("Orders", "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>Orders</div>;
}

export default Orders;
