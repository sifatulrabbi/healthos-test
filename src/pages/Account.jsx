import React from "react";
import {useUpdateHeader} from "../hooks";

function Account() {
  const updateHeader = useUpdateHeader();

  React.useEffect(() => {
    updateHeader("Account", "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>Account</div>;
}

export default Account;
