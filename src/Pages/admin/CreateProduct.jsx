import { nanoid } from "nanoid";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { asyncCreateProduct } from "../../store/actions/ProductAction";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  const CreateProductHandler = (CreatedProduct) => {
    CreatedProduct.id = nanoid();
    dispatch(asyncCreateProduct(CreatedProduct));
    reset();
    navigate("/");
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6  rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-8">
        🛠️ Create New Product
      </h2>

      <form
        onSubmit={handleSubmit(CreateProductHandler)}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Image */}
        <div className="p-4  rounded-xl shadow-inner">
          <label className="block text-sm font-semibold  mb-1">
            🖼️ Image URL
          </label>
          <input
            type="url"
            {...register("image")}
            placeholder="Product image URL"
            className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-amber-400  outline-none"
          />
        </div>

        {/* Title */}
        <div className="p-4 rounded-xl shadow-inner">
          <label className="block text-sm font-semibold  mb-1">
            📝 Product Name
          </label>
          <input
            type="text"
            {...register("title")}
            placeholder="Product title"
            className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-amber-400 outline-none"
          />
        </div>

        {/* Price */}
        <div className="p-4  rounded-xl shadow-inner">
          <label className="block text-sm font-semibold mb-1">💰 Price</label>
          <input
            type="number"
            step="0.01"
            {...register("price")}
            placeholder="0.00"
            className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-amber-400 outline-none"
          />
        </div>

        {/* Category */}
        <div className="p-4  rounded-xl shadow-inner">
          <label className="block text-sm font-semibold  mb-1">
            🧾 Category
          </label>
          <input
            type="text"
            {...register("category")}
            placeholder="e.g. women's clothing"
            className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-amber-400 outline-none"
          />
        </div>

        {/* Brand */}
        <div className="p-4 rounded-xl shadow-inner">
          <label className="block text-sm font-semibold  mb-1">🏷️ Brand</label>
          <input
            type="text"
            {...register("brand")}
            placeholder="Generic Brand"
            className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-amber-400 outline-none"
          />
        </div>

        {/* Model */}
        <div className="p-4  rounded-xl shadow-inner">
          <label className="block text-sm font-semibold  mb-1">🧪 Model</label>
          <input
            type="text"
            {...register("model")}
            placeholder="2024 Edition"
            className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-amber-400 outline-none"
          />
        </div>

        {/* Color */}
        <div className="p-4  rounded-xl shadow-inner">
          <label className="block text-sm font-semibold  mb-1">🎨 Color</label>
          <input
            type="text"
            {...register("color")}
            placeholder="Assorted Colors"
            className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-amber-400 outline-none"
          />
        </div>

        {/* Discount */}
        <div className="p-4  rounded-xl shadow-inner">
          <label className="block text-sm font-semibold mb-1">
            🎁 Discount
          </label>
          <input
            type="text"
            {...register("discount")}
            placeholder="e.g. 10%"
            className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-amber-400 outline-none"
          />
        </div>

        {/* Description - full width */}
        <div className="md:col-span-2 p-4 rounded-xl shadow-inner">
          <label className="block text-sm font-semibold mb-1">
            🗒️ Description
          </label>
          <textarea
            {...register("description")}
            placeholder="Enter product description..."
            className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-amber-400 outline-none resize-none min-h-[120px]"
          />
        </div>

        {/* Submit Button - full width */}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-amber-50 text-teal-500 py-3 px-6 rounded-xl hover:shadow-2xl transition duration-300 font-semibold"
          >
            🚀 Create Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;
