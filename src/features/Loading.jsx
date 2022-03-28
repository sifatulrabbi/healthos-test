import React from "react";

function Loading() {
  return (
    <div className="fixed z-[100] top-0 bottom-0 left-0 right-0 bg-white flex flex-col justify-center items-center">
      <div className="bg-blue-500 rounded-full h-[20px] w-[20px] animate-bounce"></div>
      <span className="text-xl mt-6 animate-pulse">Loading</span>
    </div>
  );
}

export default Loading;
