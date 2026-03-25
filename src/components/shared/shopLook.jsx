import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6",
    title: "FULL GUMMIES",
    price: "$95.00"
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1594824804732-ca8db7f20d46",
    title: "FULL MAGICAS NOCHES",
    price: "$59.00"
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1600181950005-3e68cf6d7c7f",
    title: "COLLAGEN PRO",
    price: "$89.00"
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb",
    title: "SKIN GLOW",
    price: "$72.00"
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7516",
    title: "VITAMIN BOOST",
    price: "$45.00"
  }
];

const ShopLookSlider = () => {

  const [index, setIndex] = useState(2);


  const prev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };


  const next = () => {
    setIndex((prevIndex) =>
      (prevIndex + 1) % slides.length
    );
  };


  // helper to get circular index
  const getSlide = (offset) => {
    return slides[
      (index + offset + slides.length) % slides.length
    ];
  };


  const positions = [-2, -1, 0, 1, 2];


  return (

    <section className="py-20 bg-base-200">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold text-center mb-12">

          Shop the Look

        </h2>


        <div className="relative flex items-center justify-center">

          {/* left button */}
          <button
            onClick={prev}
            className="absolute left-0 btn btn-circle"
          >
            <FaChevronLeft />
          </button>


          {/* slides */}
          <div className="flex items-center justify-center gap-6">

            {positions.map((pos) => {

              const slide = getSlide(pos);


              return (

                <div
                  key={slide.id}
                  className={`
                    transition-all duration-500 ease-in-out
                    ${pos === 0
                      ? "scale-110 opacity-100 z-20"
                      : "scale-90 opacity-40"
                    }
                  `}
                >

                  <div className="relative w-[230px] h-[340px] rounded-2xl overflow-hidden shadow-lg">

                    <img
                      src={slide.image}
                      className="w-full h-full object-cover"
                    />


                    {/* bottom card */}
                    {pos === 0 && (

                      <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-xl p-3 shadow">

                        <p className="text-sm font-medium">

                          {slide.title}

                        </p>

                        <p className="font-semibold">

                          {slide.price}

                        </p>

                        <button className="btn btn-sm btn-primary w-full mt-2">

                          Add to Cart

                        </button>

                      </div>

                    )}

                  </div>

                </div>

              );

            })}

          </div>


          {/* right button */}
          <button
            onClick={next}
            className="absolute right-0 btn btn-circle"
          >
            <FaChevronRight />
          </button>
        </div>

      </div>

    </section>

  );

};

export default ShopLookSlider;