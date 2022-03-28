import {atom, selector} from "recoil";
import {keys} from "./keys";

export const authState = atom({
  key: keys.AUTH_STATE,
  default: {
    isAuthenticated: false,
    user: null,
  },
});

function getLocalUser() {
  const savedUser = localStorage.getItem("auth_user");
  let user = {};
  if (savedUser) user = JSON.parse(savedUser);
  return user;
}

function saveLocalUser(value) {
  localStorage.setItem(
    "auth_user",
    JSON.stringify({mobile: value.user, password: value.password}),
  );
}

export const isAuthenticatedSelector = selector({
  key: keys.IS_AUTH_STATE,
  get: ({get}) => {
    const user = getLocalUser();
    if (!user) return get(authState).isAuthenticated;
    return true;
  },
  set: ({set}) => {
    const user = getLocalUser();
    if (user) return set(authState, {isAuthenticated: true});
    return set(authState, {isAuthenticated: false});
  },
});

export const getUserSelector = selector({
  key: "get_user_selector",
  get: ({get}) => {
    const user = getLocalUser();
    if (!user) return get(authState).user;
    return user;
  },
  set: ({set}) => {
    const user = getLocalUser();
    if (user) return set(authState, {user});
    return set(authState, {user: null});
  },
});

export const setAuthUser = selector({
  key: "set_auth_user",
  get: ({get}) => {
    const state = get(authState);
    return state;
  },
  set: ({set}, newValue) => {
    saveLocalUser(newValue);
    return set(authState, newValue);
  },
});
