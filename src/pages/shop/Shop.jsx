import { useState } from "react";
import { FaFilter } from "react-icons/fa";

import ProductCard from "../../components/shared/ProductCard";
import ShopSidebar from "./ShopSidebar";

const products = [

  {
    id: 1,
    name: "Full Magicas Noches",
    price: 59,
    rating: 5,
    inStock: true,
    category: "Sleep",
    slug: "magicas-noches",
    image:
      "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6"
  },

  {
    id: 2,
    name: "Collagen Pro",
    price: 89,
    rating: 4,
    inStock: true,
    category: "Skin",
    slug: "collagen-pro",
    image:
      "https://images.unsplash.com/photo-1600181950005-3e68cf6d7c7f"
  },

  {
    id: 3,
    name: "Vitamin Boost",
    price: 45,
    rating: 4,
    inStock: false,
    category: "Energy",
    slug: "vitamin-boost",
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7516"
  },

  {
    id: 4,
    name: "Immunity Plus",
    price: 72,
    rating: 5,
    inStock: true,
    category: "Immunity",
    slug: "immunity-plus",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309"
  }

];


const Shop = () => {

  const [selected, setSelected] = useState("All");
  const [search, setSearch] = useState("");

  const [price, setPrice] = useState(200);
  const [rating, setRating] = useState(null);
  const [inStock, setInStock] = useState(false);
  const [sort, setSort] = useState("");

  const [openFilter, setOpenFilter] = useState(false);


  const resetFilters = () => {

    setSelected("All");
    setPrice(200);
    setRating(null);
    setInStock(false);
    setSort("");

  };


  // filtering
  let filtered = products.filter(p =>

    (selected === "All" || p.category === selected) &&
    p.name.toLowerCase().includes(search.toLowerCase()) &&
    p.price <= price &&
    (!rating || p.rating >= rating) &&
    (!inStock || p.inStock)

  );


  // sorting
  if (sort === "low") {

    filtered.sort((a, b) => a.price - b.price);

  }

  if (sort === "high") {

    filtered.sort((a, b) => b.price - a.price);

  }


  return (

    <section className="py-16 bg-base-200 min-h-screen">

      <div className="container mx-auto px-4">


        {/* top bar */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

          <h1 className="text-3xl font-bold">

            Shop Products

          </h1>


          <div className="flex gap-3">

            {/* search */}
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="px-4 py-2 border rounded-lg outline-none focus:border-purple-300"
            />


            {/* mobile filter button */}
            <button
              onClick={() => setOpenFilter(true)}
              className="lg:hidden px-4 py-2 bg-purple-300 rounded-lg flex items-center gap-2 outline-none"
            >

              <FaFilter />

              Filters

            </button>

          </div>

        </div>



        <div className="grid lg:grid-cols-4 gap-8">

          {/* desktop sidebar */}
          <div className="hidden lg:block">

            <ShopSidebar

              selected={selected}
              setSelected={setSelected}

              price={price}
              setPrice={setPrice}

              rating={rating}
              setRating={setRating}

              inStock={inStock}
              setInStock={setInStock}

              sort={sort}
              setSort={setSort}

              resetFilters={resetFilters}

            />

          </div>



          {/* products */}
          <div className="lg:col-span-3">

            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">

              {filtered.map(product => (

                <ProductCard
                  key={product.id}
                  product={product}
                />

              ))}

            </div>


            {filtered.length === 0 && (

              <p className="mt-10 text-gray-500">

                No products found.

              </p>

            )}

          </div>

        </div>

      </div>



      {/* mobile sidebar drawer */}
      {openFilter && (

        <div className="fixed inset-0 z-50">

          {/* overlay */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpenFilter(false)}
          />


          {/* sidebar */}
          <div className="absolute left-0 top-0 h-full w-72 bg-white p-5 overflow-y-auto">

            <div className="flex justify-between items-center mb-6">

              <h2 className="font-semibold">
                Filters
              </h2>


              <button
                onClick={() => setOpenFilter(false)}
                className="text-lg"
              >

                ✕

              </button>

            </div>


            <ShopSidebar

              selected={selected}
              setSelected={setSelected}

              price={price}
              setPrice={setPrice}

              rating={rating}
              setRating={setRating}

              inStock={inStock}
              setInStock={setInStock}

              sort={sort}
              setSort={setSort}

              resetFilters={resetFilters}

            />

          </div>

        </div>

      )}

    </section>

  );

};

export default Shop;