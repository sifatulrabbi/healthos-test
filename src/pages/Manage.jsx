import React from "react";
import {useUpdateHeader} from "../hooks";
import {ManageCard} from "../features";
import {useRecoilValue} from "recoil";
import {customersData} from "../atoms";
import {v4} from "uuid";

function Manage() {
  const updateHeader = useUpdateHeader();
  const customers = useRecoilValue(customersData);

  React.useEffect(() => {
    updateHeader("Manage", null, "customers", null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col my-[60px] p-4 gap-4">
      {customers.map((customer) => (
        <ManageCard key={v4()} {...customer} />
      ))}
    </div>
  );
}

export default Manage;
