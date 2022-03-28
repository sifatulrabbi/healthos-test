import {atom} from "recoil";
import {keys} from "./keys";

export const pageHeader = atom({
  key: keys.PAGE_HEADER,
  default: {
    title: "Login",
    prev: "/login",
    search: "all",
  },
});
