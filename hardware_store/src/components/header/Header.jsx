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
import Profile from "../catalog/profil/ProfilePage";
import Putty from "../catalog/putty/PuttyPage";

const Header = () => {
  return (
    <header>
      <NavPanel />
      <MainSections />
      <div className="bg-gray-100 pt-5">
        <Routes>
          <Route path="/catalog" element={<CatalogList />} />
          <Route path="/category/osb" element={<OsbPage />} />
          <Route path="/category/profil" element={<Profile />} />
          <Route path="/category/putty" element={<Putty />} />
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



