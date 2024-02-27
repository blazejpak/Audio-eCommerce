import ButtonBlack from "../../ui/ButtonBlack";
import ButtonWhite from "../../ui/ButtonWhite";

import zx9SmMenu from "/assets/home/mobile/image-speaker-zx9.png";
import zx9MdMenu from "/assets/home/tablet/image-speaker-zx9.png";
import zx9LgMenu from "/assets/home/desktop/image-speaker-zx9.png";

import zx7Sm from "/assets/home/mobile/image-speaker-zx7.jpg";
import zx7 from "/assets/home/desktop/image-speaker-zx7.png";

import yx1Sm from "/assets/home/mobile/image-earphones-yx1.jpg";
import yx1Md from "/assets/home/tablet/image-earphones-yx1.jpg";
import yx1Lg from "/assets/home/desktop/image-earphones-yx1.jpg";

import circle from "/assets/home/desktop/pattern-circles.svg";
import { useNavigate } from "react-router";

const AdProducts = () => {
  const navigate = useNavigate();

  const buttonZx9Handler = (): void => {
    navigate("/speakers/zx9-speaker");
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const buttonZx7Handler = (): void => {
    navigate("/speakers/zx7-speaker");
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const buttonYx1Handler = (): void => {
    navigate("/earphones/yx1-earphones");
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <section className="flex flex-col gap-8  px-[5%] lg:mt-10 xl:px-[10%]">
      <div className="flex h-fit w-full flex-col items-center gap-8 overflow-hidden rounded-lg bg-gold-dark  py-14 text-white md:gap-16 lg:flex-row lg:justify-center lg:gap-32">
        <div className="relative z-10">
          <img
            src={circle}
            alt="circle"
            className="absolute left-0 top-4 z-0  scale-[350%] md:scale-[450%] lg:top-[20%] lg:scale-[250%]"
            height={550}
          />
          <img src={zx9SmMenu} alt="ZX9 SPEAKER" className="w-44 md:hidden" />
          <img
            src={zx9MdMenu}
            alt="ZX9 SPEAKER"
            className="hidden  w-52 md:block lg:hidden "
            height={550}
          />
          <img
            src={zx9LgMenu}
            alt="ZX9 SPEAKER"
            className="hidden w-96 translate-y-[15%] lg:block"
            height={900}
          />
        </div>

        <div className="z-10 flex flex-col items-center gap-4 px-6 text-center lg:w-80 lg:gap-8">
          <h2 className="text-4xl font-bold uppercase leading-10 tracking-wider">
            ZX9 SPEAKER
          </h2>
          <p className="text-sm font-medium leading-7 opacity-75">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <ButtonBlack text="see product" onClick={buttonZx9Handler} />
        </div>
      </div>

      <div className="relative flex h-[320px] items-center overflow-hidden rounded-lg">
        <img
          src={zx7Sm}
          alt="ZX7 speaker"
          className="absolute max-h-[550px]  w-full rounded-lg object-cover md:hidden"
          height={500}
        />

        <img
          src={zx7}
          alt="ZX7 speaker"
          className="absolute hidden h-full w-full rounded-lg object-cover md:block"
          height={320}
        />

        <div className=" z-10 ml-8 flex flex-col gap-8 lg:ml-32">
          <h2 className="text-3xl font-bold uppercase tracking-widest">
            zx7 speaker
          </h2>
          <ButtonWhite onClick={buttonZx7Handler} text="see product" />
        </div>
      </div>

      <div className="flex flex-col gap-4 md:flex-row">
        <img src={yx1Sm} alt="yx1 earphones" className="md:hidden" />
        <img
          src={yx1Md}
          alt="yx1 earphones"
          className=" hidden w-[50%] md:block lg:hidden"
          height={270}
        />
        <img
          src={yx1Lg}
          alt="yx1 earphones"
          className="hidden w-full lg:block"
          height={430}
        />
        <div className="flex w-full flex-col items-center gap-8 rounded-lg bg-grey-lighter p-6 md:justify-center">
          <h2 className="text-3xl font-bold uppercase">yx1 earphones</h2>
          <ButtonWhite onClick={buttonYx1Handler} text="see product" />
        </div>
      </div>
    </section>
  );
};

export default AdProducts;
