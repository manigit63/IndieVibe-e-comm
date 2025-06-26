import React from "react";
import { Link } from "react-router-dom";

const PagenotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-4">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-gray-800 mb-2">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-600 mb-6">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-red-600 text-white rounded-full text-lg font-medium hover:bg-red-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default PagenotFound;
