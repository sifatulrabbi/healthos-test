import {atom, selector} from "recoil";
import {constants} from "../constants";
import {getReq} from "../utils";

export const manageState = atom({
  key: "manage_state",
  default: {
    url: constants.URLs.customers,
    customers: [],
  },
});

export const customersData = selector({
  key: "manage_data",
  get: async ({get}) => {
    const url = get(manageState).url;
    const customers = await getReq(url);
    return customers;
  },
});
