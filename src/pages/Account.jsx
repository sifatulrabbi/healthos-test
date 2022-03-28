import React from "react";
import {useUpdateHeader} from "../hooks";
import {HeaderText} from "../components";

function Account() {
  const updateHeader = useUpdateHeader();

  React.useEffect(() => {
    updateHeader(<HeaderText name="Account" />);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div className="page-shrink">Account</div>;
}

export default Account;
