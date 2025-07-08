"use client";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../store/reducers/ProductSlice";
import { useDarkMode } from "../context/DarkModeContext";

const Navbar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userReducer);
  const { darkMode, setDarkMode } = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const activeStyle = "text-amber-700 font-bold  border-amber-700";
  const baseStyle = "nav-link";

  return (
    <nav className="shadow-md px-4 md:px-20 py-3 flex items-center justify-between relative z-50 ">
      {/* Logo */}
      <NavLink to="/" className="flex items-center gap-2">
        <i className="ri-shopping-bag-4-fill text-3xl text-amber-600"></i>
        <span className="text-xl font-bold hidden sm:inline">ShopNEst</span>
      </NavLink>

      {/* Search Bar */}
      <div className="flex-1 mx-4 md:mx-10 max-w-md">
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full pl-10 pr-4 py-2 border rounded-full shadow-sm focus:outline-none"
            onChange={(e) => dispatch(setSearchTerm(e.target.value))}
          />
          <i className="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-lg"></i>
        </div>
      </div>

      {/* Desktop Nav */}
      <div className="hidden lg:flex items-center gap-6">
        <button
          onClick={() => setDarkMode((prev) => !prev)}
          className="text-2xl">
          {darkMode ? "◑" : "◐"}
        </button>

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
                  <sup className="absolute -top-3 -right-2 bg-amber-500  text-xs px-1 rounded-full">
                    {user.cart.length}
                  </sup>
                )}
              </i>
            </NavLink>
          )}
        </div>

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
              <span className="text-green-700 text-xs font-medium hidden md:block">
                Hello <i className="ri-hand"></i>,<br /> {user.username}
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

      {/* Mobile Toggle */}
      <div className="lg:hidden flex items-center gap-3">
        <button
          onClick={() => setDarkMode((prev) => !prev)}
          className="text-2xl">
          {darkMode ? "◑" : "◐"}
        </button>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-3xl">
          <i className={isMenuOpen ? "ri-close-line" : "ri-menu-line"}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full right-4 w-64 backdrop-blur-lg bg-white/90 shadow-xl rounded-md p-5 z-50 flex flex-col gap-5 animate-fade-in transition-all duration-300 lg:hidden">
          <NavLink
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) => (isActive ? activeStyle : baseStyle)}>
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) => (isActive ? activeStyle : baseStyle)}>
            About
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) => (isActive ? activeStyle : baseStyle)}>
            Contact Us
          </NavLink>
          {user?.isAdmin && (
            <NavLink
              to="/create-product"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? activeStyle : baseStyle
              }>
              Create Product
            </NavLink>
          )}
          {user && (
            <NavLink
              to="/cart"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? activeStyle : baseStyle
              }>
              Cart
            </NavLink>
          )}
          {!user ? (
            <NavLink
              to="/signin"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? activeStyle : baseStyle
              }>
              <i className="ri-user-line text-2xl mr-2"></i> Sign In
            </NavLink>
          ) : (
            <>
              <div className="text-green-700 text-sm font-medium">
                Hello <i className="ri-hand"></i>, {user.username}
              </div>
              <NavLink
                to="/settings"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  isActive ? activeStyle : baseStyle
                }>
                <i className="ri-user-settings-line text-2xl mr-2"></i> Settings
              </NavLink>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
