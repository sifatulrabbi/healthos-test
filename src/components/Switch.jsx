import React from "react";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {turnOffShop} from "../atoms";

function Switch() {
  const status = useRecoilValue(turnOffShop);
  const setStatus = useSetRecoilState(turnOffShop);

  function toggleStatus() {
    setStatus((prev) => {
      console.log(prev);
      return !prev;
    });
  }

  return (
    <label className="switch">
      <input type="checkbox" checked={status} onChange={toggleStatus} />
      <span className="slider"></span>
    </label>
  );
}

export default Switch;
