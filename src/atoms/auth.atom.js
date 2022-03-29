import {atom, selector} from "recoil";

export const authState = atom({
  key: "auth_state",
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
  key: "is_authenticated_selector",
  get: ({get}) => {
    const authStatus = get(authState).isAuthenticated;
    if (authStatus) return authStatus;
    const token = getLocalUser();
    if (token) return true;
    return false;
  },
});

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
