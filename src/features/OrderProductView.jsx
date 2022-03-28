import React from "react";
import {productImg1} from "../images";
import {getOrderSelector} from "../atoms";
import {useRecoilValue} from "recoil";
import {v4} from "uuid";

function View({name, quantity, price}) {
  return (
    <div className="flex justify-start items-center gap-3">
      <img
        src={productImg1}
        alt=""
        height={80}
        width={80}
        className="rounded-md overflow-hidden"
      />
      <div className="flex flex-col flex-grow">
        <span className="block mb-3">{name}</span>
        <span>
          <span className="text-sm h-[18px] px-2 rounded-sm border-[1px] border-blue-500 bg-blue-100 text-blue-500">
            {quantity}
          </span>{" "}
          x &#36;{price}
        </span>
      </div>
      <div className="self-end font-medium">&#36;{price * quantity}</div>
    </div>
  );
}

function OrderProductView() {
  const order = useRecoilValue(getOrderSelector);

  return (
    <div className="rounded-md shadow-sm bg-white p-2 flex flex-col gap-3">
      {order &&
        order.products.map((product) => <View key={v4()} {...product} />)}
    </div>
  );
}

export default OrderProductView;
