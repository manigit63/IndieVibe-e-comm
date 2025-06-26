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
import { useMemo } from "react";
import Carousel from "../components/Crousal";

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

  // Real-time search and filter logic.............................

  const filteredProducts = useMemo(() => {
    return [...products]
      .filter((p) => {
        const matchesTitle =
          typeof p.title === "string" &&
          p.title.toLowerCase().includes(searchTerm?.toLowerCase() || "");
        const matchesCategory =
          categoryFilter === "" || p.category === categoryFilter;
        return matchesTitle && matchesCategory;
      })
      .sort((a, b) => {
        if (sortBy === "lowToHigh") return a.price - b.price;
        if (sortBy === "highToLow") return b.price - a.price;
        if (sortBy === "newest") return b.id - a.id;
        return 0; // recommended
      });
  }, [products, searchTerm, categoryFilter, sortBy]);

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="flex flex-col min-h-screen ">
      <div className="relative z-0">
        <Carousel />
      </div>

      {/* filter  */}
      <div className="flex justify-around items-center mt-3">
        {/* 👇 Category based filter - btn  */}
        <div className="flex justify-center gap-4 text-gray-600  flex-wrap">
          {[
            "All",
            "women's clothing",
            "men's clothing",
            "electronics",
            "audio",
            "tv",
            "gaming",
          ].map((category) => (
            <button
              key={category}
              onClick={() =>
                dispatch(setCategoryFilter(category === "All" ? "" : category))
              }
              className="btn px-4 py-1 rounded-md border text-sm font-medium bg-white hover:bg-amber-300 transition">
              {category}
            </button>
          ))}
        </div>

        {/* 🔽 Sort Dropdown */}
        <div className="flex items-center gap-2">
          <label
            htmlFor="sortBy"
            className="text-sm text-gray-600 font-medium ">
            Sort by:
          </label>
          <select
            id="sortBy"
            onChange={(e) => dispatch(setSortBy(e.target.value))}
            value={sortBy}
            className="px-4 py-2 border border-gray-300 rounded-md text-sm bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-amber-300">
            <option value="recommended">Recommended</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
            <option value="newest">Newest First</option>
          </select>
        </div>
      </div>

      <div className="flex-1 relative z-10 -mt-3 ">
        <InfiniteScroll
          dataLength={filteredProducts.length}
          next={searchTerm ? () => {} : fetchProduct}
          hasMore={!searchTerm && hasMore}
          loader={<h4 className="text-center">Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }>
          <div className="flex p-10 flex-wrap mt-7 justify-center gap-7">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((p, i) => (
                <Suspense key={i} fallback={<h1>Loading...</h1>}>
                  <ProductCard p={p} />
                </Suspense>
              ))
            ) : (
              <div className="text-gray-500 text-xl mt-10 text-center w-full">
                No products found for "<strong>{searchTerm}</strong>"
              </div>
            )}
          </div>
        </InfiniteScroll>
      </div>

      {/* 👇 Footer at bottom */}
      <Footer />
    </div>
  );
};

export default Product;
