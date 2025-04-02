import React, { useState, useEffect } from "react";
import PriceRangeFilter from "./PriceRangeFilter";
import TypeFilter from "./TypeFilter";

const priceRanges = {
  osb: [300, 500],
  profile: [50, 400],
  paint: [20, 1500],
};

const typeFilters = {
  osb: ["влагостойкий"],
  profile: ["CD-профиль", "UD-профиль", "CW-профиль", "UW-профиль"],
};

const FilterPanel = ({ category, products, onFilterChange }) => {
  const [filters, setFilters] = useState({
    price: priceRanges[category] || [0, 10000],
    typeFilter: [], // Массив выбранных типов
  });

  useEffect(() => {
    setFilters({ price: priceRanges[category] || [0, 10000], typeFilter: [] });
  }, [category]);

  const handlePriceChange = (value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      price: value,
    }));
  };

  const handleTypeFilterChange = (e) => {
    const selectedType = e.target.value;

    setFilters((prevFilters) => {
      const newTypeFilter = prevFilters.typeFilter.includes(selectedType)
        ? prevFilters.typeFilter.filter((type) => type !== selectedType) // Убираем, если был
        : [...prevFilters.typeFilter, selectedType]; // Добавляем новый тип

      // Сразу применяем фильтрацию при изменении чекбокса
      applyFilters(newTypeFilter);

      return {
        ...prevFilters,
        typeFilter: newTypeFilter,
      };
    });
  };

  const handleFilterClick = () => {
    // Важно: при клике на кнопку, фильтрация также должна применяться
    applyFilters(filters.typeFilter);
  };

  const applyFilters = (typeFilter) => {
    const filteredProducts = products.filter((product) => {
      const productPrice = parseFloat(product.newPrice);
      const matchesPrice = productPrice >= filters.price[0] && productPrice <= filters.price[1];

      // Приводим типы к нижнему регистру для корректного сравнения
      const productType = product.type.trim().toLowerCase();
      const typeFilterLower = typeFilter.map(type => type.trim().toLowerCase());

      const matchesTypeFilter = typeFilter.length === 0 || typeFilterLower.includes(productType);

      return matchesPrice && matchesTypeFilter;
    });

    onFilterChange(filteredProducts);
  };

  return (
    <div className="filter-panel bg-white px-6 py-6 rounded-lg shadow-md">
      <h3 className="font-bold text-xl mb-4 w-full text-center">Фильтровать по цене</h3>

      <PriceRangeFilter
        priceRanges={priceRanges}
        category={category}
        price={filters.price}
        onPriceChange={handlePriceChange}
      />

      <button
        onClick={handleFilterClick} // Кнопка остается
        className="w-full bg-yellow-500 hover:bg-yellow-400 text-white py-2 px-4 rounded-md cursor-pointer mt-4"
      >
        Фильтровать
      </button>

      <div className="border-t border-black mt-4"></div>

      <TypeFilter
        availableTypes={typeFilters[category]} // Передаем доступные типы для текущей категории
        selectedTypes={filters.typeFilter} // Массив выбранных типов
        onTypeFilterChange={handleTypeFilterChange} // Обработчик изменения фильтра
      />
    </div>
  );
};

export default FilterPanel;


























