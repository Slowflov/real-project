import React, { useEffect } from "react";

const SortProducts = ({ sortType, setSortType, filteredProducts, setFilteredProducts }) => {
  useEffect(() => {
    const sorted = [...filteredProducts];

    // Функция для преобразования строки в число
    const parsePrice = (price) => {
      if (typeof price === "string") {
        // Заменяем запятую на точку и конвертируем в число
        return parseFloat(price.replace(",", "."));
      }
      return price;
    };

    // Функция для вычисления скидки
    const getDiscountAmount = (product) => {
      if (product.customPrice && product.newPrice) {
        const originalPrice = parsePrice(product.customPrice);
        const discountPrice = parsePrice(product.newPrice);
        return originalPrice - discountPrice; // Разница между ценами
      }
      return 0; // Если скидки нет, возвращаем 0
    };

    // Сортировка по скидке (разнице между обычной и новой ценой)
    if (sortType === "discount") {
      sorted.sort((a, b) => {
        const discountA = getDiscountAmount(a);
        const discountB = getDiscountAmount(b);
        return discountA - discountB; // Сортировка по возрастанию скидки
      });
    } else if (sortType === "price_asc") {
      sorted.sort((a, b) => parsePrice(a.newPrice) - parsePrice(b.newPrice));
    } else if (sortType === "price_desc") {
      sorted.sort((a, b) => parsePrice(b.newPrice) - parsePrice(a.newPrice));
    } else if (sortType === "latest") {
      sorted.sort((a, b) => b.id - a.id);
    }

    // Обновляем состояние только если отсортированные данные изменены
    const isFilteredProductsChanged = JSON.stringify(sorted) !== JSON.stringify(filteredProducts);
    if (isFilteredProductsChanged) {
      setFilteredProducts(sorted);
    }
  }, [sortType, filteredProducts, setFilteredProducts]);

  return (
    <div>
      <select value={sortType} onChange={(e) => setSortType(e.target.value)} className="border border-gray-300 rounded-md px-7 py-3 text-xl ml-2 mr-5 focus:outline-none w-full sm:w-auto">
        <option value="latest">Сначала новые</option>
        <option value="price_asc">Цена по возрастанию</option>
        <option value="price_desc">Цена по убыванию</option>
        <option value="discount">По скидке</option>
      </select>
    </div>
  );
};

export default SortProducts;








