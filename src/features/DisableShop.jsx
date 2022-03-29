import React from "react";

function DisableShop() {
  const [disabled, setDisabled] = React.useState(false);

  function toggleDisabled() {
    setDisabled((prev) => !prev);
  }

  return (
    <div className="w-full bg-red-100 rounded-md border-[1px] border-red-500 p-2 flex justify-between items-center">
      <span className="text-red-500">Temporarily disable shop</span>
      <button
        className={`w-[40px] h-[20px] rounded-full border-2 relative ${
          disabled
            ? "bg-red-500 border-red-500"
            : "bg-green-600 border-green-600"
        }`}
        onClick={toggleDisabled}
      >
        <span
          className={`block h-[16px] w-[16px] bg-white rounded-full absolute top-0 ${
            disabled ? "right-0" : "left-0"
          }`}
        ></span>
      </button>
    </div>
  );
}

export default DisableShop;
