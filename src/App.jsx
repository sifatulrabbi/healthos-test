import React from "react";
import {Routes, Route} from "react-router-dom";
import {RecoilRoot} from "recoil";
import {ProtectedRoutes, BottomBar, Header} from "./features";
import {
  Home,
  Account,
  Orders,
  Login,
  Register,
  Manage,
  Products,
} from "./pages";

function App() {
  return (
    <RecoilRoot>
      <Header />
      <BottomBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<ProtectedRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/manage" element={<Manage />} />
          <Route path="/products" element={<Products />} />
        </Route>
        <Route path="*" />
      </Routes>
    </RecoilRoot>
  );
}

export default App;
