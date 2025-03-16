import background1 from "../../../assets/image/banner/banner_1.jpeg";
import tile from "../../../assets/image/banner/banner_img_1.png";

const Banner1 = () => {
  return (
    <div
      className="w-full h-[500px] rounded-lg overflow-hidden flex-shrink-0 relative bg-cover bg-center"
      style={{ backgroundImage: `url(${background1})` }}
    >
      <div className="absolute inset-0 bg-black/10 flex flex-col justify-between text-white p-6">
        <h2 className="text-6xl font-bold ml-12 mt-6">
          <span>Выгодное предложение</span><br />
          <span>на гипсокартон</span><br />
          <span className="text-blue-500 text-7xl">KNAUF</span>
        </h2>
        <div className="space-y-1 ml-12 mb-10 text-2xl tracking-tight slide-in-left">
          <p>
            ГК Knauf 2500*1200*12.5 мм влагостойкий:{" "}
            <span className="font-semibold">392,5 грн</span>
          </p>
          <p>
            ГК Knauf 2500*1200*9.5 мм потолочный:{" "}
            <span className="font-semibold">312 грн</span>
          </p>
          <p>
            ГК Knauf 2500*1200*12.5 мм стеновой:{" "}
            <span className="font-semibold">312,5 грн</span>
          </p>
        </div>
        <div className="absolute right-12 bottom-22">
          <img src={tile} alt="Knauf logo" className="w-96 h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Banner1;






