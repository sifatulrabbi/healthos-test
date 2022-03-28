import React from "react";

export function useLoginForm() {
  const mobileRef = React.useRef(null);
  const passwordRef = React.useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    console.log({
      mobile: mobileRef.current.value,
      passwordRef: passwordRef.current.value,
    });
  }

  return {
    mobileRef,
    passwordRef,
    handleSubmit,
  };
}
