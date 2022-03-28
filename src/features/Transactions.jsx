import React from "react";
import {productImg1} from "../images";
import {getPaymentsSelector} from "../atoms";
import {useRecoilValue} from "recoil";
import {v4} from "uuid";

function Card({noBorder, order_id, amount, status: {i_at, done}}) {
  return (
    <div
      className={`w-full border-gray-300 py-3 flex ${
        !noBorder && "border-b-[1px]"
      }`}
    >
      <img src={productImg1} alt="" height={50} width={50} className="" />
      <div className="flex flex-col flex-grow ml-3 justify-between">
        <span className="font-medium">Order &#35;{order_id}</span>
        <span className="text-sm text-gray-500">{i_at}</span>
      </div>
      <div className="flex flex-col items-end justify-between">
        <span className="text-blue-500 font-medium">&#36;{amount}</span>
        <span className="text-sm text-gray-500 font-medium">
          <span
            className={`inline-block h-[8px] w-[8px] mr-1 rounded-full ${
              done ? "bg-green-500" : "bg-red-500"
            }`}
          />
          {done ? "Received" : "Pending"}
        </span>
      </div>
    </div>
  );
}

function Transactions() {
  const payments = useRecoilValue(getPaymentsSelector);

  return (
    <div className="flex flex-col mt-4 last:border-b-0">
      <h4 className="font-medium text-lg mb-2">Transactions</h4>
      {payments.map((payment, index) => (
        <Card
          key={v4()}
          {...payment}
          noBorder={payments.length - 1 === index}
        />
      ))}
    </div>
  );
}

export default Transactions;
