import React from "react";

function View({big, name, amount}) {
  return (
    <div
      className={`w-full flex justify-between items-center ${
        big ? "text-lg font-medium" : "text-sm"
      }`}
    >
      <span>{name}</span>
      <span>&#36;{amount}</span>
    </div>
  );
}

function OrderTotalView({delivery, grand, item}) {
  return (
    <div className="w-full flex flex-col bg-white rounded-md shadow-sm px-3 py-2 gap-3">
      <View name={"Delivery"} amount={delivery} />
      <View name={"Items"} amount={item} />
      <View name={"Grand"} amount={grand} big />
    </div>
  );
}

export default OrderTotalView;
