import {atom, selector} from "recoil";
import {keys} from "./keys";

export const authState = atom({
  key: keys.AUTH_STATE,
  default: {
    isAuthenticated: false,
    user: null,
    token: null,
  },
});

function getLocalUser() {
  const token = localStorage.getItem("auth_user");
  return token ? token : null;
}

function saveLocalUser(token) {
  localStorage.setItem("auth_user", token);
}

function removeLocalUser() {
  localStorage.removeItem("auth_user");
}

export const isAuthenticatedSelector = selector({
  key: keys.IS_AUTH_STATE,
  get: ({get}) => {
    const authStatus = get(authState).isAuthenticated;
    if (authStatus) return authStatus;
    const token = getLocalUser();
    if (token) return true;
    return false;
  },
});

// export const getUserSelector = selector({
//   key: "get_user_selector",
//   get: ({get}) => {
//     const token = getLocalUser();
//     if (!token) return null;
//     return {mobile: "01234567890"};
//   },
//   set: ({set}) => {
//     const token = getLocalUser();
//     if (token) {
//       return set(authState, {isAuthenticated: true, mobile: "01234567890"});
//     }
//     return set(authState, {isAuthenticated: false, user: null});
//   },
// });

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
