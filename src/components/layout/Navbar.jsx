import SecondNav from "../common/SecondNav";
import TopNav from "../common/TopNav";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-5000">
      <TopNav />
      <SecondNav />
    </header>
  );
};

export default Navbar;
