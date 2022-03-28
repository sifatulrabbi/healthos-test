import React from "react";
import {useNavigate} from "react-router-dom";
import {useSetRecoilState} from "recoil";
import {setAuthUser} from "../atoms";

export function useLoginForm() {
  // eslint-disable-next-line no-unused-vars
  const setAuth = useSetRecoilState(setAuthUser);
  const mobileRef = React.useRef(null);
  const passwordRef = React.useRef(null);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const mobile = mobileRef.current.value;
    const password = passwordRef.current.value;

    setAuth({
      isAuthenticated: true,
      user: {mobile, password},
    });

    navigate("/");
  }

  return {
    mobileRef,
    passwordRef,
    handleSubmit,
  };
}
