import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  asyncDeleteProduct,
  asyncUpdateProduct,
} from "../../store/actions/ProductAction";
import { asyncAddCartProducts } from "../../store/actions/UserAction";
import ScrollEndoffer from "../offers/ScrollEndoffer";
import DiscountOffer from "../offers/DiscountOffer";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useSelector((state) => state.productReducer);
  const { user } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  const product = products?.find((p) => p.id == id);

  useEffect(() => {
    if (product) {
      reset({
        image: product.image,
        title: product.title,
        price: product.price,
        description: product.description,
        category: product.category,
        brand: product.brand || "Generic Brand",
        model: product.model || "2024 Edition",
        color: product.color || "Assorted Colors",
        discount: product.discount || "10%",
      });
    }
  }, [product, reset]);

  const deleteHandler = async () => {
    try {
      await dispatch(asyncDeleteProduct(id));
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const updateHandler = async (updatedData) => {
    try {
      await dispatch(asyncUpdateProduct(id, updatedData));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const addToCartHandler = async () => {
    if (!user) return navigate("/signin");
    try {
      await dispatch(asyncAddCartProducts(product, user));
    } catch (err) {
      console.log(err);
    }
  };

  const brand = product?.brand || "Generic Brand";
  const model = product?.model || "2024 Edition";
  const color = product?.color || "Assorted Colors";
  const discount = product?.discount || "10%";

  return (
    <div className="px-2 sm:px-4 py-4">
      <DiscountOffer />

      <div className="max-w-7xl mt-5 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 items-start">
        {/* ✅ Product Details */}
        <div className="border border-amber-100 rounded-2xl shadow-xl p-2 overflow-hidden">
          <div className="p-4 sm:p-6 md:p-8 transition-transform duration-300 hover:scale-105">
            <div className="flex flex-col sm:flex-row gap-6">
              <img
                src={product?.image || "/fallback.jpg"}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/fallback.jpg";
                }}
                alt="product"
                className="w-full sm:w-1/2 object-contain shadow p-2 rounded max-h-[300px]"
              />

              <div className="flex-1 flex flex-col justify-between text-sm sm:text-base py-2">
                <p>
                  <strong>Brand:</strong> {brand}
                </p>
                <p>
                  <strong>Model:</strong> {model}
                </p>
                <p>
                  <strong>Color:</strong> {color}
                </p>
                <p>
                  <strong>Category:</strong> {product?.category}
                </p>
                <p>
                  <strong>Discount:</strong> {discount}
                </p>
              </div>
            </div>

            <h1 className="text-xl sm:text-2xl font-semibold mt-6">
              {product?.title}
            </h1>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              {product?.description}
            </p>

            <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-red-500">
                ₹ {product?.price}
              </h2>
              <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                <button
                  onClick={addToCartHandler}
                  className="bg-yellow-400 hover:bg-yellow-500 px-5 py-2 text-black font-medium rounded shadow w-full sm:w-auto">
                  Add to Cart
                </button>
                <button
                  onClick={() => alert("Buy Now logic to be added")}
                  className="bg-green-500 hover:bg-green-600 px-5 py-2 text-white font-medium rounded shadow w-full sm:w-auto">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Related Products */}
        {!user?.isAdmin && (
          <div className="p-2 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 max-h-[90vh] overflow-y-auto">
            <h2 className="text-lg sm:text-xl font-semibold border-b pb-4 mb-4">
              🛍️ Related Products
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-2">
              {products
                .filter(
                  (p) =>
                    p.category === product?.category && p.id !== product?.id
                )
                .slice(0, 6)
                .map((p) => (
                  <div
                    key={p.id}
                    className="p-2 mb-2 hover:shadow-2xl shadow-md rounded">
                    <img
                      className="h-[30vh] mx-auto block object-contain"
                      src={p.image}
                      alt=""
                    />
                    <h1 className="mt-3 text-lg sm:text-xl">
                      {p.title.slice(0, 15)}...
                    </h1>
                    <p className="text-red-400 font-semibold">₹ {p.price}</p>
                    <p className="text-sm">{p.description.slice(0, 80)}...</p>
                    <div className="mt-2 p-2 w-full flex justify-between items-center">
                      <button className="bg-amber-300 px-2 py-1 rounded hover:bg-amber-400">
                        Add to Cart
                      </button>
                      <Link
                        to={`/product-info/${p.id}`}
                        className="text-red-400 text-sm hover:border-b">
                        More Info
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* ✅ Admin Edit Form */}
        {user?.isAdmin && (
          <form
            onSubmit={handleSubmit(updateHandler)}
            className="border border-amber-100 p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-amber-600 border-b pb-2">
              ✒️ Edit Product
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                { label: "Image URL", name: "image" },
                { label: "Title", name: "title" },
                { label: "Price", name: "price", type: "number" },
                { label: "Category", name: "category" },
                { label: "Brand", name: "brand" },
                { label: "Model", name: "model" },
                { label: "Color", name: "color" },
                { label: "Discount", name: "discount" },
              ].map(({ label, name, type = "text" }) => (
                <div key={name}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {label}
                  </label>
                  <input
                    {...register(name)}
                    type={type}
                    placeholder={label}
                    className="w-full border-0 border-b border-gray-400 focus:border-blue-500 focus:outline-none py-2 text-sm"
                  />
                </div>
              ))}

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  {...register("description")}
                  rows="3"
                  placeholder="Description"
                  className="w-full border-0 border-b border-gray-400 focus:border-blue-500 focus:outline-none py-2 text-sm"
                />
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded font-semibold w-full sm:w-auto">
                Update
              </button>
              <button
                type="button"
                onClick={deleteHandler}
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded font-semibold w-full sm:w-auto">
                Delete
              </button>
            </div>
          </form>
        )}
      </div>

      <ScrollEndoffer />
    </div>
  );
};

export default ProductDetails;
