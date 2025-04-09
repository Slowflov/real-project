import React from 'react';
import { Link } from "react-router-dom";
import delivery from "../../assets/image/contactinfo/delivery.svg"
import pay from "../../assets/image/contactinfo/pay.svg"

const PaymentAndDelivery = () => {
    return (
        <div className="py-10 px-4 max-w-6xl mx-auto">
            <nav className="text-gray-600 text-sm mb-4">
                <Link to="/" className="hover:underline">Главная</Link> <span> » </span>
                <span className="text-gray-800 font-semibold">Оплата</span>
            </nav>

            <h1 className="text-4xl font-bold text-black mb-6">Оплата и доставка</h1>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 w-full justify-center">
                {/* Левая часть: информация о доставке */}
                <div className="w-full md:w-2/3 bg-white p-4 mr-8 shadow-xl h-122"> {/* Увеличиваем ширину и минимальную высоту */}
                    <div className="flex items-center mb-4">
                        <img src={pay} alt="Доставка" className="mr-6" />
                        <h2 className="text-2xl font-bold py-2">Доставка</h2>
                    </div>
                    <div className="border-b border-gray-300 mb-4"></div>
                    <p className="mb-4 pl-5 pb-2 text-xl relative text-black before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:rounded-full before:bg-yellow-400">
                        Доставка по Донецку транспортом нашей компании. Стоимость от 270 грн.
                    </p>
                    <p className="mb-4 pl-5 pb-2 text-xl relative text-black before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:rounded-full before:bg-yellow-400">
                        Доставка по почтовым отделениям.
                    </p>
                    <p className="mb-4 pl-5 pb-2 text-xl relative text-black before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:rounded-full before:bg-yellow-400">
                        Также Вы можете забрать заказ в нашем магазине:
                    </p>

                    {/* Таблица с адресом и телефоном */}
                    <table className="w-full text-left">
                        <tbody>
                            <tr className="border-b border-gray-300">
                                <td className="font-bold text-xl w-1/3 align-top">Адрес:</td>
                                <td className="text-xl">улица Веселая, 74, Донецк</td>
                            </tr>
                            <tr className="border-b border-gray-300">
                                <td className="font-bold text-xl pt-7 align-top">Телефон:</td>
                                <td>
                                    <div className="text-xl">+38 (050) 532-71-18</div>
                                    <div className="text-xl">+7 485 337 2306</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Правая часть: изображения и описание */}
                <div className="w-full md:w-2/3 bg-white p-4 shadow-xl"> {/* Увеличиваем ширину и минимальную высоту */}
                    <div className="flex items-center mb-4">
                        <img src={delivery} alt="Оплата" className="mr-6" />
                        <h2 className="text-2xl font-bold py-2">Оплата</h2>
                    </div>
                    <div className="border-b border-gray-300 mb-4"></div>
                    <p className="mb-4 pl-5 pb-2 relative text-xl text-black before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:rounded-full before:bg-yellow-400">
                        Перевод на онлайн карту.
                    </p>
                    <p className="mb-4 pl-5 relative text-xl text-black before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:rounded-full before:bg-yellow-400">
                        Оплата наличными (при доставке заказа, или в точке выдачи).
                    </p>
                </div>
            </div>
        </div>

    );
};


export default PaymentAndDelivery;


