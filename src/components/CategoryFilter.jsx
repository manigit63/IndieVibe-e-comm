const categories = [
  "All",
  "women's clothing",
  "men's clothing",
  "electronics",
  "audio",
  "tv",
  "gaming",
];

const CategoryFilter = ({ logic }) => {
  return (
    <div className="flex justify-center gap-2 sm:gap-2 md:mt-4 px-4 flex-nowrap">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => logic(cat === "All" ? "" : cat)}
          className="btn border rounded-md font-medium transition hover:bg-amber-300 active:scale-95 active:bg-amber-400 px-2 py-1 text-[5px]  md:text-sm lg:text-base md:px-4 md:py-2 lg:px-8 lg:py-2">
          {cat} 
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
