import React from "react";
import {useUpdateHeader} from "../hooks";

function Manage() {
  const updateHeader = useUpdateHeader();

  React.useEffect(() => {
    updateHeader("Manage", "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>Manage</div>;
}

export default Manage;
