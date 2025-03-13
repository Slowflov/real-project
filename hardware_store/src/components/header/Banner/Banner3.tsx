import React from "react";
import bannerImage3 from "../../../assets/image/banner/banner_3.jpeg";
import glue from '../../../assets/image/banner/banner_img_3.png'; 

const Banner3: React.FC = () => (
  <div className="w-full h-[500px] rounded-lg overflow-hidden flex-shrink-0 relative bg-cover bg-center" style={{ backgroundImage: `url(${bannerImage3})` }}>
    <div className="absolute inset-0 bg-black/20 flex items-center justify-between text-white p-6">
      {/* Левая часть текста */}
      <div className="flex flex-col justify-center space-y-4 w-1/2">
        <h2 className="text-6xl font-bold text-yellow-500">
          Высококачественные смеси <br /> UDK уже в нашем ассортименте
        </h2>
        <div className="space-y-2 text-xl font-semibold">
          <p>Штукатурка UDK MP1 - 164 грн</p>
          <p>Клей для плитки UDK TG Basic - 178 грн</p>
          <p>Клей для плитки UDK TG Standart - 274 грн</p>
          <p>Армирующий клей UDK TGR - 232 грн</p>
          <p>Клеевая смесь UDJ TIG - 209 грн</p>
        </div>
      </div>

      {/* Правая часть с картинкой */}
      <div className="w-1/2 h-full flex items-center justify-end pr-6">
        <img src={glue} alt="UDK" className="w-108 h-auto" />
      </div>
    </div>
  </div>
);

export default Banner3;
