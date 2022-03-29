import React from "react";
import {useNavigate} from "react-router-dom";
import {useSetRecoilState} from "recoil";
import {setAuthUser} from "../atoms";
import {constants} from "../constants";
import {getReq} from "../utils";

export function useLoginForm() {
  // eslint-disable-next-line no-unused-vars
  const setAuth = useSetRecoilState(setAuthUser);
  const mobileRef = React.useRef(null);
  const passwordRef = React.useRef(null);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const mobile = mobileRef.current.value;
    const password = passwordRef.current.value;

    const token = await getReq(constants.URLs.jwtToken);

    setAuth({
      isAuthenticated: true,
      user: {mobile, password},
      token: token,
    });

    navigate("/");
  }

  return {
    mobileRef,
    passwordRef,
    handleSubmit,
  };
}
