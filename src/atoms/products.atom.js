import {atom, selector} from "recoil";
import {constants} from "../constants";
import {getReq} from "../utils";

export const productsState = atom({
  key: "products_state",
  default: [
    {
      id: "product_two",
      name: "Sample product two",
      img: "",
      price: 50,
      active: true,
      stock: 6,
    },
  ],
});

export const productsData = selector({
  key: "products_data",
  get: async () => {
    const products = await getReq(constants.URLs.products);
    return products;
  },
});
