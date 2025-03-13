import logoViber from '../../assets/image/logo/pngegg.png';
import { ShoppingCart } from "lucide-react";

const NavPanel = () => {
  return (
    <>
      {/* Баннер в верхней части */}
      <section className="bg-yellow-500 text-black text-center py-1">
        <p className="text-sm font-medium">
          Внимание! Некоторые цены и наличие товара неактуальны, просьба уточнять у менеджера.
        </p>
      </section>

      <header className="bg-white py-[35px] px-4">
        <div className="container mx-auto flex justify-between items-center">
          
          {/* Логотип и описание */}
          <div className="flex flex-col items-center pb-[3px] flex-grow">
            <h1 className="text-3xl font-bold text-black">
              <span className="text-yellow-500">Global</span>Строй
            </h1>
            <p className="text-xs m-0 tracking-tight text-black">Стройматериалы и инструменты</p>
          </div>
          
          {/* Поисковая панель */}
          <div className="flex items-center flex-grow justify-center">
            <input
              type="search"
              placeholder="Поиск товаров..."
              className="p-2 rounded-l-md w-full max-w-[400px] border-1 border-yellow-500 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 text-gray-500"
            />
          </div>

          {/* Контактные данные и кнопка заказа звонка */}
          <div className="flex items-center space-x-4 flex-grow justify-end">
            <div className="flex flex-col items-start">
              <p className="text-sm text-black">+38 (050) 532-71-18</p>
              <p className="text-sm flex items-center text-black">
                <img src={logoViber} alt="Viber" className="h-4 w-4 mr-2" />
                +7 485 337 2306
              </p>
            </div>
            <button className="bg-yellow-500 hover:bg-yellow-400 text-gray-100 px-4 py-2 rounded-md cursor-pointer">
              Заказать звонок
            </button>
          </div>

          {/* Корзина и товар(ы) */}
          <div className="flex items-center space-x-4 flex-grow justify-end">
            <button className="flex items-center text-lg font-bold cursor-pointer py-[-1px] px-[15px] rounded-md hover:bg-gray-200 space-x-2">
              <ShoppingCart className="w-6 h-6 mr-[18px] text-gray-400" /> {/* Иконка корзины */}
              <div className="flex flex-col items-start pr-[20px]">
                <span className="text-base text-black">Корзина</span>
                <p className="text-sm pl-[2px] text-gray-400">Товар(ы)</p>
              </div>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavPanel;



