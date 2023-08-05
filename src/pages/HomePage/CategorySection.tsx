import { NavLink } from "react-router-dom";

import headphonesMenu from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakersMenu from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesMenu from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import arrowRight from "../../assets/shared/desktop/icon-arrow-right.svg";

const CategorySection = () => {
  return (
    <section className="lg:mt-10 lg:px-[5%] xl:px-[10%]">
      <nav className=" z-10 h-fit w-full bg-white pb-8">
        <ul className="flex flex-col items-center gap-4 md:flex-row md:justify-center ">
          <li className="relative z-10 mt-8 flex h-[217px] w-[327px] flex-col text-black   before:absolute before:bottom-0 before:-z-10 before:h-[165px] before:w-full before:bg-[#F1F1F1] md:w-[223px] lg:w-[300px] xl:w-[350px]">
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
          <li className="relative z-10 mt-8 flex h-[217px] w-[327px] flex-col   text-black before:absolute before:bottom-0 before:-z-10 before:h-[165px] before:w-full before:bg-[#F1F1F1] md:w-[223px] lg:w-[300px] xl:w-[350px]">
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
          <li className="relative z-10 mt-8 flex h-[217px] w-[327px] flex-col   text-black before:absolute before:bottom-0 before:-z-10 before:h-[165px] before:w-full before:bg-[#F1F1F1] md:w-[223px] lg:w-[300px] xl:w-[350px]">
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
    </section>
  );
};

export default CategorySection;
