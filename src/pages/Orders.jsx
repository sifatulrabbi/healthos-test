import React from "react";
import {useUpdateHeader} from "../hooks";
import {OrdersOverview} from "../features";
import {Pill} from "../components";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {orderSortName, ordersOverviewData} from "../atoms";
import {v4} from "uuid";

function Orders() {
  const updateHeader = useUpdateHeader();
  const setOrderSortName = useSetRecoilState(orderSortName);
  const orders = useRecoilValue(ordersOverviewData);

  function sortOrder(name) {
    setOrderSortName(name);
  }

  React.useEffect(() => {
    updateHeader(`All Orders (${orders.length})`, "/", "orders", false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col my-[60px] p-4">
      <div className="mb-4 flex flex-row flex-wrap gap-2">
        {["all", "done", "accepted", "shipped"].map((item) => (
          <Pill key={v4()} name={item} callback={sortOrder} />
        ))}
      </div>
      <OrdersOverview fullList />
    </div>
  );
}

export default Orders;
