import {atom, selector} from "recoil";
import {constants} from "../constants";
import {getReq} from "../utils";
import {keys} from "./keys";

export const ordersState = atom({
  key: keys.ORDERS_STATE,
  default: {
    url: constants.URLs.orders,
    orders: [],
  },
});

export const ordersData = selector({
  key: keys.ORDERS_DATA,
  get: async ({get}) => {
    const url = get(ordersState).url;
    const data = await getReq(url);
    return data;
  },
});

export const ordersOverviewData = selector({
  key: keys.ORDERS_OVERVIEW,
  get: async ({get}) => {
    const orders = get(ordersData);
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

export const orderSortType = atom({
  key: keys.ORDER_SORT_NAME,
  default: "all",
});

export const getSortedOrders = selector({
  key: "get_sorted_orders",
  get: ({get}) => {
    const orders = get(ordersOverviewData);
    const type = get(orderSortType);
    console.log(type);
    const sortedOrders =
      type === "all"
        ? orders
        : orders.filter((order) => {
            console.log(order.type, type);
            return order.type === type;
          });
    return sortedOrders;
  },
});
