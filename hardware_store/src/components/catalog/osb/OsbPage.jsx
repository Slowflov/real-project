import React, { useState } from "react";
import { Link } from "react-router-dom";
import OsbProducts from "../../../data/OsbProducts.json";
import ProductCard from "../../../components/card/ProductCard";
import FilterPrix from "../../card/FilterPanel";
import SortProducts from "../../card/SortProducts"; // Подключаем компонент сортировки

const OsbPage = () => {
  const [filteredProducts, setFilteredProducts] = useState(OsbProducts); // Изначально все товары
  const [sortType, setSortType] = useState("popular"); // Добавляем состояние для сортировки

  const handleFilterChange = (filteredProducts) => {
    setFilteredProducts(filteredProducts); // Обновляем товары после фильтрации
  };

  return (
    <div className="max-w-[1400px] mx-auto p-4">
      <nav className="text-gray-600 text-sm mb-4">
        <Link to="/" className="hover:underline">Главная</Link> <span> » </span>
        <span className="text-gray-800 font-semibold">OSB Плиты</span>
      </nav>

      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl sm:text-4xl font-bold text-black">OSB Плиты</h1>
        {/* Перемещаем компонент сортировки в нужное место */}
        <SortProducts
          sortType={sortType}
          setSortType={setSortType}
          filteredProducts={filteredProducts}
          setFilteredProducts={setFilteredProducts}
        />
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Фильтр (будет сверху на мобильных) */}
        <div className="md:w-[50%] w-full mb-4 md:mb-0 mr-6">
          <FilterPrix category="osb" products={OsbProducts} onFilterChange={handleFilterChange} />
        </div>

        {/* Сетка товаров */}
        <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.length === 0 ? (
            <div className="w-full text-center text-gray-500 text-3xl py-10 col-span-full">
              Товары не найдены. Попробуйте изменить фильтры.
            </div>
          ) : (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                className="w-full"
                img={`/images/osb/${product.img}`}
                name={product.name}
                oldPrice={product.oldPrice}
                newPrice={product.newPrice}
                availability={product.availability}
                code={product.code}
                quantity={product.quantity}
                customPrice={product.customPrice}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default OsbPage;


















