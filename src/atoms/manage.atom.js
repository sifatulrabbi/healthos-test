import {atom, selector} from "recoil";
import {constants} from "../constants";
import {getReq} from "../utils";

export const manageState = atom({
  key: "manage_state",
  default: [{name: "Customer One", orders: 4}],
});

export const customersData = selector({
  key: "manage_data",
  get: async () => {
    const customers = await getReq(constants.URLs.customers);
    return customers;
  },
});
