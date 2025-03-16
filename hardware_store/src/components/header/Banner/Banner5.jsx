import background5 from '../../../assets/image/banner/banner_5.jpeg';
import plitonit from '../../../assets/image/banner/banner_img_5.png';

const Banner5 = () => {
    return (
        <div
            className="w-full h-[500px] rounded-lg overflow-hidden flex-shrink-0 relative bg-cover bg-center"
            style={{ backgroundImage: `url(${background5})` }}>

            <div className="absolute inset-0 bg-black/10 flex flex-col justify-between text-white p-6">

                {/* Основной заголовок */}
                <h2 className="text-6xl font-bold mt-2 text-center ">
                    <span>Поспешите купить 💥</span><br />
                </h2>

                <div className="flex justify-end items-center w-full h-full text-right pr-35 pb-8">
                    <div className="text-center text-4xl tracking-tight text-white slide-in-left">
                        <p>Плиточный клей <span className="text-blue-300">Plitonit</span></p>
                        <p>для внутренних работ по</p>
                        <p>супер низкой цене</p>
                        <p className="text-yellow-500 text-5xl pt-8">164,5 грн</p>
                    </div>
                </div>

                <div className="absolute ml-32 mb-2 bottom-5 slide-in-right">
                    <img src={plitonit} alt="Knauf logo" className="w-54 h-auto" />
                </div>
            </div>
        </div>
    );
};

export default Banner5;
