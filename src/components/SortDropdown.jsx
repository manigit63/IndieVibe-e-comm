import React from "react";

const SortDropdown = ({ value, logic }) => {
  return (
    <div className="flex flex-row items-center gap-2  px-4">
      <label htmlFor="sortBy" className="text-[10px] md:text-sm font-medium text-gray-700">
        Sort by:
      </label>

      <select
        id="sortBy"
        onChange={(e) => logic(e.target.value)}
        value={value}
        className="px-4 py-1 lg:py-2  border border-gray-300 rounded-md text-sm  shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-300 transition">
        <option value="recommended">Recommended</option>
        <option value="lowToHigh">Price: Low to High</option>
        <option value="highToLow">Price: High to Low</option>
        <option value="newest">Newest First</option>
      </select>
    </div>
  );
};

export default SortDropdown;