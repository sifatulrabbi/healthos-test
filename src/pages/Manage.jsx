import React from "react";
import {useUpdateHeader} from "../hooks";
import {ManageCard, SearchBar} from "../features";
import {useRecoilValue} from "recoil";
import {customersData} from "../atoms";
import {v4} from "uuid";

function Manage() {
  const updateHeader = useUpdateHeader();
  const customers = useRecoilValue(customersData);

  React.useEffect(() => {
    updateHeader("Manage", "/", null, null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <SearchBar />
      <div className="page-normal">
        {customers.map((customer) => (
          <ManageCard key={v4()} {...customer} />
        ))}
      </div>
    </>
  );
}

export default Manage;
