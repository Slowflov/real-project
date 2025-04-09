const SortOptions = ({ onChange }) => {
    return (
      <select
        onChange={(e) => onChange(e.target.value)}
        className="border border-gray-300 rounded-md px-5 py-2 text-lg"
      >
        <option value="popular">По популярности</option>
        <option value="latest">Сначала новые</option>
        <option value="price_asc">Цена по возрастанию</option>
        <option value="price_desc">Цена по убыванию</option>
      </select>
    );
  };
  
  export default SortOptions;