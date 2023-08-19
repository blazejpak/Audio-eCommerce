import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAppSelector } from "../store/hooks";

const Root = () => {
  const isMenuActive = useAppSelector(
    (state) => state.activePageSlice.menuActive,
  );
  const isCartActive = useAppSelector(
    (state) => state.activePageSlice.cartActive,
  );
  return (
    <div className="grid grid-rows-[89px_1fr_650px] overflow-x-hidden md:grid-rows-[89px_1fr_400px]">
      <Navbar />
      <div
        className={`${
          isMenuActive || isCartActive
            ? "bg-black/80 brightness-[.2]"
            : "bg-[#FAFAFA]"
        } `}
      >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
