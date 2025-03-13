import React, { useEffect, useState } from "react";
import background1 from "../../../assets/image/banner/banner_1.jpeg";
import tile from "../../../assets/image/banner/banner_img_1.png";

const Banner1: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false); // Убираем анимацию при скрытии баннера
    const timeout = setTimeout(() => {
      setIsVisible(true); // Добавляем анимацию после небольшой задержки
    }, 100); // Добавляем небольшую задержку для начала анимации
    return () => clearTimeout(timeout);
  }, []); // Запускаем эффект при монтировании компонента

  return (
    <div
      className="w-full h-[500px] rounded-lg overflow-hidden flex-shrink-0 relative bg-cover bg-center"
      style={{ backgroundImage: `url(${background1})` }}
    >
      <div className="absolute inset-0 bg-black/10 flex flex-col justify-between text-white p-6">
        <h2 className="text-6xl font-bold ml-12 mt-12">
          <span>Выгодное предложение</span><br />
          <span>на гипсокартон</span><br />
          <span className="text-blue-500 text-7xl">KNAUF</span>
        </h2>
        <div
          className={`space-y-1 ml-12 mb-10 text-2xl tracking-tight ${
            isVisible ? "slide-in-left" : "" // Запускаем анимацию, когда элемент становится видимым
          }`}
        >
          <p>
            ГК Knauf 2500*1200*12.5 мм влагостойкий:{" "}
            <span className="font-semibold">392,5 грн</span>
          </p>
          <p>
            ГК Knauf 2500*1200*9.5 мм потолочный:{" "}
            <span className="font-semibold">312 грн</span>
          </p>
          <p>
            ГК Knauf 2500*1200*12.5 мм стеновой:{" "}
            <span className="font-semibold">312,5 грн</span>
          </p>
        </div>
        <div className="absolute right-12 bottom-22">
          <img src={tile} alt="Knauf logo" className="w-96 h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Banner1;






  