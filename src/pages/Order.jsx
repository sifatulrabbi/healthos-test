import React from "react";
import {HeaderText} from "../components";
import {OrderTotalView, OrderProductView} from "../features";
import {useRecoilValue} from "recoil";
import {getOrderSelector} from "../atoms";
import {useUpdateHeader} from "../hooks";

function Order() {
  const order = useRecoilValue(getOrderSelector);
  const updateHeader = useUpdateHeader();

  React.useEffect(() => {
    updateHeader(
      <HeaderText name={`Order #${order.id}`} />,
      "/orders",
      null,
      true,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="page-shrink gap-4">
      <OrderProductView />
      <OrderTotalView {...order.payments} />
    </div>
  );
}

export default Order;
