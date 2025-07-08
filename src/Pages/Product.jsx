import React, { lazy, Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadlazyproducts } from "../store/reducers/ProductSlice";
import axiosApi from "../api/Config";
import InfiniteScroll from "react-infinite-scroll-component";
import useFilteredProducts from "../customHooks/useFilteredProducts";
import ScrollEndoffer from "./offers/ScrollEndoffer";

const ProductCard = lazy(() => import("../components/ProductCard"));

const Product = () => {
  const dispatch = useDispatch();
  const { products, searchTerm, categoryFilter, sortBy } = useSelector(
    (state) => state.productReducer
  );
  const [hasMore, setHasMore] = useState(true);

  const fetchProduct = async () => {
    try {
      const start = products.length;
      const limit = 6;

      const { data } = await axiosApi.get(
        `/products?_limit=${limit}&_start=${start}`
      );

      if (data.length === 0) {
        setHasMore(false);
      } else {
        dispatch(loadlazyproducts(data));
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

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
    <div className="flex-1 relative z-10 -mt-3 w-full">
      <InfiniteScroll
        dataLength={filteredProducts.length}
        next={searchTerm ? () => {} : fetchProduct}
        hasMore={!searchTerm && hasMore}
        loader={<h4 className="text-center">Loading...</h4>}
        endMessage={<ScrollEndoffer />}
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-5 md:gap-7 p-2 sm:p-4 md:p-6 mt-4 sm:mt-7 w-full">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((p, i) => (
              <Suspense key={i} fallback={<h1>Loading...</h1>}>
                <ProductCard p={p} />
              </Suspense>
            ))
          ) : (
            <div className="text-xs sm:text-base mt-6 sm:mt-10 text-center w-full col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-5">
              No products found for "<strong>{searchTerm}</strong>"
            </div>
          )}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Product;
