import React, { useState } from "react";
import { Link } from "react-router-dom";
import PaintProducts from "../../../data/PaintProducts.json";  
import ProductCard from "../../../components/card/ProductCard";
import FilterPrix from "../../card/FilterPanel";
import Pagination from "../../card/Pagination";
import SortProducts from "../../card/SortProducts";

const PaintPage = () => {
  const [filteredProducts, setFilteredProducts] = useState(PaintProducts); // Измените на данные краски
  const [currentPage, setCurrentPage] = useState(1);
  const [sortType, setSortType] = useState("popular");

  const productsPerPage = 9;

  const handleFilterChange = (filteredProducts) => {
    setFilteredProducts(filteredProducts); 
    setCurrentPage(1); // Сбросить страницу при изменении фильтров
  };

  // Вычисление индексов для отображения товаров
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className="max-w-[1400px] mx-auto p-4">
      <nav className="text-gray-600 text-sm mb-4">
        <Link to="/" className="hover:underline">Главная</Link> <span> » </span>
        <span className="text-gray-800 font-semibold">Краска</span>
      </nav>

      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl sm:text-4xl font-bold text-black">Краска</h1>
        {/* Компонент сортировки */}
        <SortProducts
          sortType={sortType}
          setSortType={setSortType}
          filteredProducts={filteredProducts}
          setFilteredProducts={setFilteredProducts}
        />
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="md:w-[50%] w-full mb-4 md:mb-0 mr-6">
          {/* Фильтр */}
          <FilterPrix category="paint" products={PaintProducts} onFilterChange={handleFilterChange} />
        </div>

        <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProducts.length === 0 ? (
            <div className="w-full text-center text-gray-500 text-3xl py-10 col-span-full">
              Товары не найдены. Попробуйте изменить фильтры.
            </div>
          ) : (
            currentProducts.map((product) => (
              <ProductCard
                key={product.id}
                className="w-full"
                img={`/images/paint/${product.img}`}  // Замените на путь к изображениям для краски
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

      {/* Пагинация */}
      {filteredProducts.length > 0 && (
        <Pagination
          totalPages={Math.ceil(filteredProducts.length / productsPerPage)}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
};

export default PaintPage;
