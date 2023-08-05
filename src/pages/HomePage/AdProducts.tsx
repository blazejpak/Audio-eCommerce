import speakersMenu from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import ButtonBlack from "../../ui/ButtonBlack";

const AdProducts = () => {
  const buttonHandler = () => {};

  return (
    <section className="px-[5px] ">
      <div className=" flex h-fit w-full flex-col items-center  rounded-lg bg-gold-dark py-14 text-white">
        <img src={speakersMenu} alt="ZX9 SPEAKER" />

        <div className="flex flex-col items-center gap-4 px-6 text-center">
          <h2 className="text-4xl font-bold uppercase leading-10 tracking-wider">
            ZX9 SPEAKER
          </h2>
          <p className="text-sm font-medium leading-7 opacity-75">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <ButtonBlack text="see product" onClick={buttonHandler} />
        </div>
      </div>
    </section>
  );
};

export default AdProducts;
