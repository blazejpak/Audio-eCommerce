import { useAppSelector } from "../../store/hooks";

const Headphones = () => {
  const isMenuActive = useAppSelector(
    (state) => state.activePageSlice.menuActive,
  );

  return (
    <main
      className={`${
        isMenuActive ? "bg-black/20 brightness-[.2]" : "bg-[#FAFAFA]"
      }`}
    >
      <section className="flex h-[102px] items-center justify-center bg-[#191919]">
        <h1 className="text-3xl font-bold uppercase tracking-wider text-white">
          headphones
        </h1>
      </section>
    </main>
  );
};

export default Headphones;
