import React from "react";
import {orderSortName} from "../atoms";
import {useRecoilValue} from "recoil";

function Pill({name, callback}) {
  const [active, setActive] = React.useState(false);
  const activeName = useRecoilValue(orderSortName);

  React.useEffect(() => {
    setActive(activeName === name);
  }, [activeName, name]);

  return (
    <button
      className={`rounded-full py-1 px-3 w-fit ${
        active
          ? "bg-slate-600 text-white"
          : "bg-gray-200 border-[1px] border-gray-300 text-gray-500"
      }`}
      onClick={() => callback(name)}
    >
      {name}
    </button>
  );
}

export default Pill;
