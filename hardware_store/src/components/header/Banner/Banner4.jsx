import bannerImage4 from "../../../assets/image/banner/banner_4.jpeg";
import baumit from '../../../assets/image/banner/banner_img_4.webp';

const Banner4 = () => (
    <div className="w-full h-[500px] rounded-lg overflow-hidden flex-shrink-0 relative bg-cover bg-center" style={{ backgroundImage: `url(${bannerImage4})` }}>
        <div className="absolute inset-0 bg-black/20 flex items-center justify-between text-white p-6">
            {/* Левая часть текста */}
            <div className="flex flex-col justify-start items-center space-y-4 w-1/2">
                <h2 className="absolute top-0 left-0 w-full text-center text-6xl font-bold text-white py-4">
                    Шок цена 👍
                </h2>

                {/* Текст с анимацией */}
                <div className="space-y-2 text-2xl font-semibold text-center mx-auto pt-12 slide-in-left">
                    <p className="text-4xl">Клей эластичный <span className="text-black text-4xl">Baumit</span></p>
                    <p className="text-4xl"><span className="text-black text-4xl">Flex</span><span className="text-red-500 text-4xl">Top</span> для всех видов</p>
                    <p className="text-4xl">плитки и камня</p>
                    <p className="text-5xl pt-8">568 грн</p>
                </div>
            </div>

            {/* Правая часть с картинкой */}
            <div className="w-1/2 h-full flex items-center justify-end pr-6 slide-in-right">
                <img src={baumit} alt="UDK" className="w-108 h-auto" />
            </div>
        </div>
    </div>
);

export default Banner4;