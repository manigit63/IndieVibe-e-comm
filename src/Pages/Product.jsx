import React, { lazy, Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadlazyproducts } from "../store/reducers/ProductSlice";
import axiosApi from "../api/Config";
import InfiniteScroll from "react-infinite-scroll-component";
import useFilteredProducts from "../customHooks/useFilteredProducts";
import ScrollEndoffer from "./offers/ScrollEndoffer";
import CategoryFilter from "../components/CategoryFilter";
import SortDropdown from "../components/SortDropdown";
import Banner from "./offers/Banner";

const ProductCard = lazy(() => import("../components/ProductCard"));

const Product = () => {
  const dispatch = useDispatch();
  const { products, searchTerm, categoryFilter, sortBy } = useSelector(
    (state) => state.productReducer
  );
  const [hasMore, setHasMore] = useState(true);

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
    <div className="flex-1 relative z-10 -mt-3">
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
            <div className="text-xl mt-10 text-center w-full">
              No products found for "<strong>{searchTerm}</strong>"
            </div>
          )}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Product;
