import { useAppSelector } from "../../store/hooks";
import AdProducts from "./AdProducts";
import CategorySection from "./CategorySection";
import HeroSection from "./HeroSection";
import InfoSection from "./InfoSection";

const Home = () => {
  const isMenuActive = useAppSelector(
    (state) => state.activePageSlice.menuActive,
  );

  return (
    <main className={`${isMenuActive ? "bg-black/20 brightness-[.2]" : ""}`}>
      <HeroSection />
      <CategorySection />
      <AdProducts />
      <InfoSection />
    </main>
  );
};

export default Home;
