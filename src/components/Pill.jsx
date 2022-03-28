import React from "react";
import {orderSortType} from "../atoms";
import {useRecoilState} from "recoil";

function Pill({name}) {
  const [active, setActive] = React.useState(false);
  const [activeType, setActiveType] = useRecoilState(orderSortType);

  React.useEffect(() => {
    setActive(activeType === name);
  }, [activeType, name]);

  function updateActiveType() {
    console.log(name);
    setActiveType(name);
  }

  return (
    <button
      className={`rounded-full py-1 px-3 w-fit ${
        active
          ? "bg-slate-600 text-white"
          : "bg-gray-200 border-[1px] border-gray-300 text-gray-500"
      }`}
      onClick={updateActiveType}
    >
      {name}
    </button>
  );
}

export default Pill;
