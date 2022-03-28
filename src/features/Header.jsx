import React from "react";
import {useRecoilState} from "recoil";
import {pageHeader} from "../atoms";
import {FiChevronLeft, FiSearch} from "react-icons/fi";
import {Link} from "react-router-dom";
// import {Switch} from "../components";

function Navbar() {
  const [header] = useRecoilState(pageHeader);

  return (
    <header className="fixed top-0 left-0 right-0 bg-blue-500 flex justify-between items-center gap-4 px-4 min-h-[60px]">
      <div>
        {header.prev && (
          <Link to={header.prev}>
            <FiChevronLeft className="text-2xl text-white" />
          </Link>
        )}
        <span className="block text-lg text-white">{header.title}</span>
      </div>
      <div>
        {header.search && (
          <button className="text-white text-xl">
            <FiSearch />
          </button>
        )}
        {/* {header.turn_off && <Switch />} */}
      </div>
    </header>
  );
}

export default Navbar;
