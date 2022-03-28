import React from "react";
import {Link} from "react-router-dom";
import {BsChevronRight} from "react-icons/bs";
import {productImg1} from "../images";
import OrderDetailBtn from "./OrderDetailBtn";

function OderCard({id, amount, quantity, recent, type, status, o_at}) {
  const statusType =
    status === "accepted"
      ? "bg-green-500"
      : status === "shipped"
      ? "bg-red-500"
      : "bg-orange-300";
  const paymentType =
    type === "paid"
      ? "bg-red-100 text-red-500"
      : "bg-orange-100 text-orange-500";

  return (
    <div className="flex flex-col justify-start items-start bg-white p-3 rounded-md shadow-sm">
      {/* header */}
      <div className="flex justify-between items-center w-full mb-3">
        <span className="flex justify-start items-center gap-2 text-sm font-medium">
          Order &#35;{id}
          {recent && (
            <span className="inline bg-green-500 text-white text-[10px] uppercase px-[3px] h-[18px] rounded-sm">
              NEW
            </span>
          )}
        </span>
        <span className="text-gray-500 text-sm">{o_at}</span>
      </div>
      {/* mid section */}
      <div className="flex gap-3 w-full">
        <img
          src={productImg1}
          alt=""
          width={60}
          height={60}
          className="bg-gray-300 object-cover rounded-md overflow-hidden"
        />
        <div className="flex w-full justify-between">
          <div>
            <span className="block text-gray-500 text-xs uppercase">
              {quantity} {quantity < 2 ? "Item" : "Items"}
            </span>
            <span className="block text-blue-500 text-base font-medium uppercase">
              &#36;{amount}
            </span>
          </div>
          <div
            className={`text-sm font-medium flex justify-center items-center rounded-md px-2 py-[2px] h-fit w-fit uppercase ${paymentType}`}
          >
            {type}
          </div>
        </div>
      </div>
      {/* bottom section */}
      <div className="flex justify-between items-center w-full border-t-[1px] mt-3 pt-2">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span
            className={`block h-[8px] w-[8px] rounded-full ${statusType}`}
          ></span>
          {status}
        </div>
        <OrderDetailBtn id={id} />
      </div>
    </div>
  );
}

export default OderCard;
