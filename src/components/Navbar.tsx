import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { PiShoppingCart } from "react-icons/pi";
import logo from "../assets/shared/desktop/logo.svg";

import headphonesMenu from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakersMenu from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesMenu from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import arrowRight from "../assets/shared/desktop/icon-arrow-right.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState<boolean>(false);

  const menuActive = (
    <motion.nav
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ x: "-100%", opacity: 0 }}
      className="absolute top-[89px] z-20 h-fit w-full  bg-white pb-8 lg:hidden"
    >
      <ul className=" flex flex-col items-center gap-4">
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
    </motion.nav>
  );

  return (
    <header className="relative  flex items-center justify-between  border-b-[1px] border-white border-opacity-10 bg-[#191919] text-white lg:px-[10%]">
      <div
        className="ml-4 lg:hidden"
        onClick={() => setActive((prevState) => !prevState)}
      >
        <GiHamburgerMenu size={20} />
      </div>
      <AnimatePresence>{active && menuActive}</AnimatePresence>
      <NavLink to="/">
        <img src={logo} alt="logo" />
      </NavLink>
      <nav className="hidden lg:block">
        <ul className="flex gap-8 text-sm font-bold uppercase tracking-widest">
          <li>
            <NavLink to="/">home</NavLink>
          </li>
          <li>
            <NavLink to="/">headphones</NavLink>
          </li>
          <li>
            <NavLink to="/">speakers</NavLink>
          </li>
          <li>
            <NavLink to="/">earphones</NavLink>
          </li>
        </ul>
      </nav>
      <div className="mr-4">
        <PiShoppingCart size={24} />
      </div>
    </header>
  );
};

export default Navbar;
