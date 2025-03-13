import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Banner1 from "./Banner1";  // Импортируем компоненты для каждого баннера
import Banner2 from "./Banner2";
import Banner3 from "./Banner3";  // Импортируем третий баннер

const ShowcaseBanner = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % 3);  // Количество слайдов — 3
  const prevSlide = () => setCurrent((prev) => (prev - 1 + 3) % 3);  // Количество слайдов — 3

  return (
    <section className="relative w-full h-[500px] overflow-hidden p-[7px] rounded-lg">
      {/* Слайды с плавным переходом */}
      <div className="w-full h-full relative ">
        {/* Первый баннер */}
        <div
          className={`absolute w-full h-full transition-opacity duration-500 ease-in-out${
            current === 0 ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          <Banner1 key={current} />
        </div>

        {/* Второй баннер */}
        <div
          className={`absolute w-full h-full transition-opacity duration-500 ease-in-out ${
            current === 1 ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          <Banner2 key={current} />
        </div>

        {/* Третий баннер */}
        <div
          className={`absolute w-full h-full transition-opacity duration-500 ease-in-out ${
            current === 2 ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          <Banner3 key={current} />
        </div>
      </div>

      {/* Стрелки */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full text-white cursor-pointer"
      >
        <ChevronLeft size={44} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full text-white cursor-pointer"
      >
        <ChevronRight size={44} />
      </button>

      {/* Индикаторы */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {[...Array(3)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              current === index ? "bg-yellow-500 scale-110" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default ShowcaseBanner;














