import React from "react";

const TypeFilter = ({ typeFilter, onTypeFilterChange }) => {
  return (
    <div className="mt-4">
      <h4 className="font-semibold text-lg ml-4">Тип</h4>
      <div className="flex items-center mt-2 ml-6">
        <input
          type="checkbox"
          id="typeFilter"
          checked={typeFilter}
          onChange={onTypeFilterChange}
          className="mr-2 scale-250"
        />
        <label htmlFor="typeFilter" className="text-xl pl-4">Влагостойкий</label>
      </div>
    </div>
  );
};

export default TypeFilter;





