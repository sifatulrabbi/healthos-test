import React from "react";
import {HeaderText} from "../components";
import {
  OrderTotalView,
  OrderProductView,
  OrderCustomerDetail,
} from "../features";
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
    <>
      <div className="fixed top-[60px] left-0 right-0 h-[60px] bg-white flex justify-center items-center gap-4 shadow-sm">
        <button className="bg-red-500 text-white px-3 py-2 rounded-md">
          Reject Order
        </button>
        <button className="bg-green-600 text-white px-3 py-2 rounded-md">
          Accept Order
        </button>
      </div>
      <div className="page-normal gap-4">
        <OrderProductView />
        <OrderTotalView {...order.payments} />
        <OrderCustomerDetail />
      </div>
    </>
  );
}

export default Order;
