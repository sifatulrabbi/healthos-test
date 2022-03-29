import {atom} from "recoil";

// store header component information
export const pageHeader = atom({
  key: "page_header",
  default: {
    title: "Login",
    prev: null,
    search: null,
    turn_off: false,
  },
});
