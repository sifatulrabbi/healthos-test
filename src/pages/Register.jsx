import React from "react";
import {useUpdateHeader} from "../hooks";

function Register() {
  const updateHeader = useUpdateHeader();

  React.useEffect(() => {
    updateHeader("Register", "/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>Register</div>;
}

export default Register;
