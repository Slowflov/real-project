import { useState } from "react";
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

const CategorySection = ({ title, products }) => {
  const [index, setIndex] = useState(0);
  const itemsPerPage = 3;
  const pages = Math.ceil(products.length / itemsPerPage);

  const next = () => setIndex((prev) => (prev === pages - 1 ? 0 : prev + 1));
  const prev = () => setIndex((prev) => (prev === 0 ? pages - 1 : prev - 1));

  const visibleItems = products.slice(index * itemsPerPage, index * itemsPerPage + itemsPerPage);

  return (
    <div className="relative w-full mx-auto overflow-hidden px-5">
      <h2 className="pt-10 pb-4 text-4xl font-bold text-red-500">{title}</h2>

      <button
        onClick={prev}
        className="absolute cursor-pointer left-0 top-[298px] -translate-y-1/2 z-10 bg-white hover:bg-gray-300 p-2 shadow-md rounded-full"
      >
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>

      <motion.div
        className="flex justify-center gap-4"
        key={index}
        animate={{ opacity: [0, 1], x: [100, 0] }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {visibleItems.map((product) => (
          <div key={product.id} className="w-1/3 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
            <img src={product.img} alt={product.name} className="w-full h-60 object-cover" />
            <div className="flex flex-col flex-grow p-4">
              <div className="text-sm text-gray-500">Код: {product.code}</div>
              <div className="text-xl font-bold">{product.name}</div>
              <div className="text-sm text-gray-500 mt-2">
                от {product.quantity} шт - <span className="text-lg text-red-600 font-bold pl-1">{product.customPrice} грн</span>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="flex flex-col">
                  <div className="text-xl text-gray-500 line-through">{product.oldPrice} грн</div>
                  <div className="text-3xl font-semibold text-red-500">{product.newPrice} грн</div>
                </div>
                <div className="text-lg text-white bg-green-300 px-3 py-3 rounded-md">
                  {product.availability}
                </div>
              </div>
            </div>
            <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-white py-4 px-4 flex items-center justify-center gap-2 rounded-md cursor-pointer">
              <ShoppingCart className="w-5 h-5" />
              <span>Подробнее</span>
            </button>
          </div>
        ))}
      </motion.div>

      <button
        onClick={next}
        className="absolute cursor-pointer right-0 top-[298px] -translate-y-1/2 z-10 bg-white hover:bg-gray-300 p-2 shadow-md rounded-full"
      >
        <ChevronRight className="w-6 h-6 text-gray-700" />
      </button>
    </div>
  );
};

export default CategorySection;
