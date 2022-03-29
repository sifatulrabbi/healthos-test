import {atom, selector} from "recoil";
import {getLocalUser, saveLocalUser, removeLocalUser} from "../utils";

// main authState atom
export const authState = atom({
  key: "auth_state",
  default: {
    isAuthenticated: false,
    user: null,
    token: null,
  },
});

// get the isAuthenticated status
export const isAuthenticatedSelector = selector({
  key: "is_authenticated_selector",
  get: ({get}) => {
    const authStatus = get(authState).isAuthenticated;
    if (authStatus) return authStatus;
    const token = getLocalUser();
    if (token) return true;
    return false;
  },
});

// set the auth user and save jwt token to the local storage
export const setAuthUser = selector({
  key: "set_auth_user",
  get: ({get}) => {
    const state = get(authState);
    return state;
  },
  set: ({set}, newValue) => {
    if (!newValue.token) {
      return set(authState, {isAuthenticated: false, user: null});
    }
    saveLocalUser(newValue.token);
    return set(authState, {isAuthenticated: true, user: {newValue}});
  },
});

// remove auth user from the auth atom
export const removeAuthUser = selector({
  key: "remove_auth_user",
  get: ({get}) => {
    const state = get(authState);
    return state;
  },
  set: ({set}) => {
    removeLocalUser();
    return set(authState, {isAuthenticated: false, user: null});
  },
});
