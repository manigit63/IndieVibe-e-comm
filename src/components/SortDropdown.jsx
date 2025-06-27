import React from "react";

const SortDropdown = ({ value, logic }) => {
  return (
    <div className="flex items-center gap-2">
      <label htmlFor="sortBy" className="text-sm font-medium">
        Sort by:
      </label>

      <select
        id="sortBy"
        onChange={(e) => logic(e.target.value)}
        value={value}
        className="px-4 py-2 border border-gray-300 rounded-md text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-amber-300">
        <option value="recommended">Recommended</option>
        <option value="lowToHigh">Price: Low to High</option>
        <option value="highToLow">Price: High to Low</option>
        <option value="newest">Newest First</option>
      </select>
    </div>
  );
};

export default SortDropdown;
