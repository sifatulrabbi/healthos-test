import {atom, selector} from "recoil";
import {constants} from "../constants";
import {getReq} from "../utils";

export const productsState = atom({
  key: "products_state",
  default: [],
});

// get products data from db
export const productsData = selector({
  key: "products_data",
  get: async () => {
    const products = await getReq(constants.URLs.products);
    return products;
  },
});
