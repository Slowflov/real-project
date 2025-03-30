import React, { useState, useEffect } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import TypeFilter from "./TypeFilter"; // Импортируем компонент фильтра по типу

const priceRanges = {
  osb: [100, 500],
  cement: [50, 2000],
  paint: [20, 1500],
};

const FilterPrix = ({ category, OsbProducts, onFilterChange }) => {
  const [filters, setFilters] = useState({ 
    price: priceRanges[category] || [0, 10000],
    typeFilter: false, 
  });

  useEffect(() => {
    setFilters({ price: priceRanges[category] || [0, 10000], typeFilter: false });
  }, [category]);

  const handleSliderChange = (value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      price: value,
    }));
  };

  const handleTypeFilterChange = (e) => {
    const newTypeFilter = e.target.checked;

    setFilters((prevFilters) => ({
      ...prevFilters,
      typeFilter: newTypeFilter,
    }));

    // Фильтрация сразу при изменении чекбокса
    const filteredProducts = OsbProducts.filter((product) => {
      const matchesPrice = product.newPrice >= filters.price[0] && product.newPrice <= filters.price[1];
      const matchesTypeFilter = newTypeFilter ? product.type === "влагостойкий" : true;
      return matchesPrice && matchesTypeFilter;
    });

    onFilterChange(filteredProducts);
  };

  const handleFilterClick = () => {
    const filteredProducts = OsbProducts.filter((product) => {
      const matchesPrice = product.newPrice >= filters.price[0] && product.newPrice <= filters.price[1];
      const matchesTypeFilter = filters.typeFilter ? product.type === "влагостойкий" : true;
      return matchesPrice && matchesTypeFilter;
    });

    onFilterChange(filteredProducts);
  };

  return (
    <div className="filter-panel bg-white px-6 py-6 rounded-lg shadow-md">
      <h3 className="font-bold text-xl mb-4 w-full text-center">Фильтровать по цене</h3>
      <div className="mb-4">
        <Slider
          range
          min={priceRanges[category]?.[0] || 0}
          max={priceRanges[category]?.[1] || 10000}
          step={10}
          value={filters.price}
          onChange={handleSliderChange}
        />
      </div>
      <div className="flex justify-between mb-4 ">
        <span>{filters.price[0]} грн</span>
        <span>{filters.price[1]} грн</span>
      </div>

      <button
        onClick={handleFilterClick}
        className="w-full bg-yellow-500 hover:bg-yellow-400 text-white py-2 px-4 rounded-md cursor-pointer"
      >
        Фильтровать
      </button>

      <div className="border-t border-black mt-4"></div>

      <TypeFilter 
        typeFilter={filters.typeFilter}
        onTypeFilterChange={handleTypeFilterChange}
      />
    </div>
  );
};

export default FilterPrix;


















