import {atom, selector} from "recoil";
import {keys} from "./keys";
import {constants} from "../constants";
import {getReq} from "../utils";

export const profileState = atom({
  key: keys.PROFILE_STATE,
  default: {
    url: constants.URLs.account,
    profile: {
      name: "",
      online: false,
      overview: {
        orders: 0,
        total_sales: 0,
        store_views: 0,
        products_views: 0,
      },
    },
  },
});

export const profileData = selector({
  key: keys.PROFILE_DATA,
  get: async ({get}) => {
    const url = get(profileState).url;
    const data = await getReq(url);
    return data;
  },
  set: ({set}, newValue) => {
    return set(profileData, {
      url: constants.URLs.account,
      profile: newValue,
    });
  },
});

export const turnOffShop = selector({
  key: keys.TURN_OFF_SHOP,
  get: ({get}) => {
    const profile = get(profileState).profile;
    return profile.online;
  },
  set: ({set}, newValue) => {
    console.log(profileState);
    return set(profileState, {profile: {online: newValue}});
  },
});
