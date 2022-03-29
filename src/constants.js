const apiUrl = "https://my-json-server.typicode.com/sifatulrabbi/healthos-test";

export const constants = {
  SEARCH_TYPES: {
    all: "all",
    customers: "customers",
    orders: "orders",
  },
  URLs: {
    apiUrl,
    orders: apiUrl + "/orders",
    products: apiUrl + "/products",
    payments: apiUrl + "/payments",
    customers: apiUrl + "/customers",
    account: apiUrl + "/account",
    jwtToken: apiUrl + "/fake_jwt_token",
  },
};
