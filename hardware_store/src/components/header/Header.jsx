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
import Promo from "../catalog/promo/PromoPage.jsx";
import RetExEnch from "../pages/ReturnExchange.jsx";
import LocationInfo from "../Contact/LocationInfo.jsx";
import PaymentAndDelivery from "../pages/PaymentAndDelivery.jsx";

import OsbPage from "../catalog/osb/OsbPage";
import Profile from "../catalog/profil/ProfilePage";
import Putty from "../catalog/putty/PuttyPage";
import Cement from "../catalog/cement/CementPage";
import Drywall from "../catalog/drywall/DrywallPage.jsx";
import Roofing from "../catalog/roofing/RoofingPage.jsx";
import Primer from "../catalog/primer/PrimerPage.jsx";
import GasBlock from "../catalog/gasblock/GasBlockPage.jsx";
import Foam from "../catalog/foam/FoamPage.jsx";
import Plywood from "../catalog/plywood/PlywoodPage.jsx";
import Paint from "../catalog/paint/PaintPage.jsx";

const Header = () => {
  return (
    <header>
      <NavPanel />
      <MainSections />
      <div className="bg-gray-100 pt-5">
        <Routes>
          <Route path="/PayAndDel" element={<PaymentAndDelivery />} />
          <Route path="/LocationInfo" element={<LocationInfo />} />
          <Route path="/RetExEnch" element={<RetExEnch />} />
          <Route path="/promo" element={<Promo />} />
          <Route path="/catalog" element={<CatalogList />} />

          <Route path="/category/osb" element={<OsbPage />} />
          <Route path="/category/profil" element={<Profile />} />
          <Route path="/category/putty" element={<Putty />} />
          <Route path="/category/cement" element={<Cement />} />
          <Route path="/category/drywall" element={<Drywall />} />
          <Route path="/category/roofing" element={<Roofing />} />
          <Route path="/category/primer" element={<Primer />} />
          <Route path="/category/gasblock" element={<GasBlock />} />
          <Route path="/category/foam" element={<Foam />} />
          <Route path="/category/plywood" element={<Plywood />} />
          <Route path="/category/paint" element={<Paint />} />
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



