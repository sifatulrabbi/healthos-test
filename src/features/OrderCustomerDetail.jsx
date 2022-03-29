import React from "react";
import {useRecoilValue} from "recoil";
import {getOrderSelector} from "../atoms";
import {PaymentType} from "../components";

function DetailField({name, value}) {
  return (
    <div className="text-gray-800">
      <span className="font-medium inline-block mr-2">{name}:</span>
      <span>{value}</span>
    </div>
  );
}

function OrderCustomerDetail() {
  const order = useRecoilValue(getOrderSelector);

  return (
    <div className="w-full rounded-md bg-white shadow-sm flex flex-col gap-2 p-3">
      <h5 className="uppercase text-gray-500 text-sm">Customer Details</h5>
      <DetailField name="Name" value={order.customer.name} />
      <DetailField name="Mobile" value={order.customer.mobile} />
      <DetailField name="Address" value={order.customer.address} />
      <DetailField name="Pin Code" value={order.pin_code} />
      <PaymentType type={order.type} />
    </div>
  );
}

export default OrderCustomerDetail;
