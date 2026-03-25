import { FaStar } from "react-icons/fa";

const categories = [
  "All",
  "Sleep",
  "Skin",
  "Energy",
  "Immunity"
];

const ratings = [5, 4, 3];

const ShopSidebar = ({
  selected,
  setSelected,
  price,
  setPrice,
  rating,
  setRating,
  inStock,
  setInStock,
  sort,
  setSort,
  resetFilters
}) => {

  return (

    <aside className="bg-white p-5 rounded-2xl shadow-sm space-y-8">

      {/* title */}
      <h2 className="text-lg font-semibold">
        Filters
      </h2>


      {/* categories */}
      <div>

        <h3 className="font-medium mb-3 text-sm text-gray-500">
          Category
        </h3>

        <div className="flex flex-wrap gap-2">

          {categories.map(cat => (

            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={`
                px-3 py-1 rounded-full text-sm transition outline-none

                ${selected === cat
                  ? "bg-purple-300 text-black"
                  : "bg-base-200 hover:bg-purple-100"
                }
              `}
            >

              {cat}

            </button>

          ))}

        </div>

      </div>



      {/* price */}
      <div>

        <h3 className="font-medium mb-3 text-sm text-gray-500">
          Max Price: ${price}
        </h3>

        <input
          type="range"
          min="0"
          max="200"
          value={price}
          onChange={e => setPrice(e.target.value)}
          className="range range-primary outline-none"
        />

      </div>



      {/* rating */}
      <div>

        <h3 className="font-medium mb-3 text-sm text-gray-500">
          Rating
        </h3>

        <div className="space-y-2">

          {ratings.map(r => (

            <button
              key={r}
              onClick={() => setRating(r)}
              className={`
                flex items-center gap-2 text-sm px-3 py-1 rounded-lg w-full text-left outline-none

                ${rating === r
                  ? "bg-purple-300"
                  : "hover:bg-base-200"
                }
              `}
            >

              {[...Array(r)].map((_, i) => (

                <FaStar
                  key={i}
                  className="text-yellow-500 text-xs"
                />

              ))}

              & up

            </button>

          ))}

        </div>

      </div>



      {/* stock */}
      <div>

        <h3 className="font-medium mb-3 text-sm text-gray-500">
          Availability
        </h3>

        <label className="flex items-center gap-2 text-sm cursor-pointer">

          <input
            type="checkbox"
            checked={inStock}
            onChange={() => setInStock(!inStock)}
            className="checkbox checkbox-sm outline-none"
          />

          In Stock only

        </label>

      </div>



      {/* sort */}
      <div>

        <h3 className="font-medium mb-3 text-sm text-gray-500">
          Sort by
        </h3>

        <select
          value={sort}
          onChange={e => setSort(e.target.value)}
          className="w-full border rounded-lg px-3 py-2 text-sm outline-none focus:border-purple-300"
        >

          <option value="">
            Default
          </option>

          <option value="low">
            Price: Low to High
          </option>

          <option value="high">
            Price: High to Low
          </option>

        </select>

      </div>



      {/* reset */}
      <button
        onClick={resetFilters}
        className="w-full py-2 rounded-lg bg-purple-300 hover:bg-purple-400 transition text-sm font-medium outline-none"
      >

        Reset Filters

      </button>

    </aside>

  );

};

export default ShopSidebar;