import { useNavigate, useParams } from "react-router";
import { useAppSelector } from "../../store/hooks";
import ButtonGold from "../../ui/ButtonGold";
import { useState } from "react";

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

  console.log(amountHeadphones);

  const isMenuActive = useAppSelector(
    (state) => state.activePageSlice.menuActive,
  );

  const backHandler = () => {
    navigate(-1);
  };

  const headphoneData = useAppSelector((state) => state.dataSlice.data).find(
    (data) => data.slug === Object.values(params)[0],
  );

  console.log(headphoneData);

  return (
    <main
      className={`${
        isMenuActive ? "bg-black/20 brightness-[.2]" : "bg-[#FAFAFA]"
      } `}
    >
      <section className="flex flex-col gap-6 px-[5%] xl:px-[10%]">
        <p onClick={backHandler} className="mt-4">
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
            <p className="font-bold tracking-widest">
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
    </main>
  );
};

export default HeadphonesDetail;
