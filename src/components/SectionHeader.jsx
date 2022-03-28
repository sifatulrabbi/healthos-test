import React from "react";
import {Link} from "react-router-dom";
import {BsChevronRight} from "react-icons/bs";

function SectionHeader({title, link}) {
  return (
    <div className="w-full p-3 flex justify-between items-center">
      <h6 className="text-black text-lg">{title}</h6>
      {link && (
        <Link
          to={link.path}
          className="text-gray-500 text-sm flex justify-center items-center gap-2"
        >
          {link.name} <BsChevronRight />
        </Link>
      )}
    </div>
  );
}

export default SectionHeader;
