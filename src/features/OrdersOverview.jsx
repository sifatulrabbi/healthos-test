import React from "react";
import {OrderCard, SectionHeader} from "../components";
import {} from "recoil";

function OrdersOverview() {
  return (
    <section>
      <SectionHeader
        title="Orders"
        link={{name: "View more", path: "/orders"}}
      />
      <div>
        <OrderCard
          order_id="123805"
          amount={500}
          quantity={3}
          recent
          status="pending"
          o_at="Today, 11:00 AM"
          type="COD"
        />
      </div>
    </section>
  );
}

export default OrdersOverview;
