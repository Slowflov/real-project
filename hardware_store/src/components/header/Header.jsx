import NavPanel from './NavPanel';
import MainSections from './MainSections.jsx';
import ShowcaseBanner from './Banner/ShowcaseBanner.jsx';
import PopularCategories from './Сategories/PopularCategories.jsx';
import PromoProductsSection from '../Sales/PromoProductsSection';
import AboutGlobalStroy from '../About/AboutGlobalStroy';
import GlobalStroyInfo from '../About/GlobalStroyInfo';

const Header = () => {
  return (
    <header>
      <NavPanel />
      <MainSections/>
      <div className=" bg-gray-100 pt-5">
      <ShowcaseBanner/>
      <PopularCategories/>
      <PromoProductsSection/>
      <AboutGlobalStroy/>
      <GlobalStroyInfo/>
      </div>
    </header>
  );
};

export default Header;

