import React from "react";
import {useRecoilState} from "recoil";
import {profileData} from "../atoms";
import {OrdersOverview, Overview} from "../features";
import {useUpdateHeader} from "../hooks";
import {Link} from "react-router-dom";
import {MdVerified} from "react-icons/md";

function Home() {
  const updateHeader = useUpdateHeader();
  const [data] = useRecoilState(profileData);

  React.useEffect(() => {
    updateHeader(
      <span className="flex justify-center items-center gap-2">
        {data.name} <MdVerified />
      </span>,
      null,
      null,
      true,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div className="flex flex-col my-[60px] p-4">
      <div className="rounded-md bg-white w-[90vw] max-w-md shadow-sm mx-auto p-3 mb-4">
        <h6 className="text-base text-black mb-1">Share more to earn more</h6>
        <p className="text-gray-500 text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </p>
        <div className="flex justify-between items-center mt-4">
          <Link
            to="https://github.com/sifatulrabbi/healthos-test"
            className="text-sm text-orange-500"
          >
            healthos-test
          </Link>
          <button className="bg-green-500 rounded-md py-1 px-3 text-white">
            Share
          </button>
        </div>
      </div>
      <Overview />
      <div className="w-full my-4" />
      <OrdersOverview />
    </div>
  );
}

export default Home;
