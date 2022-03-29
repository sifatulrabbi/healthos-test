import {atom, selector} from "recoil";
import {constants} from "../constants";
import {getReq} from "../utils";

// atom for manage page's data
export const manageState = atom({
  key: "manage_state",
  default: {
    url: constants.URLs.customers,
    customers: [],
  },
});

// selector to get customers data
export const customersData = selector({
  key: "manage_data",
  get: async ({get}) => {
    const url = get(manageState).url;
    const customers = await getReq(url);
    return customers;
  },
});
