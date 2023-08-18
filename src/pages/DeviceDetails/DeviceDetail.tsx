import { useNavigate, useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import ButtonGold from "../../ui/ButtonGold";
import { useEffect, useState } from "react";
import CategorySection from "../../components/CategorySection";
import InfoSection from "../../components/InfoSection";
import AmountChanger from "../../ui/AmountChanger";
import ErrorPage from "../ErrorPage";

const DeviceDetail = () => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useAppDispatch();

  const [amountDevice, setAmountDevice] = useState<number>(1);

  useEffect(() => {
    setAmountDevice(1);
  }, [params]);

  const minusHandler = () => {
    if (amountDevice === 1) return;
    else setAmountDevice((prevState) => prevState - 1);
  };
  const plusHandler = () => {
    if (amountDevice === 10) return;
    else setAmountDevice((prevState) => prevState + 1);
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

  const deviceData = useAppSelector((state) => state.dataSlice.data).find(
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

  const sendToStoreHandler = () => {
    dispatch({
      type: "store/dispatchData",
      payload: {
        amount: amountDevice,
        name: deviceData.name,
        price: deviceData.price,
        slug: deviceData.slug,
      },
    });
  };

  // ERROR PARAMS
  if (deviceData === undefined) return <ErrorPage />;
  // ERROR PARAMS

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
        <div className="flex flex-col gap-8 md:flex-row md:justify-between md:gap-10">
          <img
            src={"../../../" + deviceData?.image.mobile}
            alt={deviceData?.name}
            className="md:hidden"
          />
          <img
            src={"../../../" + deviceData?.image.tablet}
            alt={deviceData?.name}
            className="hidden w-[50%] md:block lg:hidden"
          />
          <img
            src={"../../../" + deviceData?.image.desktop}
            alt={deviceData?.name}
            className="hidden w-[50%] lg:block"
          />
          <div className="flex flex-col gap-6 md:w-[50%]">
            {deviceData?.new && (
              <h2 className="text-sm uppercase tracking-[10px] text-gold-dark opacity-50">
                new product
              </h2>
            )}
            <h1 className="text-4xl font-bold uppercase leading-10 tracking-wider ">
              {deviceData?.name}
            </h1>
            <p className="text-sm font-medium opacity-50 md:text-base">
              {deviceData?.description}
            </p>
            <p className="text-lg font-bold tracking-widest">
              ${" "}
              {deviceData?.price.toLocaleString("en-US", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 3,
              })}
            </p>
            <div className="flex items-center gap-4">
              <AmountChanger
                minus={minusHandler}
                plus={plusHandler}
                amount={amountDevice}
              />
              <ButtonGold onClick={sendToStoreHandler} text="add to cart" />
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-28 px-[5%] xl:flex-row xl:px-[10%]">
        <div className="flex flex-col gap-4  xl:w-[70%]">
          <h2 className="text-2xl font-bold uppercase tracking-tight md:text-3xl">
            features
          </h2>
          <p className="font-medium leading-6 opacity-50">
            {deviceData?.features}
          </p>
        </div>

        <div className="flex flex-col gap-4 md:flex-row xl:w-[30%] xl:flex-col">
          <h2 className="text-2xl font-bold uppercase tracking-tight md:w-[50%] md:text-3xl xl:w-full">
            in the box
          </h2>
          <ul className="flex flex-col gap-2">
            {deviceData?.includes.map((item: any, id: number) => {
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
        </div>
      </section>

      <section className="flex flex-col gap-4 px-[5%] md:flex-row xl:justify-center xl:px-[10%]">
        <div className="flex flex-col gap-4">
          <div className="overflow-hidden rounded-lg">
            <img
              src={"../../../" + deviceData?.gallery.first.mobile}
              alt={`Images of ${deviceData?.name} product`}
              className="md:hidden"
            />
            <img
              src={"../../../" + deviceData?.gallery.first.tablet}
              alt={`Images of ${deviceData?.name} product`}
              className="hidden md:block lg:hidden"
            />
            <img
              src={"../../../" + deviceData?.gallery.first.desktop}
              alt={`Images of ${deviceData?.name} product`}
              className="hidden lg:block"
            />
          </div>

          <div className="overflow-hidden rounded-lg">
            <img
              src={"../../../" + deviceData?.gallery.second.mobile}
              alt={`Images of ${deviceData?.name} product`}
              className="md:hidden"
            />
            <img
              src={"../../../" + deviceData?.gallery.second.tablet}
              alt={`Images of ${deviceData?.name} product`}
              className="hidden md:block lg:hidden"
            />
            <img
              src={"../../../" + deviceData?.gallery.second.desktop}
              alt={`Images of ${deviceData?.name} product`}
              className="hidden lg:block"
            />
          </div>
        </div>
        <div className="overflow-hidden rounded-lg">
          <img
            src={"../../../" + deviceData?.gallery.third.mobile}
            alt={`Images of ${deviceData?.name} product`}
            className="md:hidden"
          />
          <img
            src={"../../../" + deviceData?.gallery.third.tablet}
            alt={`Images of ${deviceData?.name} product`}
            className="hidden md:block lg:hidden"
          />
          <img
            src={"../../../" + deviceData?.gallery.third.desktop}
            alt={`Images of ${deviceData?.name} product`}
            className="hidden lg:block"
          />
        </div>
      </section>

      <section className="flex flex-col gap-8 px-[5%] xl:px-[10%]">
        <h2 className="text-center text-2xl font-bold uppercase tracking-tight md:text-3xl">
          you may also like
        </h2>
        <div className="flex flex-col gap-14 md:flex-row md:gap-4">
          {deviceData?.others.map((item: any, id: number) => {
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

export default DeviceDetail;
