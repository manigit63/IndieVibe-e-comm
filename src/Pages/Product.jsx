import React, { lazy, Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadlazyproducts,
  setCategoryFilter,
  setSortBy,
} from "../store/reducers/ProductSlice";
import axiosApi from "../api/Config";
import InfiniteScroll from "react-infinite-scroll-component";
import Footer from "./user/Footer";
import Carousel from "../components/Carousel";
import ScrollEndoffer from "./offers/ScrollEndoffer";
import useFilteredProducts from "../customHooks/useFilteredProducts";
import CategoryFilter from "../components/CategoryFilter";
import SortDropdown from "../components/SortDropdown";

const ProductCard = lazy(() => import("../components/ProductCard"));

const Product = () => {
  const dispatch = useDispatch();
  const { products, searchTerm, categoryFilter, sortBy } = useSelector(
    (state) => state.productReducer
  );
  const [hasMore, setHasMore] = useState(true);

  // Fetch more products on scroll
  const fetchProduct = async () => {
    try {
      const { data } = await axiosApi.get(
        `/products?_limit=6&_start=${products.length}`
      );
      if (data.length === 0) {
        setHasMore(false);
      } else {
        dispatch(loadlazyproducts(data));
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Real-time search and filter sort.............................
  const filteredProducts = useFilteredProducts(
    products,
    searchTerm,
    categoryFilter,
    sortBy
  );

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="flex flex-col min-h-screen ">
      {/* carousel */}
      <div className="relative z-0">
        <Carousel />
      </div>

      {/* filter  */}
      <div className="flex justify-around items-center mt-3">
        {/* 👇 Category based filter - btn  */}
        <CategoryFilter
          logic={(category) => dispatch(setCategoryFilter(category))}
        />

        {/* 🔽 Sort Dropdown */}
        <SortDropdown
          value={sortBy}
          logic={(val) => dispatch(setSortBy(val))}
        />
      </div>

      {/* infinite scroll render */}
      <div className="flex-1 relative z-10 -mt-3 ">
        <InfiniteScroll
          dataLength={filteredProducts.length}
          next={searchTerm ? () => {} : fetchProduct}
          hasMore={!searchTerm && hasMore}
          loader={<h4 className="text-center">Loading...</h4>}
          endMessage={<ScrollEndoffer />}>
          <div className="flex p-10 flex-wrap mt-7 justify-center gap-7">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((p, i) => (
                <Suspense key={i} fallback={<h1>Loading...</h1>}>
                  <ProductCard p={p} />
                </Suspense>
              ))
            ) : (
              <div className=" text-xl mt-10 text-center w-full">
                No products found for "<strong>{searchTerm}</strong>"
              </div>
            )}
          </div>
        </InfiniteScroll>
      </div>

      {/*footer banner */}
      <div className="flex w-full h-[40vh]">
        <img
          src="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2025/6/24/dff9e0c5-2617-47bb-8153-f0331bd095301750776844057-Clearance-Sale-Desktop-KV_01.gif"
          alt=""
          className="w-1/2 "
        />
        <img
          src="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2025/6/24/c4894bd7-e62d-461c-8d64-ec7910e0e4dc1750776844032-Clearance-Sale-Desktop-KV_02.gif"
          alt=""
          className="w-1/2 bg-transparent"
        />
      </div>

      {/* 👇 Footer at bottom */}
      <Footer />
    </div>
  );
};

export default Product;
