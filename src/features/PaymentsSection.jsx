import React from "react";
import {BiChevronDown} from "react-icons/bi";
import {useRecoilState} from "recoil";
import {expandPaymentSection} from "../atoms";
import PaymentsOptions from "./PaymentsOptions";
import PaymentsOverview from "./PaymentsOverview";
import Transactions from "./Transactions";

function PaymentsSection() {
  const [expand, setExpand] = useRecoilState(expandPaymentSection);

  function togglePayments() {
    setExpand((prev) => !prev);
  }

  return (
    <div className="flex flex-col p-3 gap-2 bg-white shadow-sm rounded-md">
      <button
        className={`flex justify-center items-center gap-2 ${
          expand && "border-b-[1px] border-gray-300 pb-2"
        }`}
        onClick={togglePayments}
      >
        Payments{" "}
        <BiChevronDown
          className={`text-2xl ${expand ? "rotate-180" : "rotate-0"}`}
        />
      </button>
      {expand && (
        <div className="flex flex-col transition-all overflow-hidden">
          <PaymentsOptions />
          <PaymentsOverview />
          <Transactions />
        </div>
      )}
    </div>
  );
}

export default PaymentsSection;
