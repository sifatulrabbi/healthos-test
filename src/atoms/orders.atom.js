import {atom, selector} from "recoil";
import {constants} from "../constants";
import {getReq} from "../utils";

export const ordersState = atom({
  key: "orders_state",
  default: {
    url: constants.URLs.orders,
    orders: [],
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

export const ordersOverviewData = selector({
  key: "orders_overview_data",
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
  key: "order_sort_type",
  default: "all",
});

export const getSortedOrders = selector({
  key: "get_sorted_orders",
  get: ({get}) => {
    const orders = get(ordersOverviewData);
    const type = get(orderSortType);
    const sortedOrders =
      type === "all"
        ? orders
        : orders.filter((order) => {
            return order.type === type;
          });
    return sortedOrders;
  },
});

export const orderIdState = atom({
  key: "order_id_state",
  default: {id: ""},
});

export const getOrderSelector = selector({
  key: "get_order_selector",
  get: async ({get}) => {
    const id = get(orderIdState).id;
    const url = constants.URLs.orders + "/" + id.toString();
    const order = await getReq(url);
    return order;
  },
});
