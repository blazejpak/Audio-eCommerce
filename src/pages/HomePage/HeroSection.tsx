import headerSmImg from "/assets/home/mobile/image-header.jpg";
import headerMdImg from "/assets/home/tablet/image-header.jpg";
import headerLgImg from "/assets/home/desktop/image-hero.jpg";

import { useNavigate } from "react-router";

import ButtonGold from "../../ui/ButtonGold";
import { useAppSelector } from "../../store/hooks";

const HeroSection = () => {
  const navigate = useNavigate();

  const dataName = useAppSelector((state) => state.dataSlice.data).find(
    (item) => item.category === "headphones" && item.new,
  )?.slug;

  const buttonNavigateHandler = (): void => {
    navigate("/headphones/" + dataName);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <section className="relative flex flex-col items-center justify-center bg-[#191919] text-white lg:items-start lg:px-[5%] xl:px-[10%]">
      <div className="absolute top-[50%] flex translate-y-[-50%] flex-col items-center gap-6  px-[5%] text-center md:w-[380px] md:px-0  lg:items-start lg:text-left">
        <h2 className="text-sm uppercase tracking-[10px] opacity-50 ">
          new product
        </h2>
        <h1 className="text-4xl font-bold uppercase leading-10 tracking-wider md:text-6xl">
          xx99 mark ii headphones
        </h1>
        <p className="text-sm font-medium opacity-75 md:text-base">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <ButtonGold onClick={buttonNavigateHandler} text="see product" />
      </div>
      <img
        alt="Image header smartphone - headphones"
        className="left-0 top-0  w-full md:hidden"
        src={headerSmImg}
        height={580}
      />
      <img
        alt="Image header tablet - headphones"
        className="left-0 top-0  hidden md:block lg:hidden"
        src={headerMdImg}
        height={500}
      />
      <img
        alt="Image header desktop - headphones"
        className="left-0 top-0  hidden lg:block"
        src={headerLgImg}
        height={550}
      />
    </section>
  );
};

export default HeroSection;
