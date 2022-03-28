import React from "react";
import {useNavigate} from "react-router-dom";
import {BsChevronRight} from "react-icons/bs";
import {useSetRecoilState} from "recoil";
import {orderIdState} from "../atoms";

function OrderDetailBtn({id}) {
  const setOrderId = useSetRecoilState(orderIdState);
  const navigate = useNavigate();

  function handleClick() {
    setOrderId({id: id});
    navigate(`/orders/${id}`);
  }

  return (
    <button
      className="flex items-center text-sm text-gray-700 border-[1px] border-gray-300 py-1 px-2 rounded-md"
      onClick={handleClick}
    >
      Details <BsChevronRight />
    </button>
  );
}

export default OrderDetailBtn;
