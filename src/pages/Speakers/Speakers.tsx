import { useAppSelector } from "../../store/hooks";

import CategorySection from "../../components/CategorySection";
import InfoSection from "../../components/InfoSection";
import ButtonGold from "../../ui/ButtonGold";

import zx9Sm from "/assets/product-zx9-speaker/mobile/image-category-page-preview.jpg";
import zx9Md from "/assets/product-zx9-speaker/tablet/image-category-page-preview.jpg";
import zx9Lg from "/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg";

import zx7Sm from "/assets//product-zx7-speaker/mobile/image-category-page-preview.jpg";
import zx7Md from "/assets//product-zx7-speaker/tablet/image-category-page-preview.jpg";
import zx7Lg from "/assets//product-zx7-speaker/desktop/image-category-page-preview.jpg";
import { useNavigate } from "react-router";

const Speakers = () => {
  const navigate = useNavigate();

  const isMenuActive = useAppSelector(
    (state) => state.activePageSlice.menuActive,
  );

  const buttonNavigateZx7Handler = () => {
    navigate("/speakers/zx7-speaker");
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const buttonNavigateZx9Handler = () => {
    navigate("/speakers/zx9-speaker");
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <main
      className={`${
        isMenuActive ? "bg-black/20 brightness-[.2]" : "bg-[#FAFAFA]"
      } `}
    >
      <section className="flex h-[102px] items-center justify-center bg-[#191919]">
        <h1 className="text-3xl font-bold uppercase tracking-wider text-white">
          speakers
        </h1>
      </section>

      <section className="flex flex-col gap-32 px-[5%] xl:px-[10%]">
        <div className="mt-16 flex flex-col items-center justify-center gap-8 lg:flex-row lg:gap-32">
          <img
            src={zx9Sm}
            alt="ZX9
SPEAKER"
            className="rounded-lg md:hidden"
          />
          <img
            src={zx9Md}
            alt="ZX9
SPEAKER"
            className="hidden rounded-lg md:block lg:hidden"
          />
          <img
            src={zx9Lg}
            alt="ZX9
SPEAKER"
            className="hidden w-[50%] rounded-lg lg:block"
          />
          <div className="flex flex-col items-center  gap-6 md:w-[570px]">
            <h3 className="text-sm uppercase tracking-[10px] text-gold-dark">
              new product
            </h3>
            <h2 className="text-center text-3xl font-bold uppercase">
              ZX9 SPEAKER
            </h2>
            <p className="text-center text-sm leading-6 opacity-50">
              Upgrade your sound system with the all new ZX9 active speaker.
              It’s a bookshelf speaker system that offers truly wireless
              connectivity -- creating new possibilities for more pleasing and
              practical audio setups.
            </p>
            <ButtonGold text="see product" onClick={buttonNavigateZx9Handler} />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-8 lg:flex-row-reverse lg:gap-32">
          <img
            src={zx7Sm}
            alt="ZX7
SPEAKER"
            className="rounded-lg md:hidden"
          />
          <img
            src={zx7Md}
            alt="ZX7
SPEAKER"
            className="hidden rounded-lg md:block lg:hidden"
          />
          <img
            src={zx7Lg}
            alt="ZX7
SPEAKER"
            className="hidden w-[50%] rounded-lg lg:block"
          />
          <div className="flex flex-col items-center  gap-6 md:w-[570px]">
            <h2 className="text-center text-3xl font-bold uppercase">
              ZX7 SPEAKER
            </h2>
            <p className="text-center text-sm leading-6 opacity-50">
              Stream high quality sound wirelessly with minimal loss. The ZX7
              bookshelf speaker uses high-end audiophile components that
              represents the top of the line powered speakers for home or studio
              use.
            </p>
            <ButtonGold text="see product" onClick={buttonNavigateZx7Handler} />
          </div>
        </div>
      </section>

      <CategorySection />

      <InfoSection />
    </main>
  );
};

export default Speakers;
