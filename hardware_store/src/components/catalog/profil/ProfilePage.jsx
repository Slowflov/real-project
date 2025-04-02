import React, { useState } from "react";
import ProfileProducts from "../../../data/ProfileProducts.json";
import ProductCard from "../../../components/card/ProductCard";
import FilterPrix from "../../card/FilterPanel";
import Pagination from "../../card/Pagination";

const ProfilePage = () => {
  const [filteredProducts, setFilteredProducts] = useState(ProfileProducts);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9; // Количество товаров на странице

  const handleFilterChange = (filteredProducts) => {
    setFilteredProducts(filteredProducts);
    setCurrentPage(1); // Сброс на первую страницу при фильтрации
  };

  // Вычисляем индексы для отображаемых товаров
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className="max-w-[1400px] mx-auto p-4">
      <nav className="text-gray-600 text-sm mb-4">
        <span>Главная » </span>
        <span className="text-gray-800 font-semibold">Профиль Материал</span>
      </nav>

      <h1 className="text-4xl font-bold text-black mb-6">Профиль Материал</h1>

      <div className="flex flex-col md:flex-row">
        <div className="md:w-[50%] w-full mb-4 md:mb-0 mr-6">
          <FilterPrix category="profile" products={ProfileProducts} onFilterChange={handleFilterChange} />
        </div>

        <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProducts.map((product) => (
            <ProductCard
              key={product.id}
              className="w-full"
              img={`/images/profile/${product.img}`}
              name={product.name}
              oldPrice={product.oldPrice}
              newPrice={product.newPrice}
              availability={product.availability}
              code={product.code}
              quantity={product.quantity}
              customPrice={product.customPrice}
            />
          ))}
        </div>
      </div>

      {/* Добавляем пагинацию */}
      <Pagination
        totalPages={Math.ceil(filteredProducts.length / productsPerPage)}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default ProfilePage;

