import AdProducts from "./AdProducts";
import CategorySection from "../../components/CategorySection";
import HeroSection from "./HeroSection";
import InfoSection from "../../components/InfoSection";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <CategorySection />
      <AdProducts />
      <InfoSection />
    </main>
  );
};

export default Home;
