import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  asyncDeleteProduct,
  asyncUpdateProduct,
} from "../../store/actions/ProductAction";
import { asyncAddCartProducts } from "../../store/actions/UserAction";
import ProductCard from "../../components/ProductCard";

const DetailProduct = () => {
  const { id } = useParams();
  const { products } = useSelector((state) => state.productReducer);
  const { user } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const product = products?.find((p) => p.id == id);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      image: product?.image,
      title: product?.title,
      price: product?.price,
      description: product?.description,
      category: product?.category,
      brand: product?.brand || "Generic Brand",
      model: product?.model || "2024 Edition",
      color: product?.color || "Assorted Colors",
      discount: product?.discount || "10%",
    },
  });

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

  // fallback values
  const brand = product?.brand || "Generic Brand";
  const model = product?.model || "2024 Edition";
  const color = product?.color || "Assorted Colors";
  const discount = product?.discount || "10%";

  return (
    <div className="h-screen overflow-y-auto bg-gray-50 px-4 py-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* product details ................ */}
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="h-68 flex ">
            <img
              src={product?.image}
              alt="product"
              className="mx-auto h-full object-contain"
            />
            <div className="flex flex-col justify-between mt-4 text-md ">
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

          <h1 className="text-2xl font-semibold mt-6">{product?.title}</h1>
          <p className="text-gray-600 mt-2">{product?.description}</p>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h2 className="text-3xl font-bold text-red-500">
              ₹ {product?.price}
            </h2>
            <div className="flex gap-4">
              <button
                onClick={addToCartHandler}
                className="bg-yellow-400 hover:bg-yellow-500 px-5 py-2 text-black font-medium rounded shadow"
              >
                Add to Cart
              </button>
              <button
                onClick={() => alert("Buy Now logic to be added")}
                className="bg-green-500 hover:bg-green-600 px-5 py-2 text-white font-medium rounded shadow"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Related Products for Normal Users */}
        {!user?.isAdmin && (
          <div className="bg-white p-2 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 lg:col-span-1 max-h-[85vh] overflow-y-auto">
            <h2 className="text-xl font-semibold text-zinc-800 border-b pb-4 mb-4">
              🛍️ Related Products
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
              {products
                .filter(
                  (p) =>
                    p.category === product?.category && p.id !== product?.id
                )
                .slice(0, 4)
                .map((p) => (
                  <div
                    title={p.title}
                    key={p.id}
                    className=" p-2 mb-2 hover:shadow-2xl shadow-md  rounded"
                  >
                    <img
                      className="h-[30vh] mx-auto block"
                      src={p.image}
                      alt=""
                    />
                    <h1 className="mt-3 text-2xl">{p.title.slice(0, 15)}...</h1>
                    <p className="text-red-400 font-semibold">
                      <span className="text-sm font-semibold  align-super leading-none">
                        ₹
                      </span>{" "}
                      {p.price}
                    </p>
                    <p>{p.description.slice(0, 80)}...</p>
                    <div className="mt-2 p-2 w-full flex justify-between items-center">
                      <button className="bg-amber-300 px-2 py-1 rounded hover:bg-amber-400">
                        Add to Cart
                      </button>

                      <Link
                        className="text-red-400 text-sm hover:border-b "
                        to={`/product-info/${p.id}`}
                      >
                        More Info
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* Admin Edit Form */}
        {user?.isAdmin && (
          <form
            onSubmit={handleSubmit(updateHandler)}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold mb-6 text-amber-600 border-b pb-2">
              ✒️ Edit Product
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* IMAGE */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Image URL
                </label>
                <input
                  {...register("image")}
                  placeholder="Image URL"
                  className="w-full border-0 border-b border-gray-400 focus:border-blue-500 focus:outline-none py-2"
                />
              </div>

              {/* TITLE */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Title
                </label>
                <input
                  {...register("title")}
                  placeholder="Title"
                  className="w-full border-0 border-b border-gray-400 focus:border-blue-500 focus:outline-none py-2"
                />
              </div>

              {/* PRICE */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Price
                </label>
                <input
                  {...register("price")}
                  type="number"
                  step="0.01"
                  placeholder="Price"
                  className="w-full border-0 border-b border-gray-400 focus:border-blue-500 focus:outline-none py-2"
                />
              </div>

              {/* CATEGORY */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <input
                  {...register("category")}
                  placeholder="Category"
                  className="w-full border-0 border-b border-gray-400 focus:border-blue-500 focus:outline-none py-2"
                />
              </div>

              {/* BRAND */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Brand
                </label>
                <input
                  {...register("brand")}
                  placeholder="Brand"
                  className="w-full border-0 border-b border-gray-400 focus:border-blue-500 focus:outline-none py-2"
                />
              </div>

              {/* MODEL */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Model
                </label>
                <input
                  {...register("model")}
                  placeholder="Model"
                  className="w-full border-0 border-b border-gray-400 focus:border-blue-500 focus:outline-none py-2"
                />
              </div>

              {/* COLOR */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Color
                </label>
                <input
                  {...register("color")}
                  placeholder="Color"
                  className="w-full border-0 border-b border-gray-400 focus:border-blue-500 focus:outline-none py-2"
                />
              </div>

              {/* DISCOUNT */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Discount
                </label>
                <input
                  {...register("discount")}
                  placeholder="Discount (e.g. 10%)"
                  className="w-full border-0 border-b border-gray-400 focus:border-blue-500 focus:outline-none py-2"
                />
              </div>

              {/* DESCRIPTION */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  {...register("description")}
                  placeholder="Description"
                  rows="3"
                  className="w-full border-0 border-b border-gray-400 focus:border-blue-500 focus:outline-none py-2"
                />
              </div>
            </div>

            <div className="mt-6 flex gap-4">
              <button
                type="submit"
                className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded font-semibold"
              >
                Update
              </button>
              <button
                type="button"
                onClick={deleteHandler}
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded font-semibold"
              >
                Delete
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default DetailProduct;
