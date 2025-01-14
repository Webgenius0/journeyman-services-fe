import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <>
      <div className="font-poppins bg-[#FEFEFE]">
        <div className="sticky top-0 z-50">
          <Navbar />
        </div>
        <Outlet />
        <Footer />
        <ScrollRestoration />
        <Toaster/>
      </div>
    </>
  );
};

export default Layout;
