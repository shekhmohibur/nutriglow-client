import { useState, useEffect, useRef } from "react";
import heroData from "../../config/heroData.json";

import hero1 from "../../assets/hero/hero-1.webp";
import hero2 from "../../assets/hero/hero-2.webp";
import hero3 from "../../assets/hero/hero-3.webp";

const images = [hero1, hero2, hero3];

export default function Hero() {
  const [active, setActive] = useState(0);
  const intervalRef = useRef(null);
  const isHovered = useRef(false);

  // --------------------
  // SLIDER CONTROL
  // --------------------
  const startSlider = () => {
    stopSlider(); // always clear before starting

    intervalRef.current = setInterval(() => {
      if (!isHovered.current) {
        setActive((prev) => (prev + 1) % heroData.length);
      }
    }, 4000);
  };

  const stopSlider = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startSlider();
    return () => stopSlider();
  }, []);

  // --------------------
  // NAVIGATION
  // --------------------
  const nextSlide = () =>
    setActive((prev) => (prev + 1) % heroData.length);

  const prevSlide = () =>
    setActive((prev) =>
      prev === 0 ? heroData.length - 1 : prev - 1
    );

  // --------------------
  // SWIPE SUPPORT
  // --------------------
  const startX = useRef(0);

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const diff = startX.current - e.changedTouches[0].clientX;

    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();
  };

  // --------------------
  // HOVER CONTROL
  // --------------------
  const handleMouseEnter = () => {
    isHovered.current = true;
  };

  const handleMouseLeave = () => {
    isHovered.current = false;
  };

  // --------------------
  // RENDER
  // --------------------
  return (
    <section
      className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[85vh] overflow-hidden mt-16 rounded-2xl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* slides */}
      {heroData.map((hero, index) => (
        <div
          key={hero.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            active === index ? "opacity-100 z-10" : "opacity-0"
          }`}
        >
          <img
            src={images[index]}
            alt={hero.title}
            className="w-full h-full object-cover"
          />

          {/* overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-transparent"></div>

          {/* content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
              <div className="max-w-xl text-white space-y-4 sm:space-y-6">

                <h1 className="text-2xl text-start sm:text-4xl md:text-5xl lg:text-6xl font-heading font-semibold leading-tight">
                  {hero.title}
                </h1>

                <p className="text-sm text-start sm:text-base md:text-lg opacity-90">
                  {hero.description}
                </p>

                <div className="flex gap-3 sm:gap-4 flex-wrap">
                  <button className="btn btn-primary rounded-full px-5">
                    {hero.primaryBtn}
                  </button>

                  <button className="btn btn-outline text-white border-white hover:text-black rounded-full px-5">
                    {hero.secondaryBtn}
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      ))}

      {/* dots */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-20">
        {heroData.map((_, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`transition-all duration-300 rounded-full ${
              active === index
                ? "w-6 h-2 bg-primary"
                : "w-2 h-2 bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* arrows */}
      <button
        onClick={prevSlide}
        className="hidden cursor-pointer md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur"
      >
        ←
      </button>

      <button
        onClick={nextSlide}
        className="hidden cursor-pointer md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur"
      >
        →
      </button>
    </section>
  );
}