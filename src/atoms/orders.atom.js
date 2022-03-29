import {atom, selector} from "recoil";
import {constants} from "../constants";
import {getReq} from "../utils";

// atom for orders data
export const ordersState = atom({
  key: "orders_state",
  default: {
    url: constants.URLs.orders,
    orders: [],
  },
});

// get orders data from db
export const ordersData = selector({
  key: "orders_data",
  get: async ({get}) => {
    const url = get(ordersState).url;
    const data = await getReq(url);
    return data;
  },
});

// get filtered orders data to show in orders card
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

// not working!
// store orders sort type.
export const orderSortType = atom({
  key: "order_sort_type",
  default: "all",
});

// getting the sorted orders
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

// store order id to show in the /orders/:id page
export const orderIdState = atom({
  key: "order_id_state",
  default: {id: ""},
});

// get single order with to the stored order order id
export const getOrderSelector = selector({
  key: "get_order_selector",
  get: async ({get}) => {
    const id = get(orderIdState).id;
    const url = constants.URLs.orders + "/" + id.toString();
    const order = await getReq(url);
    return order;
  },
});
