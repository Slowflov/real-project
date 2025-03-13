import NavPanel from './NavPanel';
import MainSections from './MainSections';
import ShowcaseBanner from './Banner/ShowcaseBanner'

const Header = () => {
  return (
    <header>
      <NavPanel />
      <MainSections/>
      <div className=" bg-gray-100 pt-2">
      <ShowcaseBanner/>
      </div>
    </header>
  );
};

export default Header;

