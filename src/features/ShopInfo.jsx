import React from "react";
import {HiOutlinePencilAlt} from "react-icons/hi";
import {AccountField} from "../components";

function ShopInfo() {
  return (
    <div className="w-full relative p-3 rounded-md bg-white shadow-sm">
      <button className="top-3 right-3 absolute text-xl">
        <HiOutlinePencilAlt />
      </button>
      <AccountField field="Full Name" value="Md Sifatul Islam Rabbi" />
      <AccountField field="Shop Name" value="Sifatul's Super Market" />
      <AccountField
        noBorder
        field="Description"
        value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut iure
          harum vitae hic aspernatur? Placeat recusandae, aliquid perspiciatis
          odit provident ullam fuga"
      />
    </div>
  );
}

export default ShopInfo;
