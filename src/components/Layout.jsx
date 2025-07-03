import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "../Pages/user/Footer";

const Layout = () => {
  const location = useLocation();
  const hideLayoutPaths = ["/signin", "/signup"];

  const shouldHideLayout = hideLayoutPaths.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      {!shouldHideLayout && <Navbar />}
      <main className="flex-1">
        <Outlet />
      </main>
      {!shouldHideLayout && <Footer />}
    </div>
  );
};

export default Layout;
