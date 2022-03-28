import React from "react";
import {useRecoilState} from "recoil";
import {profileData} from "../atoms";
import {OrdersOverview, Overview} from "../features";
import {useUpdateHeader} from "../hooks";

function Home() {
  const updateHeader = useUpdateHeader();
  const [data] = useRecoilState(profileData);

  React.useEffect(() => {
    updateHeader(data.name, null, null, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div className="flex flex-col my-[60px] p-4">
      <Overview />
      <div className="w-full my-4" />
      <OrdersOverview />
    </div>
  );
}

export default Home;
