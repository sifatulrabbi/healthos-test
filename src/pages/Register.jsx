import React from "react";
import {RegisterForm} from "../features";
import {Link} from "react-router-dom";
import {useUpdateHeader} from "../hooks";
import {HeaderText} from "../components";

function Register() {
  const updateHeader = useUpdateHeader();

  React.useEffect(() => {
    updateHeader(<HeaderText name={"Register"} />);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full page-shrink h-screen items-center">
      <div className="mb-8 w-full flex flex-col justify-center items-center">
        <h3 className="text-3xl text-gray-800 mb-1">HealthOS Test</h3>
        <span className="text-gray-500">
          Author
          <span className="text-blue-500 font-bold">
            {" "}
            Md Sifatul Islam Rabbi
          </span>
        </span>
      </div>
      <RegisterForm />
      <div className="mt-10 text-base text-gray-600">
        <Link to="/login" className="text-blue-500">
          Login instead?
        </Link>
      </div>
    </div>
  );
}

export default Register;
