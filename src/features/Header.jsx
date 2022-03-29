import React from "react";
import {useRecoilValue} from "recoil";
import {pageHeader} from "../atoms";
import {FiChevronLeft} from "react-icons/fi";
import {BiLogOutCircle} from "react-icons/bi";
import {Link} from "react-router-dom";

function Navbar() {
  const header = useRecoilValue(pageHeader);

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
        {header.logout && (
          <button className="text-white text-xl">
            <BiLogOutCircle />
          </button>
        )}
      </div>
    </header>
  );
}

export default Navbar;
