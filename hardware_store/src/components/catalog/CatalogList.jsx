import { Link } from "react-router-dom";
import catalog1 from "../../assets/image/category/cat_4.png";
import catalog2 from "../../assets/image/category/cat_5.png";
import catalog3 from "../../assets/image/category/cat_2.png";
import catalog4 from "../../assets/image/category/cat_3.webp";
import catalog5 from "../../assets/image/category/cat_1.png";
import catalog6 from "../../assets/image/category/cat_7.webp";
import catalog7 from "../../assets/image/category/cat_6.jpg";
import catalog8 from "../../assets/image/category/cat_12.png";
import catalog9 from "../../assets/image/category/cat_8.png";
import catalog10 from "../../assets/image/category/cat_10.jpg";
import catalog11 from "../../assets/image/category/cat_11.png";
import catalog12 from "../../assets/image/category/cat_9.png";
import catalog13 from "../../assets/image/category/cat_13.png";
import catalog14 from "../../assets/image/category/cat_14.png";
import catalog15 from "../../assets/image/category/cat_15.png";
import catalog16 from "../../assets/image/category/cat_22.webp";
import catalog17 from "../../assets/image/category/cat_16.jpg";
import catalog18 from "../../assets/image/category/cat_17.jpg";
import catalog19 from "../../assets/image/category/cat_18.png";
import catalog20 from "../../assets/image/category/cat_19.webp";
import catalog21 from "../../assets/image/category/cat_20.jpeg";
import catalog22 from "../../assets/image/category/cat_22.webp";

const categories = [
  { id: 1, name: "OSB плиты", img: catalog1, link: "/catalog/osb" },
  { id: 2, name: "Шпаклевка", img: catalog2, link: "/catalog/shpaklevka" },
  { id: 3, name: "Гипсокартон", img: catalog3, link: "/catalog/gipsokarton" },
  { id: 4, name: "Цемент", img: catalog4, link: "/catalog/cement" },
  { id: 5, name: "Профиль", img: catalog5, link: "/catalog/profil" },
  { id: 6, name: "Грунтовка", img: catalog6, link: "/catalog/gruntovka" },
  { id: 7, name: "Кровельные материалы", img: catalog7, link: "/catalog/krovelnie-materialy" },
  { id: 8, name: "Утеплитель", img: catalog8, link: "/catalog/uteplitel" },
  { id: 9, name: "Пенопласт", img: catalog9, link: "/catalog/penoplast" },
  { id: 10, name: "Газоблоки UDK", img: catalog10, link: "/catalog/gazobloki-udk" },
  { id: 11, name: "ДВП и фанера", img: catalog11, link: "/catalog/dvp-i-fanera" },
  { id: 12, name: "Краска", img: catalog12, link: "/catalog/kraska" },
  { id: 13, name: "Гипс строительный", img: catalog13, link: "/catalog/gips-stroitelniy" },
  { id: 14, name: "Строительный и монтажный клей", img: catalog14, link: "/catalog/klei" },
  { id: 15, name: "смеси для пола, стяжки", img: catalog15, link: "/catalog/smesi-dlya-pola" },
  { id: 16, name: "Пленки на окна", img: catalog16, link: "/catalog/plenki-na-okna" },
  { id: 17, name: "Клей для плитки", img: catalog17, link: "/catalog/klei-dlya-plitki" },
  { id: 18, name: "Готовые смеси", img: catalog18, link: "/catalog/gotovye-smesi" },
  { id: 19, name: "Строительная химия", img: catalog19, link: "/catalog/stroitelnaya-himiya" },
  { id: 20, name: "Монтажная пена", img: catalog20, link: "/catalog/montazhnaya-pena" },
  { id: 21, name: "Силиконы и герметики", img: catalog21, link: "/catalog/silikony-i-germetiki" },
  { id: 22, name: "Сетки", img: catalog22, link: "/catalog/setki" },
];

const CatalogList = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Навигация */}
      <nav className="text-gray-600 text-sm mb-4">
        <Link to="/" className="hover:underline">Главная</Link> <span> » </span>
        <span className="text-gray-800 font-semibold">Каталог</span>
      </nav>

      {/* Заголовок */}
      <h1 className="text-4xl font-bold text-black mb-6">Каталог</h1>

      {/* Сетка из 22 блоков */}
      <div className="grid grid-cols-2 gap-6">
        {categories.map((category) => (
          <Link 
            to={category.link} 
            key={category.id} 
            className="flex items-center bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <img src={category.img} alt={category.name} className="w-24 h-24 object-cover rounded-lg" />
            <h2 className="ml-4 text-xl font-semibold">{category.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CatalogList;

