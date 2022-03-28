import React from "react";
import {AiOutlineHome, AiFillAccountBook} from "react-icons/ai";
import {BiGridAlt, BiUser} from "react-icons/bi";
import {ImStack} from "react-icons/im";
import {BottomBarBtn} from "../components";
import {v4} from "uuid";
import {useRecoilState} from "recoil";
import {isAuthenticated} from "../atoms";

const bottomBarData = [
  {name: "Home", Icon: AiOutlineHome, path: "/"},
  {name: "Orders", Icon: AiFillAccountBook, path: "/orders"},
  {name: "Products", Icon: BiGridAlt, path: "/products"},
  {name: "Manage", Icon: ImStack, path: "/manage"},
  {name: "Account", Icon: BiUser, path: "/account"},
];

function BottomBar() {
  const [auth] = useRecoilState(isAuthenticated);

  if (!auth) return <></>;
  return (
    <div className="z-50 fixed bottom-0 right-0 left-0 bg-white h-[60px] border-t-[1px] border-gray-200 px-4 flex justify-around items center">
      {bottomBarData.map((data) => (
        <BottomBarBtn key={v4()} {...data} />
      ))}
    </div>
  );
}

export default BottomBar;
