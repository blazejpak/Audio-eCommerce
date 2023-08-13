import { useAppSelector } from "../../store/hooks";

import xx99ISm from "/assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg";
import xx99IMd from "/assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg";
import xx99ILg from "/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg";

import xx99IISm from "/assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg";
import xx99IIMd from "/assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg";
import xx99IILg from "/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";

import xx59Sm from "/assets/product-xx59-headphones/mobile/image-category-page-preview.jpg";
import xx59Md from "/assets/product-xx59-headphones/tablet/image-category-page-preview.jpg";
import xx59Lg from "/assets/product-xx59-headphones/desktop/image-category-page-preview.jpg";

import ButtonGold from "../../ui/ButtonGold";
import CategorySection from "../../components/CategorySection";
import InfoSection from "../../components/InfoSection";
import { useNavigate } from "react-router";

const Headphones = () => {
  const navigate = useNavigate();

  const buttonNavigateHandler = () => {
    navigate("/headphones/" + dataName);
  };

  const dataName = useAppSelector((state) => state.dataSlice.data).find(
    (item) => item.category === "headphones" && item.new,
  )?.slug;

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
          headphones
        </h1>
      </section>

      <section className="flex flex-col gap-32 px-[5%] xl:px-[10%]">
        <div className="mt-16 flex flex-col items-center justify-center gap-8 lg:flex-row lg:gap-32">
          <img
            src={xx99IISm}
            alt="XX99 Mark II
Headphones"
            className="rounded-lg md:hidden"
          />
          <img
            src={xx99IIMd}
            alt="XX99 Mark II
Headphones"
            className="hidden rounded-lg md:block lg:hidden"
          />
          <img
            src={xx99IILg}
            alt="XX99 Mark II
Headphones"
            className="hidden w-[50%] rounded-lg lg:block"
          />
          <div className="flex flex-col items-center  gap-6 md:w-[570px]">
            <h3 className="text-sm uppercase tracking-[10px] text-gold-dark">
              new product
            </h3>
            <h2 className="text-center text-3xl font-bold uppercase">
              XX99 Mark II Headphones
            </h2>
            <p className="text-center text-sm leading-6 opacity-50">
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.
            </p>
            <ButtonGold text="see product" onClick={buttonNavigateHandler} />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-8 lg:flex-row-reverse lg:gap-32">
          <img
            src={xx99ISm}
            alt="XX99 Mark I
Headphones"
            className="rounded-lg md:hidden"
          />
          <img
            src={xx99IMd}
            alt="XX99 Mark I
Headphones"
            className="hidden rounded-lg md:block lg:hidden"
          />
          <img
            src={xx99ILg}
            alt="XX99 Mark I
Headphones"
            className="hidden w-[50%] rounded-lg lg:block"
          />
          <div className="flex flex-col items-center  gap-6 md:w-[570px]">
            <h2 className="text-center text-3xl font-bold uppercase">
              XX99 Mark I Headphones
            </h2>
            <p className="text-center text-sm leading-6 opacity-50">
              As the gold standard for headphones, the classic XX99 Mark I
              offers detailed and accurate audio reproduction for audiophiles,
              mixing engineers, and music aficionados alike in studios and on
              the go.
            </p>
            <ButtonGold text="see product" onClick={() => {}} />
          </div>
        </div>

        <div className="mb-24 flex flex-col items-center justify-center gap-8 lg:flex-row lg:gap-32">
          <img
            src={xx59Sm}
            alt="XX59
Headphones"
            className="rounded-lg md:hidden"
          />
          <img
            src={xx59Md}
            alt="XX59
Headphones"
            className="hidden rounded-lg md:block lg:hidden"
          />
          <img
            src={xx59Lg}
            alt="XX59
Headphones"
            className="hidden w-[50%] rounded-lg lg:block"
          />
          <div className="flex flex-col items-center  gap-6 md:w-[570px]">
            <h2 className="text-center text-3xl font-bold uppercase">
              XX59 Headphones
            </h2>
            <p className="text-center text-sm leading-6 opacity-50">
              Enjoy your audio almost anywhere and customize it to your specific
              tastes with the XX59 headphones. The stylish yet durable versatile
              wireless headset is a brilliant companion at home or on the move.
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

export default Headphones;
