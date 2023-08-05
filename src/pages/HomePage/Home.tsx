import headerSmImg from "../../assets/home/mobile/image-header.jpg";
import headerMdImg from "../../assets/home/tablet/image-header.jpg";
import headerLgImg from "../../assets/home/desktop/image-hero.jpg";

import ButtonGold from "../../ui/buttonGold";

const Home = () => {
  const buttonHandler = () => {};

  return (
    <main>
      <section className="relative text-white">
        <div className="absolute top-[50%] flex translate-y-[-50%] flex-col items-center gap-6 px-[5%] text-center">
          <h2 className="text-sm uppercase tracking-[10px] opacity-50">
            new product
          </h2>
          <h1 className="text-4xl font-bold uppercase tracking-wider">
            xx99 mark ii headphones
          </h1>
          <p className="text-sm font-medium leading-6 opacity-75">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <ButtonGold onClick={buttonHandler} text="see product" />
        </div>
        <img
          alt="Image header smartphone - headphones"
          className="left-0 top-0  w-full md:hidden"
          src={headerSmImg}
        />
        <img
          alt="Image header tablet - headphones"
          className="left-0 top-0  hidden md:block lg:hidden"
          src={headerMdImg}
        />
        <img
          alt="Image header desktop - headphones"
          className="left-0 top-0  hidden lg:block"
          src={headerLgImg}
        />
      </section>
    </main>
  );
};

export default Home;
