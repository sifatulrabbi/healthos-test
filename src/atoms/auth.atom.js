import {atom, selector} from "recoil";
import {keys} from "./keys";

export const authState = atom({
  key: keys.AUTH_STATE,
  default: {
    isAuthenticated: false,
    user: null,
  },
});

export const isAuthenticated = selector({
  key: keys.IS_AUTH_STATE,
  get: ({get}) => {
    const filter = get(authState);
    return filter.isAuthenticated;
  },
});
