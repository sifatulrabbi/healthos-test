import React from "react";

function HeaderText({name, icon}) {
  return (
    <span className="flex justify-center items-center gap-2">
      {name}
      {icon}
    </span>
  );
}

export default HeaderText;
