import React from "react";
import {useUpdateHeader} from "../hooks";
import {OrdersOverview, SearchBar} from "../features";
import {HeaderText, Pill} from "../components";
import {useRecoilValue} from "recoil";
import {ordersOverviewData} from "../atoms";
import {v4} from "uuid";

function Orders() {
  const updateHeader = useUpdateHeader();
  const orders = useRecoilValue(ordersOverviewData);

  React.useEffect(() => {
    updateHeader(
      <HeaderText name={`All Orders (${orders.length})`} />,
      "/",
      null,
      false,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <SearchBar />
      <div className="page-normal">
        <div className="mb-4 flex flex-row flex-wrap gap-2">
          {["all", "done", "accepted", "shipped"].map((item) => (
            <Pill key={v4()} name={item} />
          ))}
        </div>
        <OrdersOverview fullList />
      </div>
    </>
  );
}

export default Orders;
