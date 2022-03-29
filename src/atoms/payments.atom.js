import {atom, selector} from "recoil";
import {constants} from "../constants";
import {getReq} from "../utils";

// store expanded state for the payment section's in /account
export const expandPaymentSection = atom({
  key: "expand_payment_section",
  default: false,
});

export const paymentsState = atom({
  key: "payments_state",
  default: {
    url: constants.URLs.payments,
    data: [],
  },
});

// get payments data from db
export const getPaymentsSelector = selector({
  key: "get_payments_selector",
  get: async ({get}) => {
    const url = get(paymentsState).url;
    const payments = await getReq(url);
    return payments;
  },
});
