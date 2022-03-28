import React from "react";
import {BiChevronRight} from "react-icons/bi";

function PaymentsOptions() {
  return (
    <div className="flex flex-col border-b-[1px] border-gray-300">
      <button className="w-full flex justify-between py-2">
        <span>Default Method</span>
        <span className="inline-flex items-center gap-1 text-sm text-gray-500">
          Both options <BiChevronRight className="text-lg" />
        </span>
      </button>
      <button className="w-full flex justify-between py-2">
        <span>Payment Profile</span>
        <span className="inline-flex items-center gap-1 text-sm text-gray-500">
          Bank Account <BiChevronRight className="text-lg" />
        </span>
      </button>
    </div>
  );
}

export default PaymentsOptions;
