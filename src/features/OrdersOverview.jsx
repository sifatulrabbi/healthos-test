import React from "react";
import {OrderCard, SectionHeader} from "../components";
import {useRecoilValue} from "recoil";
import {ordersOverviewData} from "../atoms";
import {v4} from "uuid";

function OrdersOverview({fullList}) {
  const orders = useRecoilValue(ordersOverviewData);

  return (
    <section>
      {!fullList && (
        <SectionHeader
          title="Orders"
          link={{name: "View more", path: "/orders"}}
        />
      )}
      <div className="flex flex-col gap-4">
        {fullList
          ? orders.map((order) => <OrderCard key={v4()} {...order} />)
          : orders
              .slice(0, 3)
              .map((order) => <OrderCard key={v4()} {...order} />)}
      </div>
    </section>
  );
}

export default OrdersOverview;
