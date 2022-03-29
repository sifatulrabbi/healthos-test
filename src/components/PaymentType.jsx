import React from "react";

function PaymentType({type}) {
  const paymentType =
    type === "paid"
      ? "bg-red-100 text-red-500"
      : "bg-orange-100 text-orange-500";

  return (
    <div
      className={`text-sm font-medium flex justify-center items-center rounded-md px-2 py-[2px] h-fit w-fit uppercase ${paymentType}`}
    >
      {type}
    </div>
  );
}

export default PaymentType;
