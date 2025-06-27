import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../store/reducers/ProductSlice";
import { useDarkMode } from "../context/DarkModeContext";

const Navbar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userReducer);
  // console.log(user);
  const { darkMode, setDarkMode } = useDarkMode(); // for dark mode

  const activeStyle = "text-amber-700 font-bold hover:border-b ";
  const baseStyle = " transition font-semibold hover:border-b";

  return (
    <nav className="shadow-md px-20 py-3 flex items-center justify-between ">
      {/* ...rest of navbar... */}

      {/* Logo */}

      <NavLink to="/" className="flex items-center gap-2">
        <i className="ri-shopping-bag-4-fill text-3xl text-amber-600"></i>
        <span className="text-xl font-bold text-gray-800">ShopNEst</span>
      </NavLink>

      {/* Search Bar */}
      <div className="flex-1 mx-10 max-w-md">
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full pl-10 pr-4 py-2 border rounded-full shadow-sm focus:outline-none  "
            onChange={(e) => dispatch(setSearchTerm(e.target.value))}
          />
          <i className="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg"></i>
        </div>
      </div>

      <button onClick={() => setDarkMode((prev) => !prev)}>
        {darkMode ? "🌙" : "☀️"}
      </button>

      <div className="flex items-center gap-5">
        {/* Main Navigation Links */}
        <div className="flex gap-5">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeStyle : baseStyle)}>
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? activeStyle : baseStyle)}>
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? activeStyle : baseStyle)}>
            Contact Us
          </NavLink>
          {user?.isAdmin && (
            <NavLink
              to="/create-product"
              className={({ isActive }) =>
                isActive ? activeStyle : baseStyle
              }>
              Create Product
            </NavLink>
          )}
          {user && (
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive ? activeStyle : baseStyle
              }>
              <i className="ri-shopping-cart-line text-xl text-gray-700 relative">
                {user?.cart?.length > 0 && (
                  <sup className="absolute -top-3 -right-2 bg-amber-500 text-white text-xs px-1 rounded-full">
                    {user.cart.length}
                  </sup>
                )}
              </i>
            </NavLink>
          )}
        </div>
        {/* Right Side Section */}
        <div className="flex items-center gap-4">
          {!user ? (
            <NavLink
              to="/signin"
              className={({ isActive }) =>
                isActive ? activeStyle : baseStyle
              }>
              <i className="ri-user-line text-3xl"></i>
            </NavLink>
          ) : (
            <>
              {" "}
              <span className="text-green-700 text-xs font-medium">
                Hello<i className="ri-hand"></i>,<br /> {user.username}
              </span>
              <NavLink
                to="/settings"
                className={({ isActive }) =>
                  isActive ? activeStyle : baseStyle
                }>
                <i className="ri-user-settings-line text-2xl"></i>
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
