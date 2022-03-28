import React from "react";
import {NavLink} from "react-router-dom";

function NavbarBtn({name, Icon, path}) {
  return (
    <NavLink
      to={path}
      className={({isActive}) =>
        `flex flex-col justify-center items-center  ${
          isActive ? "text-blue-500" : "text-gray-600"
        }`
      }
    >
      <Icon className="text-xl" />
      <span className="text-xs">{name}</span>
    </NavLink>
  );
}

export default NavbarBtn;
