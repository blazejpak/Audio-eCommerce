import { useAppSelector } from "../../store/hooks";

import CategorySection from "../../components/CategorySection";
import InfoSection from "../../components/InfoSection";
import ButtonGold from "../../ui/ButtonGold";

import yx9Sm from "../../assets/product-yx1-earphones/mobile/image-category-page-preview.jpg";
import yx9Md from "../../assets/product-yx1-earphones/tablet/image-category-page-preview.jpg";
import yx9Lg from "../../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg";

const Earphones = () => {
  const isMenuActive = useAppSelector(
    (state) => state.activePageSlice.menuActive,
  );

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
            src={yx9Sm}
            alt="YX1 WIRELESS
EARPHONES"
            className="rounded-lg md:hidden"
          />
          <img
            src={yx9Md}
            alt="YX1 WIRELESS
EARPHONES"
            className="hidden rounded-lg md:block lg:hidden"
          />
          <img
            src={yx9Lg}
            alt="YX1 WIRELESS
EARPHONES"
            className="hidden w-[50%] rounded-lg lg:block"
          />
          <div className="flex flex-col items-center  gap-6 md:w-[570px]">
            <h3 className="text-sm uppercase tracking-[10px] text-gold-dark">
              new product
            </h3>
            <h2 className="text-center text-3xl font-bold uppercase">
              YX1 WIRELESS EARPHONES
            </h2>
            <p className="text-center text-sm leading-6 opacity-50">
              Tailor your listening experience with bespoke dynamic drivers from
              the new YX1 Wireless Earphones. Enjoy incredible high-fidelity
              sound even in noisy environments with its active noise
              cancellation feature.
            </p>
            <ButtonGold text="see product" onClick={() => {}} />
          </div>
        </div>
      </section>

      <CategorySection />

      <InfoSection />
    </main>
  );
};

export default Earphones;
