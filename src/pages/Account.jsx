import React from "react";
import {useUpdateHeader} from "../hooks";
import {HeaderText} from "../components";
import {ShopInfo, PaymentsSection} from "../features";

function Account() {
  const updateHeader = useUpdateHeader();

  React.useEffect(() => {
    updateHeader(<HeaderText name="Account" />);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="page-shrink gap-4">
      <ShopInfo />
      <PaymentsSection />
    </div>
  );
}

export default Account;
