import NavPanel from './NavPanel';
import MainSections from './MainSections.jsx';
import ShowcaseBanner from './Banner/ShowcaseBanner.jsx';
import PopularCategories from './Сategories/PopularCategories.jsx';

const Header = () => {
  return (
    <header>
      <NavPanel />
      <MainSections/>
      <div className=" bg-gray-100 pt-5">
      <ShowcaseBanner/>
      <PopularCategories/>
      </div>
    </header>
  );
};

export default Header;

