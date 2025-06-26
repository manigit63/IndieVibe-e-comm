import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showAddress, setShowAddress] = useState(false);

  const RegisterHandler = (data) => {
    console.log("User Submitted:", data);
    // Submit to redux or API here
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-10">
      <div className="max-w-3xl w-full">
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
          <div className=" text-white bg-black py-4 px-8">
            <h2 className="text-4xl font-bold text-center tracking-wide">
              Let’s Get You Started
            </h2>
            <p className="text-gray-300 text-center mt-2">
              Create your account in just a few steps
            </p>
          </div>

          <form
            onSubmit={handleSubmit(RegisterHandler)}
            className="p-8 lg:p-12 space-y-8">
            {/* PERSONAL INFO */}
            {!showAddress && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-black border-b border-gray-200 pb-2">
                  Step 1: Your Basic Details
                </h3>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    {...register("username", { required: true })}
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full p-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-black"
                  />
                  {errors.username && (
                    <p className="text-sm text-red-500 mt-1">
                      Name is required.
                    </p>
                  )}
                </div>

                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      {...register("email", { required: true })}
                      type="email"
                      placeholder="you@example.com"
                      className="w-full p-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-black"
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500 mt-1">
                        Email is required.
                      </p>
                    )}
                  </div>

                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mobile Number *
                    </label>
                    <input
                      {...register("mobile", { required: true })}
                      type="tel"
                      placeholder="+91"
                      className="w-full p-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-black"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password *
                  </label>
                  <input
                    {...register("password", { required: true })}
                    type="password"
                    placeholder="••••••••"
                    className="w-full p-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-black"
                  />
                </div>

                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Gender
                    </label>
                    <select
                      {...register("gender")}
                      className="w-full p-4 rounded-xl border-2 border-gray-200 bg-white focus:outline-none focus:border-black">
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date of Birth
                    </label>
                    <input
                      {...register("dateOfBirth")}
                      type="date"
                      className="w-full p-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-black"
                    />
                  </div>
                </div>

                {/* Next Button */}
                <div className="text-right">
                  <button
                    type="button"
                    onClick={() => setShowAddress(true)}
                    className="bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-all">
                    Next →
                  </button>
                </div>
              </div>
            )}

            {/* ADDRESS INFO */}
            {/* ADDRESS INFO */}
            {showAddress && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="text-xl font-bold text-black border-b border-gray-200 pb-2">
                  Step 2: Address Details
                </h3>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Street Address
                  </label>
                  <input
                    {...register("address")}
                    type="text"
                    placeholder="123 Main St"
                    className="w-full p-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-black"
                  />
                </div>

                {/* City & State */}
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City
                    </label>
                    <input
                      {...register("city")}
                      type="text"
                      placeholder="City"
                      className="w-full p-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-black"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      State
                    </label>
                    <input
                      {...register("state")}
                      type="text"
                      placeholder="State"
                      className="w-full p-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-black"
                    />
                  </div>
                </div>

                {/* Zip & Country */}
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ZIP Code
                    </label>
                    <input
                      {...register("zipCode")}
                      type="text"
                      placeholder="123456"
                      className="w-full p-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-black"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Country
                    </label>
                    <input
                      {...register("country")}
                      type="text"
                      placeholder="India"
                      className="w-full p-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-black"
                    />
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex items-center justify-between pt-6">
                  <button
                    type="button"
                    onClick={() => setShowAddress(false)}
                    className="bg-gray-200 text-gray-800 px-6 py-3 rounded-xl font-medium hover:bg-gray-300 transition">
                    ← Back
                  </button>

                  <button
                    type="submit"
                    className="bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-all">
                    Create My Account
                  </button>
                </div>
              </div>
            )}

            {/* Sign In Link */}
            <div className="text-center pt-4">
              <p className="text-gray-600">
                Already have an account?{" "}
                <Link
                  to="/signin"
                  className="underline text-gray-800 hover:text-black">
                  Sign in
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
