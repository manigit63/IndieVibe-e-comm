import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { asyncAddCartProducts } from "../store/actions/UserAction";

const ProductCard = ({ p }) => {
 
  const { user } = useSelector((state) => state.userReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addToCartHandler = async () => {
    if (!user) return navigate("/signin");
    try {
      await dispatch(asyncAddCartProducts(p, user));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
      <div className="bg-white h-48 w-[90%] mx-auto flex items-center justify-center p-2">
        <img
          src={p.image}
          alt={p.title}
          className="max-h-full object-contain"
        />
      </div>

      <div className="px-4 pb-4">
        <h2 className="text-base text-zinc-700  font-semibold mt-2 truncate">
          {p.title.slice(0, 40)}
        </h2>

        <p className="text-red-500 font-semibold text-sm mt-1">₹{p.price}</p>

        <p className="text-gray-600 text-sm mt-1 line-clamp-2">
          {p.description}
        </p>

        <div className="mt-4 flex justify-between items-center">
          <button
            onClick={addToCartHandler}
            className="bg-amber-400 text-xs px-3 py-1 rounded hover:bg-amber-500 transition">
            Add to Cart
          </button>

          <Link
            to={`/product-info/${p.id}`}
            className="text-red-400 text-xs underline hover:text-red-500 transition">
            More Info
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
