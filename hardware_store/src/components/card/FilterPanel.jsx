import React, { useState, useEffect } from "react";
import PriceRangeFilter from "./PriceRangeFilter";
import TypeFilter from "./TypeFilter";

const priceRanges = {
  osb: [0, 500],
  profile: [0, 400],
  putty: [0, 1500],
};

const typeFilters = {
  osb: ["влагостойкий"],
  profile: ["CD-профиль", "UD-профиль", "CW-профиль", "UW-профиль"],
  putty: ["Акриловая", "Гипсовая", "Полимерная", "Цементная"],
};

const FilterPanel = ({ category, products, onFilterChange }) => {
  const [filters, setFilters] = useState({
    price: priceRanges[category] || [0, 10000],
    typeFilter: [],
  });

  useEffect(() => {
    setFilters({ price: priceRanges[category] || [0, 10000], typeFilter: [] });
  }, [category]);

  // Подсчет количества товаров для каждого типа
  const typeCounts = products.reduce((acc, product) => {
    const productType = product.type.trim().toLowerCase();
    acc[productType] = (acc[productType] || 0) + 1;
    return acc;
  }, {});

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
        ? prevFilters.typeFilter.filter((type) => type !== selectedType)
        : [...prevFilters.typeFilter, selectedType];

      applyFilters(newTypeFilter);

      return {
        ...prevFilters,
        typeFilter: newTypeFilter,
      };
    });
  };

  const handleFilterClick = () => {
    applyFilters(filters.typeFilter);
  };

  const applyFilters = (typeFilter) => {
    const filteredProducts = products.filter((product) => {
      const productPrice = parseFloat(product.newPrice);
      const matchesPrice = productPrice >= filters.price[0] && productPrice <= filters.price[1];

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
        onClick={handleFilterClick}
        className="w-full bg-yellow-500 hover:bg-yellow-400 text-white py-2 px-4 rounded-md cursor-pointer mt-4"
      >
        Фильтровать
      </button>

      <div className="border-t border-black mt-4"></div>

      <TypeFilter
        availableTypes={typeFilters[category]}
        typeCounts={typeCounts} // Передаем количество товаров
        selectedTypes={filters.typeFilter}
        onTypeFilterChange={handleTypeFilterChange}
      />
    </div>
  );
};

export default FilterPanel;



























