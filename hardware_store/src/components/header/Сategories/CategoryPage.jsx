import { motion } from "framer-motion";

const CategoryPage = ({ index, categories }) => {
  return (
    <motion.div
      className="flex transition-transform"
      animate={{ x: `-${index * 100}%` }} // Плавно сдвигаем слайдер
      transition={{ duration: 0.4, ease: "easeInOut" }}
      style={{ display: "flex" }} // Flexbox для выстраивания блоков
    >
      {/* Рендерим 6 элементов за раз */}
      {Array.from({ length: Math.ceil(categories.length / 6) }).map((_, pageIndex) => (
        <div
          key={pageIndex}
          className="min-w-full grid grid-cols-3 gap-4 py-12"
          style={{
            position: "relative", // Устанавливаем relative для точного позиционирования
            visibility: pageIndex === index ? "visible" : "hidden", // Показываем только активную страницу
          }}
        >
          {categories.slice(pageIndex * 6, (pageIndex + 1) * 6).map((cat) => (
            <div
              key={cat.id}
              className="flex items-center bg-white p-7 text-center rounded-lg shadow-md"
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="w-40 h-22 object-cover mr-10"
              />
              <div className="font-bold text-xl">{cat.name}</div>
            </div>
          ))}
        </div>
      ))}
    </motion.div>
  );
};

export default CategoryPage;




  

