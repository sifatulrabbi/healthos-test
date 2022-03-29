import {atom} from "recoil";

export const pageHeader = atom({
  key: "page_header",
  default: {
    title: "Login",
    prev: "/login",
    search: null,
    turn_off: false,
  },
});
