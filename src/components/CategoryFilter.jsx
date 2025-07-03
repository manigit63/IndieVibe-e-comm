// src/components/CategoryFilter.jsx
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
  // console.log(onSelect);
  return (
    <div className="flex justify-center gap-4 mt-10 flex-wrap">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => logic(cat === "All" ? "" : cat)}
          className="btn px-4 py-1 rounded-md border text-sm font-medium hover:bg-amber-300 transition active:scale-65 active:bg-amber-400">
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
