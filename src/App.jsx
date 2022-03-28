import React, {Suspense} from "react";
import {Routes, Route} from "react-router-dom";
import {RecoilRoot} from "recoil";
import {ProtectedRoutes, BottomBar, Header, Loading} from "./features";
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
    <Suspense fallback={<Loading />}>
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
    </Suspense>
  );
}

export default App;
