import React, { useState } from "react";
import { Link } from "react-router-dom";
import PuttyProducts from "../../../data/PuttyProducts.json";
import ProductCard from "../../card/ProductCard";
import FilterPrix from "../../card/FilterPanel";
import Pagination from "../../card/Pagination";
import SortProducts from "../../card/SortProducts"; // Подключаем компонент сортировки

const PuttyPage = () => {
  const [filteredProducts, setFilteredProducts] = useState(PuttyProducts);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortType, setSortType] = useState("popular");

  const productsPerPage = 9;

  const handleFilterChange = (filtered) => {
    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  // Вычисляем индексы для отображаемых товаров
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className="max-w-[1400px] mx-auto p-4">
      <nav className="text-gray-600 text-sm mb-4">
        <Link to="/" className="hover:underline">Главная</Link> <span> » </span>
        <span className="text-gray-800 font-semibold">Шпаклевка</span>
      </nav>

      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl sm:text-4xl font-bold text-black">Шпаклевка</h1>
        {/* Добавляем компонент сортировки */}
        <SortProducts
          sortType={sortType}
          setSortType={setSortType}
          filteredProducts={filteredProducts}
          setFilteredProducts={setFilteredProducts}
        />
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="md:w-[50%] w-full mb-4 md:mb-0 mr-6">
          <FilterPrix category="putty" products={PuttyProducts} onFilterChange={handleFilterChange} />
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
                img={`/images/putty/${product.img}`}
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

export default PuttyPage;


