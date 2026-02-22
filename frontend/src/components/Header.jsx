import HeaderTop from "./HeaderTop";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 bg-white">
      <HeaderTop />
      <Navbar />
    </header>
  );
};

export default Header;
