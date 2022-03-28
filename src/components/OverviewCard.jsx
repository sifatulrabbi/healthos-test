import React from "react";

function OverviewCard({caption, body, price}) {
  return (
    <div className="bg-white rounded-md p-3 flex flex-col gap-3 shadow-sm">
      <span className="text-xs text-gray-500 uppercase">{caption}</span>
      <span className="text-2xl text-black font-medium">
        {price && "$"}
        {body}
      </span>
    </div>
  );
}

export default OverviewCard;
