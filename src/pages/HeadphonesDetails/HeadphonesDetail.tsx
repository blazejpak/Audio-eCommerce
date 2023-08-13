import { useNavigate, useParams } from "react-router";
import { useAppSelector } from "../../store/hooks";
import ButtonGold from "../../ui/ButtonGold";
import { useState } from "react";
import CategorySection from "../../components/CategorySection";
import InfoSection from "../../components/InfoSection";

const HeadphonesDetail = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [amountHeadphones, setAmountHeadphones] = useState(1);

  const minusHandler = () => {
    if (amountHeadphones === 1) return;
    else setAmountHeadphones((prevState) => prevState - 1);
  };
  const plusHandler = () => {
    if (amountHeadphones === 10) return;
    else setAmountHeadphones((prevState) => prevState + 1);
  };

  const isMenuActive = useAppSelector(
    (state) => state.activePageSlice.menuActive,
  );

  const backHandler = () => {
    const category = data.find((item) => item.slug === Object.values(params)[0])
      ?.category;
    navigate("/" + category);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const data = useAppSelector((state) => state.dataSlice.data);

  const headphoneData = useAppSelector((state) => state.dataSlice.data).find(
    (data) => data.slug === Object.values(params)[0],
  );

  const productHandler = (slug: string) => {
    if (data.find((item) => item.slug === slug)?.category === "headphones") {
      navigate("/headphones/" + slug);
      window.scrollTo({ top: 0, behavior: "instant" });
    } else if (
      data.find((item) => item.slug === slug)?.category === "earphones"
    ) {
      navigate("/earphones/" + slug);
      window.scrollTo({ top: 0, behavior: "instant" });
    } else if (
      data.find((item) => item.slug === slug)?.category === "speakers"
    ) {
      navigate("/speakers/" + slug);
      window.scrollTo({ top: 0, behavior: "instant" });
    } else return;
  };

  return (
    <main
      className={`flex flex-col gap-20 ${
        isMenuActive ? "bg-black/20 brightness-[.2]" : "bg-[#FAFAFA]"
      } `}
    >
      <section className="flex flex-col gap-6 px-[5%] xl:px-[10%]">
        <p
          onClick={backHandler}
          className="mt-4 cursor-pointer hover:text-gold-dark"
        >
          Go Back
        </p>
        <div className="flex flex-col gap-8">
          <img
            src={"../../../" + headphoneData?.image.mobile}
            alt={headphoneData?.name}
          />
          <div className="flex flex-col gap-6">
            {headphoneData?.new && (
              <h2 className="text-sm uppercase tracking-[10px] text-gold-dark opacity-50">
                new product
              </h2>
            )}
            <h1 className="text-4xl font-bold uppercase leading-10 tracking-wider md:text-6xl">
              {headphoneData?.name}
            </h1>
            <p className="text-sm font-medium opacity-50 md:text-base">
              {headphoneData?.description}
            </p>
            <p className="text-lg font-bold tracking-widest">
              ${" "}
              {headphoneData?.price.toLocaleString("en-US", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 3,
              })}
            </p>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-32 items-center justify-around bg-grey-normal px-2">
                <span
                  className="cursor-pointer opacity-25"
                  onClick={minusHandler}
                >
                  -
                </span>
                <input
                  //to change!
                  onChange={() => {}}
                  //to change!
                  type="text"
                  className="w-10 bg-transparent text-center outline-none"
                  value={amountHeadphones}
                />
                <span
                  className="cursor-pointer opacity-25"
                  onClick={plusHandler}
                >
                  +
                </span>
              </div>
              <ButtonGold onClick={() => {}} text="add to cart" />
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-4 px-[5%] xl:px-[10%]">
        <h2 className="text-2xl font-bold uppercase tracking-tight">
          features
        </h2>
        <p className="font-medium leading-6 opacity-50">
          {headphoneData?.features}
        </p>
      </section>

      <section className="flex flex-col gap-4 px-[5%] xl:px-[10%]">
        <h2 className="text-2xl font-bold uppercase tracking-tight">
          in the box
        </h2>
        <ul className="flex flex-col gap-2">
          {headphoneData?.includes.map((item, id) => {
            return (
              <li className="flex gap-6" key={id}>
                <p className="text-sm font-bold text-gold-dark">
                  {item.quantity}x
                </p>
                <p className="text-sm font-medium opacity-50">{item.item}</p>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="flex flex-col gap-4 px-[5%] xl:px-[10%]">
        <div className="flex flex-col gap-4">
          <div className="overflow-hidden rounded-lg">
            <img
              src={"../../../" + headphoneData?.gallery.first.mobile}
              alt={`Images of ${headphoneData?.name} product`}
              className="md:hidden"
            />
            <img
              src={"../../../" + headphoneData?.gallery.first.tablet}
              alt={`Images of ${headphoneData?.name} product`}
              className="hidden md:block lg:hidden"
            />
            <img
              src={"../../../" + headphoneData?.gallery.first.desktop}
              alt={`Images of ${headphoneData?.name} product`}
              className="hidden lg:block"
            />
          </div>

          <div className="overflow-hidden rounded-lg">
            <img
              src={"../../../" + headphoneData?.gallery.second.mobile}
              alt={`Images of ${headphoneData?.name} product`}
              className="md:hidden"
            />
            <img
              src={"../../../" + headphoneData?.gallery.second.tablet}
              alt={`Images of ${headphoneData?.name} product`}
              className="hidden md:block lg:hidden"
            />
            <img
              src={"../../../" + headphoneData?.gallery.second.desktop}
              alt={`Images of ${headphoneData?.name} product`}
              className="hidden lg:block"
            />
          </div>
        </div>
        <div className="overflow-hidden rounded-lg">
          <img
            src={"../../../" + headphoneData?.gallery.third.mobile}
            alt={`Images of ${headphoneData?.name} product`}
            className="md:hidden"
          />
          <img
            src={"../../../" + headphoneData?.gallery.third.tablet}
            alt={`Images of ${headphoneData?.name} product`}
            className="hidden md:block lg:hidden"
          />
          <img
            src={"../../../" + headphoneData?.gallery.third.desktop}
            alt={`Images of ${headphoneData?.name} product`}
            className="hidden lg:block"
          />
        </div>
      </section>

      <section className="flex flex-col gap-8 px-[5%] xl:px-[10%]">
        <h2 className="text-center text-2xl font-bold uppercase tracking-tight">
          you may also like
        </h2>
        <div className="flex flex-col gap-14">
          {headphoneData?.others.map((item, id) => {
            return (
              <div
                key={id}
                className="flex flex-col items-center justify-center gap-8"
              >
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={"../../../" + item.image.mobile}
                    alt={item.name}
                    className="md:hidden"
                  />
                  <img
                    src={"../../../" + item.image.tablet}
                    alt={item.name}
                    className="hidden md:block lg:hidden"
                  />
                  <img
                    src={"../../../" + item.image.desktop}
                    alt={item.name}
                    className="hidden lg:block"
                  />
                </div>
                <h3 className="text-2xl font-bold uppercase">{item.name}</h3>
                <ButtonGold
                  onClick={() => productHandler(item.slug)}
                  text="see product"
                />
              </div>
            );
          })}
        </div>
      </section>

      <CategorySection />

      <InfoSection />
    </main>
  );
};

export default HeadphonesDetail;
