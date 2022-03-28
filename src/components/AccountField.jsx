import React from "react";

function AccountField({field, value, noBorder}) {
  return (
    <div
      className={!noBorder ? "border-b-[1px]  border-gray-300 mb-3 pb-1" : ""}
    >
      <span className="text-sm uppercase text-gray-500 block">{field}</span>
      <span className="">{value}</span>
    </div>
  );
}

export default AccountField;
