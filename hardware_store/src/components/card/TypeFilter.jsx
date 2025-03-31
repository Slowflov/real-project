import React from "react";

const TypeFilter = ({ availableTypes, selectedTypes, onTypeFilterChange }) => {
  return (
    <div className="mt-4">
      <h4 className="font-semibold text-lg ml-4">Тип</h4>
      {availableTypes?.map((type) => (
        <div key={type} className="flex items-center mt-2 ml-6">
          <input
            type="checkbox"
            id={type}
            checked={selectedTypes.includes(type)}
            onChange={onTypeFilterChange}
            value={type}
            className="mr-2 scale-250"
          />
          <label htmlFor={type} className="text-xl pl-4">{type}</label>
        </div>
      ))}
    </div>
  );
};

export default TypeFilter;











