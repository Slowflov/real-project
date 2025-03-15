import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PopularCategories = () => {
  const categories = [
    "Категория 1", "Категория 2", "Категория 3", "Категория 4", "Категория 5", "Категория 6",
    "Категория 7", "Категория 8", "Категория 9", "Категория 10", "Категория 11", "Категория 12"
  ];

  const [current, setCurrent] = useState(0);

  const nextCategories = () => {
    if (current < 6) setCurrent(current + 6); // Перейти к следующей группе
  };

  const prevCategories = () => {
    if (current > 0) setCurrent(current - 6); // Перейти к предыдущей группе
  };

  return (
    <section className="w-full py-10">
      <h2 className="text-2xl font-semibold text-center mb-6">Популярные категории</h2>

      <div className="relative w-full overflow-hidden">
        {/* Контейнер для категорий с плавным переходом */}
        <div className="flex transition-transform duration-500 ease-in-out"
             style={{ transform: `translateX(-${current * 100}%)` }}>
          {/* Первая группа категорий */}
          <div className="flex flex-wrap w-full justify-center space-x-6">
            {categories.slice(0, 6).map((category, index) => (
              <a href="#" key={index} className="block p-4 bg-gray-200 rounded-lg text-center hover:bg-gray-300 transition">
                {category}
              </a>
            ))}
          </div>

          {/* Вторая группа категорий */}
          <div className="flex flex-wrap w-full justify-center space-x-6">
            {categories.slice(6, 12).map((category, index) => (
              <a href="#" key={index} className="block p-4 bg-gray-200 rounded-lg text-center hover:bg-gray-300 transition">
                {category}
              </a>
            ))}
          </div>
        </div>

        {/* Стрелки для переключения категорий */}
        <button
          onClick={prevCategories}
          className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-lg hover:bg-gray-200 transition"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextCategories}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-lg hover:bg-gray-200 transition"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default PopularCategories;
