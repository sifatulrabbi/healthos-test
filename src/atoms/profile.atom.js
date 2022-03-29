import {atom, selector} from "recoil";
import {constants} from "../constants";
import {getReq} from "../utils";

export const profileState = atom({
  key: "profile_state",
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

// get profile data from the db
export const profileData = selector({
  key: "profile_data",
  get: async ({get}) => {
    const url = get(profileState).url;
    const data = await getReq(url);
    return data;
  },
});
