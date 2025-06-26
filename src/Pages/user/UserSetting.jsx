import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncDeleteUser,
  asyncLogoutUser,
  asyncUpdateUser,
} from "../../store/actions/UserAction";
import { useNavigate } from "react-router-dom";

const UserSetting = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const { user } = useSelector((state) => state.userReducer);

  const { register, handleSubmit, reset } = useForm();

//refresh krne pr default value rhegi................
  useEffect(() => {
    if (user) {
      reset({
        username: user.username,
        email: user.email,
        password: user.password,
      });
    }
  }, [user, reset]);

  const updateHandler = (updatedData) => {
    // console.log("Updated User:", updatedData);
    dispatch(asyncUpdateUser(user.id, updatedData));
    Navigate("/");
  };

  const handleLogout = () => {
    dispatch(asyncLogoutUser(user.id));
    Navigate("/");
  };
  const handleDelete = () => {
    dispatch(asyncDeleteUser(user.id));
    Navigate("/");
  };

  return (
    <div className="flex justify-center items-center min-h-[90vh] bg-gray-100">
      <form
        onSubmit={handleSubmit(updateHandler)}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md space-y-5"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          User Settings
        </h2>

        <input
          type="text"
          placeholder="Username"
          {...register("username")}
          className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="email"
          placeholder="Email"
          {...register("email")}
          className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="password"
          placeholder="Password"
          {...register("password")}
          className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <div className="flex justify-between gap-3 pt-2">
          <button
            type="submit"
            className="w-full bg-yellow-600 text-white py-2 rounded-xl hover:bg-yellow-700 transition"
          >
            Update
          </button>

          <button
            type="button"
            className="w-full bg-gray-500 text-white py-2 rounded-xl hover:bg-gray-600 transition"
            onClick={handleLogout}
          >
            Logout
          </button>
          <button
            type="button"
            className="w-full bg-red-500 text-white py-2 rounded-xl hover:bg-red-600 transition"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserSetting;
