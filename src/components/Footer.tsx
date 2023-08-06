import { Link, NavLink } from "react-router-dom";
import logo from "../assets/shared/desktop/logo.svg";

import facebook from "../assets/shared/desktop/icon-facebook.svg";
import twitter from "../assets/shared/desktop/icon-twitter.svg";
import instagram from "../assets/shared/desktop/icon-instagram.svg";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-12 bg-black-lighter px-[5%] pt-12 text-white xl:px-[10%]">
      <NavLink to="/">
        <img src={logo} alt="logo" />
      </NavLink>

      <nav>
        <ul className="flex flex-col items-center gap-4 text-xs font-bold uppercase tracking-widest ">
          <li className="p-1 transition-colors hover:text-gold-dark">
            <NavLink to="/">home</NavLink>
          </li>
          <li className="p-1 transition-colors hover:text-gold-dark">
            <NavLink to="/">headphones</NavLink>
          </li>
          <li className="p-1 transition-colors hover:text-gold-dark">
            <NavLink to="/">speakers</NavLink>
          </li>
          <li className="p-1 transition-colors hover:text-gold-dark">
            <NavLink to="/">earphones</NavLink>
          </li>
        </ul>
      </nav>

      <p className="text-center text-sm font-medium opacity-50">
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>

      <div className="flex flex-col items-center gap-12">
        <p className="text-sm font-bold opacity-50">
          Copyright 2021. All Rights Reserved
        </p>

        <div className="flex gap-4">
          <a href="https://github.com/blazejpak" className="cursor-pointer">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="https://github.com/blazejpak" className="cursor-pointer">
            <img src={twitter} alt="twitter" />
          </a>
          <a href="https://github.com/blazejpak" className="cursor-pointer">
            <img src={instagram} alt="instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
