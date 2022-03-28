import React from "react";

function SearchBar() {
  return (
    <div className="fixed z-50 right-0 left-0 top-[60px] bg-blue-500 w-full p-3 flex justify-center">
      <input
        type="search"
        required
        placeholder="Search customers by their names..."
        className="w-full p-2 rounded-md outline-none border-2 border-transparent focus:border-gray-700"
      />
    </div>
  );
}

export default SearchBar;
