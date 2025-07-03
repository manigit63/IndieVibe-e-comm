import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryFilter, setSortBy } from "../store/reducers/ProductSlice";
import Carousel from "../components/Carousel";
import CategoryFilter from "../components/CategoryFilter";
import SortDropdown from "../components/SortDropdown";
import FooterBanner from "./offers/FooterBanner";
import Product from "./Product";

const Home = () => {
  const dispatch = useDispatch();
  const { sortBy } = useSelector((state) => state.productReducer);

  return (
    <div className="flex flex-col min-h-screen">
    
      <Carousel />

      <div className="flex justify-around items-center mt-3">
        <CategoryFilter
          logic={(category) => dispatch(setCategoryFilter(category))}
        />
        <SortDropdown
          value={sortBy}
          logic={(val) => dispatch(setSortBy(val))}
        />
      </div>
     
      <Product />

      <FooterBanner />
    </div>
  );
};

export default Home;
