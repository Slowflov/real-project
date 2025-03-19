import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

import promo1 from "../../assets/image/Promo/Promo_1.png";
import promo2 from "../../assets/image/Promo/Promo_2.png";
import promo3 from "../../assets/image/Promo/Promo_3.png";
import promo4 from "../../assets/image/Promo/Promo_4.png";
import promo5 from "../../assets/image/Promo/Promo_5.png";
import promo6 from "../../assets/image/Promo/Promo_6.png";
import promo7 from "../../assets/image/Promo/Promo_7.png";
import promo8 from "../../assets/image/Promo/Promo_8.png";
import promo9 from "../../assets/image/Promo/Promo_9.png";
import promo10 from "../../assets/image/Promo/Promo_10.png";
import promo11 from "../../assets/image/Promo/Promo_11.png";
import promo12 from "../../assets/image/Promo/Promo_12.png";
import promo13 from "../../assets/image/Promo/Promo_13.png";
import promo14 from "../../assets/image/Promo/Promo_14.png";
import promo15 from "../../assets/image/Promo/Promo_15.png";

const PromoProductsSection = () => {
  const [index, setIndex] = useState(0);

  const totalItems = 15;
  const itemsPerPage = 3;
  const pages = Math.ceil(totalItems / itemsPerPage);

  const next = () => setIndex((prev) => (prev === pages - 1 ? 0 : prev + 1));
  const prev = () => setIndex((prev) => (prev === 0 ? pages - 1 : prev - 1));

  const items = Array.from({ length: totalItems }, (_, i) => i + 1);
  const visibleItems = items.slice(index * itemsPerPage, index * itemsPerPage + itemsPerPage);

  // Пример данных товаров с добавленным количеством для каждого товара
  const products = [
    { id: 1, img: promo1, name: "Цемент ПЦ ІІ/А-В-500Р-Н Ивано-Франковск 25 кг", oldPrice: 172, newPrice: 162, availability: "В наличии", code: "3271", quantity: 10, customPrice: 160 },
    { id: 2, img: promo2, name: "Knauf HP Start 30 кг гипсовая штукатурка", oldPrice: 290, newPrice: 279, availability: "В наличии", code: "4025", quantity: 10, customPrice: "27,25" },
    { id: 3, img: promo3, name: "Coral PRO — 11 клей для плитки универсал 25 кг", oldPrice: 180, newPrice: 172, availability: "В наличии", code: "1394", quantity: 15, customPrice: "158,5" },
    { id: 4, img: promo4, name: "Влагостойкая плита OSB 2500х1250х10мм Украина", oldPrice: 388, newPrice: 371, availability: "В наличии", code: "587", quantity: 5, customPrice: "365,6" },
    { id: 5, img: promo5, name: "Knauf НР Q4 MD финишная гипсовая шпаклевка 25 кг", oldPrice: 346, newPrice: "231,5", availability: "В наличии", code: "3103", quantity: 10, customPrice: "299,5" },
    { id: 6, img: promo6, name: "Рубероид РКК 10 кв.м кровельные материал", oldPrice: 241, newPrice: 235, availability: "В наличии", code: "1075", quantity: 5, customPrice: 221 },
    { id: 7, img: promo7, name: "Профиль UD-27 направляющий 0,5 мм 3 м", oldPrice: 57, newPrice: '54,5', availability: "В наличии", code: "832", quantity: 10, customPrice: "52,5" },
    { id: 8, img: promo8, name: "Sanitol Helios Spektra 1л антигрибок", oldPrice: 407, newPrice: 393, availability: "В наличии", code: "4103", quantity: 3, customPrice: 369 },
    { id: 9, img: promo9, name: "Sniezka ULTRA BIEL 7 кг белая краска", oldPrice: 398, newPrice: 393, availability: "В наличии", code: "1347", quantity: 3, customPrice: "384,5" },
    { id: 10, img: promo10, name: "Лист фанеры 1520х1520х4,5мм", oldPrice: 435, newPrice: 431, availability: "В наличии", code: "260", quantity: 3, customPrice: 409 },
    { id: 11, img: promo11, name: "Sniezka ACRYL-PUTZ TG50 гипсовая штукатурка 30 кг", oldPrice: 375, newPrice: 369, availability: "В наличии", code: "2274", quantity: 10, customPrice: "348,5" },
    { id: 12, img: promo12, name: "Цемент Ивано Франковск ПЦ-II/Б-К-400 25 кг", oldPrice: 126, newPrice: 119, availability: "В наличии", code: "1574", quantity: 10, customPrice: '117,8' },
    { id: 13, img: promo13, name: "Мастика Sweetondale для фундамента 17 кг", oldPrice: 964, newPrice: 945, availability: "В наличии", code: "4379", quantity: 5, customPrice: 898 },
    { id: 14, img: promo14, name: "Sniezka Mattlatex Brilliant краска 10 л (13,7кг)", oldPrice: 1669, newPrice: 1648, availability: "В наличии", code: "4128", quantity: 3, customPrice: 1632 },
    { id: 15, img: promo15, name: "Knauf Insulation плита 1200x600x100мм", oldPrice: 129, newPrice: 103, availability: "В наличии", code: "1822", quantity: 3, customPrice: 98 },
  ];

  return (
    <div className="relative w-full mx-auto overflow-hidden px-5">
      <h2 className="pt-10 pb-4 text-4xl font-bold text-red-500">Акционные товары</h2>

      <button
        onClick={prev}
        className="absolute cursor-pointer left-0 top-[298px] -translate-y-1/2 z-10 bg-white hover:bg-gray-300 p-2 shadow-md rounded-full"
      >
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>

      {/* Используем motion для анимации слайдов */}
      <motion.div
        className="flex justify-center gap-4"
        key={index}
        animate={{ opacity: [0, 1], x: [100, 0] }} // Плавное появление и сдвиг
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {visibleItems.map((itemIndex) => {
          const product = products[itemIndex - 1]; // Получаем товар по индексу

          return (
            <div key={product.id} className="w-1/3 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-60 object-cover"
              />
              <div className="flex flex-col flex-grow p-4"> {/* flex-grow добавлен для растягивания содержимого */}
                <div className="text-sm text-gray-500">Код: {product.code}</div>
                <div className="text-xl font-bold">{product.name}</div>
          
                {/* Добавляем количество и цену */}
                <div className="text-sm text-gray-500 mt-2">
                  от {product.quantity} шт - 
                  <span className="text-lg text-red-600 font-bold pl-1">{product.customPrice} грн</span>
                </div>
          
                <div className="flex justify-between items-center mt-4">
                  <div className="flex flex-col">
                    <div className="text-xl text-gray-500 line-through">
                      {product.oldPrice} грн
                    </div>
                    <div className="text-3xl font-semibold text-red-500">
                      {product.newPrice} грн
                    </div>
                  </div>
                  <div className="text-lg text-white bg-green-300 px-3 py-3 rounded-md">
                    {product.availability}
                  </div>
                </div>
              </div>
          
              {/* Кнопка будет внизу карточки */}
              <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-white py-4 px-4 flex items-center justify-center gap-2 rounded-md cursor-pointer ">
                <ShoppingCart className="w-5 h-5" />
                <span>Подробнее</span>
              </button>
            </div>
          );
        })}
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

export default PromoProductsSection;


