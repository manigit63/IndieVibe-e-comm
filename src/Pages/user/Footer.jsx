import React from "react";

const Footer = () => {
  return (
    <footer className=" pt-10 mt-10 animate-fadeInUp">
      {/* Top Links Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-6 pb-10 border-b border-gray-600">
        {/* Section 1 */}
        <div>
          <h3 className="font-bold mb-4">Get to Know Us</h3>
          <ul className="space-y-2 text-sm ">
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Press Releases</a></li>
            <li><a href="#" className="hover:underline">ShopNest Science</a></li>
          </ul>
        </div>

        {/* Section 2 */}
        <div>
          <h3 className="font-bold mb-4">Connect with Us</h3>
          <ul className="space-y-2 text-sm ">
            <li><a href="#" className="hover:underline">Facebook</a></li>
            <li><a href="#" className="hover:underline">Twitter</a></li>
            <li><a href="#" className="hover:underline">Instagram</a></li>
            <li><a href="#" className="hover:underline">YouTube</a></li>
          </ul>
        </div>

        {/* Section 3 */}
        <div>
          <h3 className="font-bold mb-4">Make Money with Us</h3>
          <ul className="space-y-2 text-sm ">
            <li><a href="#" className="hover:underline">Sell on ShopNest</a></li>
            <li><a href="#" className="hover:underline">Affiliate Program</a></li>
            <li><a href="#" className="hover:underline">Advertise Your Products</a></li>
            <li><a href="#" className="hover:underline">Become a Seller</a></li>
          </ul>
        </div>

        {/* Section 4 */}
        <div>
          <h3 className="font-bold mb-4">Let Us Help You</h3>
          <ul className="space-y-2 text-sm ">
            <li><a href="/contact" className="hover:underline">Your Account</a></li>
            <li><a href="/cart" className="hover:underline">Your Cart</a></li>
            <li><a href="#" className="hover:underline">Returns Centre</a></li>
            <li><a href="#" className="hover:underline">Help</a></li>
          </ul>
        </div>
      </div>

      {/* Contact Info */}
      <div className="max-w-7xl mx-auto px-6 py-6 text-sm  flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <p>📧 Email: <a href="mailto:rajputprerna1503@gmail.com" className="text-amber-300 hover:underline">admin@ShopNEst.com</a></p>
          <p>📞 Contact: <span className="text-amber-300">+91 123 450 6789</span></p>
        </div>
        <div className="flex items-center gap-3 text-2xl">
          <i className="ri-shopping-bag-4-fill text-amber-500"></i>
          <span className="font-bold text-lg">ShopNest</span>
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-[#131A22] text-center text-gray-400 text-xs py-4">
        &copy; {new Date().getFullYear()} ShopNest. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
