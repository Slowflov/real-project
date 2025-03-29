import { Routes, Route } from "react-router-dom";
import NavPanel from "./NavPanel";
import MainSections from "./MainSections.jsx";
import ShowcaseBanner from "./Banner/ShowcaseBanner.jsx";
import PopularCategories from "../../Сategories/PopularCategories";
import PromoProductsSection from "../Sales/PromoProductsSection";
import AboutGlobalStroy from "../About/AboutGlobalStroy";
import GlobalStroyInfo from "../About/GlobalStroyInfo";
import ContactSection from "../Contact/ContactSection";
import Footer from "../Footer/Footer";
import CatalogList from "../catalog/CatalogList";
import OsbPage from "../catalog/osb/OsbPage";

const Header = () => {
  return (
    <header>
      <NavPanel />
      <MainSections />
      <div className="bg-gray-100 pt-5">
        <Routes>
          <Route path="/catalog" element={<CatalogList />} />
          <Route path="/category/:id" element={<OsbPage />} />
          <Route
            path="/*"
            element={
              <>
                <ShowcaseBanner />
                <PopularCategories />
                <PromoProductsSection />
                <AboutGlobalStroy />
                <GlobalStroyInfo />
              </>
            }
          />
        </Routes>
      </div>
      <ContactSection />
      <Footer />
    </header>
  );
};

export default Header;



