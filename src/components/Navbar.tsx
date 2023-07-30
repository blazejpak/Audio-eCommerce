import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { PiShoppingCart } from "react-icons/pi";

import headphonesMenu from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakersMenu from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesMenu from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import arrowRight from "../assets/shared/desktop/icon-arrow-right.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const menuActive = (
    <nav className="absolute top-[89px] h-fit w-full bg-white">
      <ul className="flex flex-col items-center gap-4">
        <li className="relative z-10 mt-8 flex h-[217px] w-[327px] flex-col   text-black before:absolute before:bottom-0 before:-z-10 before:h-[165px] before:w-full before:bg-[#F1F1F1]">
          <img
            src={headphonesMenu}
            className="h-32 object-contain "
            alt="Headphones image"
          />
          <div className="flex flex-col items-center gap-4">
            <h3 className="font-bold uppercase tracking-wider">headphones</h3>
            <NavLink className="flex items-center gap-3 " to="/">
              <span className="font-bold uppercase tracking-wider opacity-50">
                shop
              </span>
              <img src={arrowRight} alt="Arrow right" className="h-3" />
            </NavLink>
          </div>
        </li>
        <li className="relative z-10 mt-8 flex h-[217px] w-[327px] flex-col   text-black before:absolute before:bottom-0 before:-z-10 before:h-[165px] before:w-full before:bg-[#F1F1F1]">
          <img
            src={speakersMenu}
            className="h-32 object-contain "
            alt="Speakers image"
          />
          <div className="flex flex-col items-center gap-4">
            <h3 className="font-bold uppercase tracking-wider">speakers</h3>
            <NavLink className="flex items-center gap-3 " to="/">
              <span className="font-bold uppercase tracking-wider opacity-50">
                shop
              </span>
              <img src={arrowRight} alt="Arrow right" className="h-3" />
            </NavLink>
          </div>
        </li>
        <li className="relative z-10 mt-8 flex h-[217px] w-[327px] flex-col   text-black before:absolute before:bottom-0 before:-z-10 before:h-[165px] before:w-full before:bg-[#F1F1F1]">
          <img
            src={earphonesMenu}
            className="h-32 object-contain "
            alt="Earphones image"
          />
          <div className="flex flex-col items-center gap-4">
            <h3 className="font-bold uppercase tracking-wider">earphones</h3>
            <NavLink className="flex items-center gap-3 " to="/">
              <span className="font-bold uppercase tracking-wider opacity-50">
                shop
              </span>
              <img src={arrowRight} alt="Arrow right" className="h-3" />
            </NavLink>
          </div>
        </li>
      </ul>
    </nav>
  );

  return (
    <header className="relative flex items-center justify-between bg-[#191919]  text-white">
      <div
        className="ml-4"
        onClick={() => setActive((prevState) => !prevState)}
      >
        <GiHamburgerMenu size={20} />
      </div>
      {active && menuActive}
      <h2 className="text-2xl font-bold">audiophile</h2>
      <div className="mr-4">
        <PiShoppingCart size={23} />
      </div>
    </header>
  );
};

export default Navbar;
