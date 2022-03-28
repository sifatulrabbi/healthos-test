import React from "react";
import {useUpdateHeader} from "../hooks";

function Home() {
  const updateHeader = useUpdateHeader();

  React.useEffect(() => {
    updateHeader("Home", "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>Home</div>;
}

export default Home;
