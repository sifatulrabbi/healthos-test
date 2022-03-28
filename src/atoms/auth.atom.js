import {atom, selector} from "recoil";

export const authState = atom({
  key: "auth_atom",
  default: {
    isAuthenticated: false,
    user: null,
  },
});

export const isAuthenticated = selector({
  key: "isAuthenticated",
  get: ({get}) => {
    const filter = get(authState);
    return filter.isAuthenticated;
  },
});
