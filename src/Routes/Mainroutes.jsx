import React from "react";
import { Route, Routes } from "react-router-dom";
import Product from "../Pages/Product";
import About from "../Pages/About";
import Signin from "../Pages/user/Signin";
import Signup from "../Pages/user/SignUp";
import UserSetting from "../Pages/user/UserSetting";
import CreateProduct from "../Pages/admin/CreateProduct";
import Contact from "../Pages/Contact";
import Cart from "../Pages/user/Cart";
import Auth from "./Auth";
import UnAuth from "./UnAuth";
import PagenotFound from "../Pages/user/PagenotFound";
import ProductDetails from "../Pages/user/ProductDetails";

const Mainroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/product-info/:id" element={<ProductDetails />} />
        <Route path="/contact" element={<Contact />} />


        {/* Auth Routes */}
        <Route
          path="/signup"
          element={
            <UnAuth>
              <Signup />
            </UnAuth>
          }
        />
        <Route
          path="/signin"
          element={
            <UnAuth>
              <Signin />
            </UnAuth>
          }
        />
        <Route
          path="settings"
          element={
            <Auth>
              <UserSetting />
            </Auth>
          }
        />
        <Route
          path="/create-product"
          element={
            <Auth>
              <CreateProduct />
            </Auth>
          }
        />
        <Route
          path="/cart"
          element={
            <Auth>
              <Cart />
            </Auth>
          }
        />

        {/* wildcard */}
        <Route path="*" element={<PagenotFound />} />
      </Routes>
    </div>
  );
};

export default Mainroutes;
