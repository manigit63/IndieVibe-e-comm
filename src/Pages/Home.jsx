import React, { useEffect, useRef, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryFilter, setSortBy } from "../store/reducers/ProductSlice";

import Carousel from "../components/Carousel";
import CategoryFilter from "../components/CategoryFilter";
import SortDropdown from "../components/SortDropdown";
import FooterBanner from "./offers/FooterBanner";
import Product from "./Product";
import Banner from "./offers/Banner";

const Home = () => {
  const dispatch = useDispatch();
  const { sortBy, searchTerm } = useSelector((state) => state.productReducer);

  const productEndRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  const handleObserver = useCallback((entries) => {
    entries.forEach((entry) => {
      setIsSticky(!entry.isIntersecting);
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, { threshold: 0 });

    const target = productEndRef.current;
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
      observer.disconnect();
    };
  }, [handleObserver]);

  return (
    <div className="flex flex-col min-h-screen">
      {!searchTerm && (
        <>
          <Carousel />
          <Banner />
        </>
      )}

      {/* Sticky Filter Bar */}
      <div
        className={`transition-all duration-300 ${
          isSticky ? "sticky top-0 z-50 shadow " : ""
        }`}>
        <div className="flex flex-col sm:flex-row justify-around items-center py-1 gap-3">
          <CategoryFilter
            logic={(category) => dispatch(setCategoryFilter(category))}
          />
          <SortDropdown
            value={sortBy}
            logic={(val) => dispatch(setSortBy(val))}
          />
        </div>
      </div>

      <Product />

      {/* Bottom Marker for Sticky Logic */}
      <div id="productEnd" ref={productEndRef} className="h-[1px]" />

      <FooterBanner />
    </div>
  );
};

export default Home;
