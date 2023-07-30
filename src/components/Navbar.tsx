import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { PiShoppingCart } from "react-icons/pi";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const menuActive = <nav className="absolute h-fit bg-white"></nav>;

  return (
    <header className="bg-[#191919] text-white flex items-center justify-between px-4 relative">
      <div onClick={() => setActive((prevState) => !prevState)}>
        <GiHamburgerMenu />
      </div>
      {active && menuActive}
      <h2 className="text-2xl font-bold">audiophile</h2>
      <PiShoppingCart size={23} />
    </header>
  );
};

export default Navbar;
