import React from "react";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom"; // Импортируем Link для навигации

const ProductCard = ({
  img,
  name,
  oldPrice,
  newPrice,
  availability,
  code,
  quantity,
  customPrice,
  productId,
}) => {
    // console.log("img из JSON:", img);
  return (
    <Link to={`/product/${productId}`} className="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
      <img src={img} alt={name} className="w-full h-60 object-cover" />
      
      <div className="flex flex-col flex-grow p-4">
        <div className="text-sm text-gray-500">Код: {code}</div>
        <div className="text-xl font-bold">{name}</div>

        {/* Добавляем количество и цену */}
        <div className="text-sm text-gray-500 mt-2">
          от {quantity} шт -
          <span className="text-lg text-red-600 font-bold pl-1">{customPrice} грн</span>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="flex flex-col">
            <div className="text-xl text-gray-500 line-through">{oldPrice} грн</div>
            <div className="text-3xl font-semibold text-red-500">{newPrice} грн</div>
          </div>
          <div
  className={`text-lg text-white px-3 py-3 rounded-md whitespace-nowrap ${
    availability === "Отсутствует" ? "bg-red-400" : "bg-green-300"
  }`}
>
  {availability}
</div>

        </div>
      </div>

      {/* Кнопка будет внизу карточки */}
      <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-white py-4 px-4 flex items-center justify-center gap-2 rounded-md cursor-pointer ">
        <ShoppingCart className="w-5 h-5" />
        <span>Подробнее</span>
      </button>
    </Link>
  );
};

export default ProductCard;


