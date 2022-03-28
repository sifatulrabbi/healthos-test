import React, {Suspense} from "react";
import {Routes, Route} from "react-router-dom";
import {ProtectedRoutes, BottomBar, Header, Loading} from "./features";
import {
  Home,
  Account,
  Orders,
  Login,
  Register,
  Manage,
  Products,
  Order,
} from "./pages";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Header />
      <BottomBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<ProtectedRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route
            path="/orders/*"
            element={
              <Routes>
                <Route path="/" element={<Orders />} />
                <Route path="/:id" element={<Order />} />
              </Routes>
            }
          ></Route>
          <Route path="/manage" element={<Manage />} />
          <Route path="/products" element={<Products />} />
        </Route>
        <Route path="*" element={<Login />} />
      </Routes>
    </Suspense>
  );
}

export default App;
