import React,{ useState } from "react";
import PuttyProducts from "../../../data/PuttyProducts.json";
import ProductCard from "../../card/ProductCard";
import FilterPrix from "../../card/FilterPanel";
import Pagination from "../../card/Pagination";

const PuttyPage = () => {
    const [filteredProducts, setFilteredProducts] = useState(ProfileProducts);
    const [currentPage, setCurrentPage] = useState (1);
    const productsPerPage = 9;

    const handleFilterChange = (filteredProducts) => {
        setFilteredProducts(filteredProducts);
        setCurrentPage(1);
    };

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice
    (indexOfFirstProduct, indexOfLastProduct);

    return (
        <div className="max-w-[1400px] mx-auto p-4">
         <nav className="text-gray-600 text-sm mb-4">
         <span>Главная » </span>
         <span className="text-gray-800 font-semibold">Шпаклевка</span>
         </nav>

         <h1 className="text-4xl font-bold text-black mb-6">Шпаклевка</h1>
        </div>
    )
}