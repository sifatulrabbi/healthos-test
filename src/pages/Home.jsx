import React from "react";
import {useRecoilState} from "recoil";
import {profileData} from "../atoms";
import {OrdersOverview, Overview} from "../features";
import {HeaderText} from "../components";
import {useUpdateHeader} from "../hooks";
import {Link} from "react-router-dom";
import {MdVerified} from "react-icons/md";
import {BsWhatsapp} from "react-icons/bs";

function Home() {
  const updateHeader = useUpdateHeader();
  const [data] = useRecoilState(profileData);

  React.useEffect(() => {
    updateHeader(
      <HeaderText name={data.name} icon={<MdVerified />} />,
      null,
      null,
      true,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div className="page-shrink">
      <div className="rounded-md bg-white w-[90vw] max-w-md shadow-sm mx-auto p-3 mb-4">
        <h6 className="text-base text-black mb-1">Share more to earn more</h6>
        <p className="text-gray-500 text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </p>
        <div className="flex justify-between items-center mt-6">
          <Link
            to="https://github.com/sifatulrabbi/healthos-test"
            className="text-sm text-orange-500 underline"
          >
            /healthos-test/
          </Link>
          <button className="bg-green-500 rounded-md py-1 px-3 text-white flex justify-center items-center gap-2">
            <BsWhatsapp /> Share
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
