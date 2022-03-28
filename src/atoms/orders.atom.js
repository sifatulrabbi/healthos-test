import {atom, selector} from "recoil";
import {constants} from "../constants";
import {getReq} from "../utils";
import {keys} from "./keys";

export const ordersState = atom({
  key: keys.ORDERS_STATE,
  default: {
    url: constants.URLs.orders,
    data: [
      {
        id: "47014",
        o_at: "Today, 10:13 PM",
        quantity: 4,
        products: [
          {
            id: "product_two",
            name: "Sample product two",
            img: "",
            price: 50,
            quantity: 2,
          },
        ],
        customer: {
          name: "Customer Name",
          address: "House-no, City, State",
          mobile: "01000000001",
        },
        pin_code: 414716,
        type: "COD",
        payments: {
          item: 0,
          delivery: 0,
          grand: 0,
        },
        status: "done",
      },
    ],
  },
});

export const ordersData = selector({
  key: keys.ORDERS_DATA,
  get: async ({get}) => {
    const url = get(ordersState).url;
    const data = await getReq(url);
    return data;
  },
  set: ({set}, newData) => {
    return set(ordersState, newData);
  },
});

// order_id, amount, quantity, recent, type, status, o_at
export const ordersOverviewData = selector({
  key: keys.ORDERS_OVERVIEW,
  get: async ({get}) => {
    const url = get(ordersState).url;
    const orders = await getReq(url);
    const arr = [];
    if (orders) {
      orders.forEach((order) => {
        const {
          id,
          payments: {grand},
          quantity,
          recent,
          type,
          status,
          o_at,
        } = order;
        arr.push({id, amount: grand, quantity, recent, type, status, o_at});
      });
    }
    return arr;
  },
});
