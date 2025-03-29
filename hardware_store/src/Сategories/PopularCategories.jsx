import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CategoryPage from "./CategoryPage";
import cat1 from "../assets/image/category/cat_1.png";
import cat2 from "../assets/image/category/cat_2.png";
import cat3 from "../assets/image/category/cat_3.webp";
import cat4 from "../assets/image/category/cat_4.png";
import cat5 from "../assets/image/category/cat_5.png";
import cat6 from "../assets/image/category/cat_6.jpg";
import cat7 from "../assets/image/category/cat_7.webp";
import cat8 from "../assets/image/category/cat_8.png";
import cat9 from "../assets/image/category/cat_9.png";
import cat10 from "../assets/image/category/cat_10.jpg";
import cat11 from "../assets/image/category/cat_11.png";
import cat12 from "../assets/image/category/cat_12.png";

const categories = [
  { id: 1, name: "Профиль", img: cat1, link: "/category/1" },
  { id: 2, name: "Гипсокартон", img: cat2, link: "/category/2" },
  { id: 3, name: "Цемент", img: cat3, link: "/category/3" },
  { id: 4, name: "OSB", img: cat4, link: "category/osb" },
  { id: 5, name: "Шпаклевка", img: cat5, link: "/category/5" },
  { id: 6, name: "Кровельные материалы", img: cat6, link: "/category/6" },
  { id: 7, name: "Грунтовка", img: cat7, link: "/category/7" },
  { id: 8, name: "Пенопласт", img: cat8, link: "/category/8" },
  { id: 9, name: "Краска", img: cat9, link: "/category/9" },
  { id: 10, name: "Газоблоки UDK", img: cat10, link: "/category/10" },
  { id: 11, name: "ДВП и фанера", img: cat11, link: "/category/11" },
  { id: 12, name: "Утеплитель", img: cat12, link: "/category/12" },
];

const PopularCategories = () => {
  const [index, setIndex] = useState(0);

  // Переход к следующей странице
  const next = () => setIndex((prev) => (prev === Math.ceil(categories.length / 6) - 1 ? 0 : prev + 1));

  // Переход к предыдущей странице
  const prev = () => setIndex((prev) => (prev === 0 ? Math.ceil(categories.length / 6) - 1 : prev - 1));

  return (
    <div className="relative w-full mx-auto overflow-hidden px-5">
      {/* Заголовок */}
      <h2 className="pt-10 pb-4 text-4xl font-bold text-black">Популярные категории</h2>

      {/* Кнопка Влево */}
      <button
        onClick={prev}
        className="absolute cursor-pointer left-0 top-[247px] -translate-y-1/2 z-10 bg-white hover:bg-gray-300 p-2 shadow-md rounded-full"
      >
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>

      {/* Слайдер */}
      <CategoryPage
        index={index}
        categories={categories}
      />

      {/* Кнопка Вправо */}
      <button
        onClick={next}
        className="absolute cursor-pointer right-0 top-[247px] -translate-y-1/2 z-10 bg-white hover:bg-gray-300 p-2 shadow-md rounded-full"
      >
        <ChevronRight className="w-6 h-6 text-gray-700" />
      </button>
    </div>
  );
};

export default PopularCategories;








