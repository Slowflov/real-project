import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Banner1 from "./Banner1.jsx";
import Banner2 from "./Banner2.jsx";
import Banner3 from "./Banner3.jsx";
import Banner4 from "./Banner4.jsx";
import Banner5 from "./Banner5.jsx";

const ShowcaseBanner = () => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % 5);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + 5) % 5);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isHovered]);

  // свайп
  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const distance = touchStartX.current - touchEndX.current;
    if (Math.abs(distance) > 50) {
      distance > 0 ? nextSlide() : prevSlide();
    }
  };

  return (
    <section
      className="relative w-full max-w-[440px] lg:max-w-[1250px] md:max-w-[770px] sm:max-w-[630px] h-[500px] overflow-hidden px-5 rounded-lg mx-auto touch-pan-x cursor-grab"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="w-full h-full relative">
        {[Banner1, Banner2, Banner3, Banner4, Banner5].map((Banner, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-500 ${
              current === index
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <Banner />
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full text-white cursor-pointer hidden sm:block"
      >
        <ChevronLeft size={44} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full text-white cursor-pointer hidden sm:block"
      >
        <ChevronRight size={44} />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden sm:flex space-x-2">
        {[...Array(5)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`cursor-pointer w-3 h-3 rounded-full transition-all ${
              current === index ? "bg-yellow-500 scale-110" : "bg-gray-300"
            } hover:bg-yellow-500`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default ShowcaseBanner;


















