import React from "react";

function Card({caption, amount, green}) {
  return (
    <div
      className={`p-2 rounded-md w-full ${
        green ? "bg-green-600" : "bg-orange-500"
      }`}
    >
      <span className="text-sm uppercase text-white">{caption}</span>
      <span className="block text-white font-medium text-2xl mt-3">
        &#36;{amount}
      </span>
    </div>
  );
}

function PaymentsOverview() {
  return (
    <div className="w-full mt-4 pb-4 flex flex-col gap-3 border-b-[1px] border-gray-300">
      <h4 className="font-medium text-lg">Payments Overview</h4>
      <div className="flex flex-row gap-3">
        <Card caption="Amount on Hold" amount={720} />
        <Card caption="Amount on Hold" amount={1790} green />
      </div>
    </div>
  );
}

export default PaymentsOverview;
