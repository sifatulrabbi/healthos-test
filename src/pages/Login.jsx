import React from "react";
import {LoginForm} from "../features";
import {Link} from "react-router-dom";

function Login() {
  return (
    <div className="w-full h-screen p-4 flex flex-col justify-center items-center">
      <LoginForm />
      <div className="mt-10 text-base text-gray-600">
        Don't have an account?{" "}
        <Link to="/register" className="text-blue-500">
          Register
        </Link>
      </div>
    </div>
  );
}

export default Login;
