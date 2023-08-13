import modelSm from "/assets/shared/mobile/image-best-gear.jpg";
import modelMd from "/assets/shared/tablet/image-best-gear.jpg";
import modelLg from "/assets/shared/desktop/image-best-gear.jpg";

const InfoSection = () => {
  return (
    <section className="my-28 flex flex-col  gap-8 px-[5%] lg:mt-10 lg:flex-row-reverse lg:items-center lg:justify-around lg:gap-16 xl:px-[10%]">
      <img
        src={modelSm}
        alt="Model with headphones"
        className="rounded-lg md:hidden"
      />
      <img
        src={modelMd}
        alt="Model with headphones"
        className=" hidden rounded-lg md:block lg:hidden"
      />
      <img
        src={modelLg}
        alt="Model with headphones"
        className="hidden w-[50%] rounded-lg lg:block"
      />
      <div className="flex flex-col gap-8 text-center lg:w-[500px] lg:text-left">
        <h2 className="text-3xl font-bold uppercase lg:text-5xl">
          Bringing you the <span className="text-gold-dark">best</span> audio
          gear
        </h2>
        <p className="text-sm font-medium leading-6 opacity-50 lg:text-base">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </section>
  );
};

export default InfoSection;
