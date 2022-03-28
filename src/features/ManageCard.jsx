import React from "react";

function ManageCard({name, orders}) {
  return (
    <div className="w-full bg-white shadow-sm rounded-md p-2 flex gap-4">
      <div className="bg-gray-200 rounded-md flex p-3 justify-center items-center h-full w-fit text-2xl font-medium uppercase">
        {name[0] + name[1]}
      </div>
      <div>
        <span className="block text-black text-lg">{name}</span>
        <span className="block text-gray-500 text-sm">{orders} Orders</span>
      </div>
    </div>
  );
}

export default ManageCard;
