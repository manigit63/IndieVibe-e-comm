import { nanoid } from "nanoid";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { asyncSigninUser } from "../../store/actions/UserAction";

const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignin = (formData) => {
    formData.id = nanoid();
    dispatch(asyncSigninUser(formData));
    navigate("/");
  };

  return (
    <div className="min-h-[80vh] bg-white flex items-center justify-center px-4 py-10">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
          <div className="bg-black text-white py-8 px-8">
            <h2 className="text-3xl font-bold text-center">Welcome Back</h2>
            <p className="text-gray-300 text-center mt-2">
              Login to access your account
            </p>
          </div>

          <form
            onSubmit={handleSubmit(handleSignin)}
            className="p-8 lg:p-10 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                {...register("email", { required: true })}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-black"
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">Email is required.</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                {...register("password", { required: true })}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-black"
              />
              {errors.password && (
                <p className="text-sm text-red-500 mt-1">
                  Password is required.
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition">
              Login
            </button>

            <div className="text-center pt-2">
              <p className="text-sm text-gray-600">
                Don’t have an account?{" "}
                <Link
                  to="/signup"
                  className="underline text-gray-800 hover:text-black">
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
