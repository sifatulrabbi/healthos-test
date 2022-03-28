import {atom, selector} from "recoil";
import {constants} from "../constants";
import axios from "axios";

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
    try {
      const res = await axios.get(url);
      if (res.status !== 200) throw new Error("Unable to get");
      if (!res.data) throw new Error("No data found");

      return res.data;
    } catch (err) {
      console.log(err);
      return null;
    }
  },
});
