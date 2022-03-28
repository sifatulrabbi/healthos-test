import {atom, selector} from "recoil";
import {constants} from "../constants";
import {getReq} from "../utils";

export const ordersState = atom({
  key: "orders_state",
  default: {
    url: constants.URLs.orders,
  },
});

export const ordersData = selector({
  key: "orders_data",
  get: async ({get}) => {
    const url = get(ordersState).url;
    const data = await getReq(url);
    return data;
  },
});
