import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { asyncAddCartProducts } from "../store/actions/UserAction";

const ProductCard = ({ p }) => {
  const {user} = useSelector((state) => state.userReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // console.log(p);

  const addToCartHandler = async () => {
    if (!user) return navigate("/signin");
    try {
      await dispatch(asyncAddCartProducts(p, user));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      title={p.title}
      key={p.id}
      className="w-[22%] p-2 mb-2 hover:shadow-2xl shadow-md  rounded">
      <img className="h-[30vh] mx-auto block" src={p.image} alt="" />
      <h1 className="mt-3 text-2xl">{p.title.slice(0, 15)}...</h1>
      <p className="text-red-400 font-semibold">
        <span className="text-sm font-semibold  align-super leading-none">
          ₹
        </span>{" "}
        {p.price}
      </p>
      <p>{p.description.slice(0, 80)}...</p>
      <div className="mt-2 p-2 w-full flex justify-between items-center">
        <button
          onClick={addToCartHandler}
          className="bg-amber-300 px-2 py-1 rounded hover:bg-amber-400">
          Add to Cart
        </button>

        <Link
          className="text-red-400 text-sm hover:border-b "
          to={`/product-info/${p.id}`}>
          More Info
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
