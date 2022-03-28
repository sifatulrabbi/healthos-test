import React from "react";
import {OverviewCard} from "../components";
import {useRecoilValue} from "recoil";
import {profileData} from "../atoms";
import {SectionHeader} from "../components";

function Overview() {
  const profile = useRecoilValue(profileData);

  return (
    <section>
      <SectionHeader title="Overview" />
      <div className="grid grid-cols-2 gap-4">
        <OverviewCard caption="Orders" body={profile.overview.orders} />
        <OverviewCard
          caption="Total sales"
          body={profile.overview.total_sales}
          price
        />
        <OverviewCard
          caption="Store views"
          body={profile.overview.store_views}
        />
        <OverviewCard
          caption="Products views"
          body={profile.overview.products_views}
        />
      </div>
    </section>
  );
}

export default Overview;
