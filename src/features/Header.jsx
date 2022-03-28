import React from "react";
import {useRecoilState} from "recoil";
import {pageHeader} from "../atoms";
import {FiChevronLeft} from "react-icons/fi";
import {Link} from "react-router-dom";

function Navbar() {
  const [header] = useRecoilState(pageHeader);

  return (
    <header className="fixed top-0 left-0 right-0 bg-blue-500 flex min-h-[60px]">
      {header.prev && (
        <Link to={header.prev}>
          <FiChevronLeft className="text-2xl text-white" />
        </Link>
      )}
      <span className="block text-lg text-white">{header.title}</span>
    </header>
  );
}

export default Navbar;
