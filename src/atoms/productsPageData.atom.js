import {atom} from "recoil";

export const productsPageState = atom({
  key: "products_page_state",
  default: {products: true},
});
