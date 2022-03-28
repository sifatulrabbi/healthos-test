import React from "react";
import {useRecoilState} from "recoil";
import {pageHeader} from "../atoms";
import {FiChevronLeft, FiSearch} from "react-icons/fi";
import {Link} from "react-router-dom";
// import {Switch} from "../components";

function Navbar() {
  const [header] = useRecoilState(pageHeader);

  return (
    <header className="fixed z-50 top-0 left-0 right-0 bg-blue-500 flex justify-between items-start h-[60px] gap-4 p-4 lg:px-[20vw]">
      <div>
        {header.prev && (
          <Link to={header.prev}>
            <FiChevronLeft className="text-2xl text-white" />
          </Link>
        )}
      </div>
      <span className="absolute left-1/2 -translate-x-1/2 w-fit text-lg text-white">
        {header.title}
      </span>
      <div>
        {header.search && (
          <button className="text-white text-xl">
            <FiSearch />
          </button>
        )}
      </div>
      {/* {header.turn_off && <Switch />} */}
    </header>
  );
}

export default Navbar;
