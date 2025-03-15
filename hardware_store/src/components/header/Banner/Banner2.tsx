import background2 from '../../../assets/image/banner/banner_2.jpeg';
import parquet from '../../../assets/image/banner/banner_img_2.png';

const Banner2 = () => (
  <div
    className="w-full h-[500px] rounded-lg overflow-hidden flex-shrink-0 relative bg-cover bg-center"
    style={{ backgroundImage: `url(${background2})` }}
  >
    <div className="absolute inset-0 bg-black/10 flex flex-col justify-between text-white p-6">
      {/* Основной заголовок */}
      <h2 className="text-6xl font-bold mt-12 ml-auto text-right pr-12">
        <span>Новые цены🔥на</span><br />
        <span className="block text-center mt-4">OSB плиты</span>
      </h2>

      {/* Текст с маленьким шрифтом */}
      <div className="absolute right-63 top-55 text-sm text-white font-semibold">
        <p>*при покупке от 5 шт</p>
      </div>

      {/* Список цен с правого нижнего угла с анимацией */}
      <div className="absolute right-44 bottom-12 space-y-1 text-3xl tracking-tight text-white slide-in-left">
        <p>Плита 10 мм - 370,5 грн</p>
        <p>Плита 12 мм - 416,5 грн</p>
        <p>Плита 15 мм - 540 грн</p>
        <p>Плита 18 мм - 628,7 грн</p>
        <p>Плита 22 мм - 780 грн</p>
      </div>

      {/* Логотип в правом нижнем углу */}
      <div className="absolute ml-12 mb-12 bottom-5">
        <img src={parquet} alt="Knauf logo" className="w-104 h-auto" />
      </div>
    </div>
  </div>
);

export default Banner2;





