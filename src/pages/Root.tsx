import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <div className="grid grid-rows-[89px_1fr_650px] md:grid-rows-[89px_1fr_400px] ">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
