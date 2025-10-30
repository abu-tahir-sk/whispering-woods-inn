import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Navbar2 from "./Navbar2";

const Main = () => {
  return (
    <div className=" biryani-font">
      <div>
        <div className="hidden md:flex">
          <Navbar />
        </div>
        <Navbar2></Navbar2>
      </div>
      <div className="w-11/12 mx-auto">
        <Outlet />
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
