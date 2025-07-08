import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen  flex flex-col items-center px-6 py-12">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-4xl font-extrabold  mb-4">About Us</h1>
        <p className="text-lg  mb-8">
          At <span className="font-semibold text-amber-700">ShopNest</span>, we
          believe shopping should be more than just a transaction — it should be
          an experience.
        </p>

        <div className=" rounded-3xl shadow-xl p-8 space-y-6">
          <p className="text-xl italic ">
            "Style is a way to say who you are without having to speak."
          </p>
          <p className="text-xl italic ">
            "The best things in life are free. The second best are very
            expensive." – Coco Chanel
          </p>
          <p className="text-xl italic ">
            "Fashion is about something that comes from within you."
          </p>

          <div className="border-t border-gray-200 pt-6  text-base leading-relaxed">
            <p>
              From the trendiest wearables to timeless classics, our collection
              is curated with care and passion. We partner with artisans,
              designers, and ethical manufacturers to bring you products that
              you not only love — but feel good about buying.
            </p>
            <p className="mt-4">
              Whether you're shopping for yourself or searching for the perfect
              gift, <span className="text-amber-800 font-medium">ShopNest</span>{" "}
              is here to make every moment count.
            </p>
          </div>
        </div>

        <div className="mt-10 flex justify-center gap-4">
          <Link
            className="bg-amber-600 hover:bg-amber-700  px-6 py-2 rounded-full shadow-md transition duration-200"
            to="/"
          >
            Start Shopping
          </Link>
          <Link
            className="bg-gray-700 hover:bg-gray-800 git  px-6 py-2 rounded-full shadow-md transition duration-200"
            to="/contact"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
