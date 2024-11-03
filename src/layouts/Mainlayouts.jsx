import { Outlet } from "react-router-dom";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import toast, { Toaster } from "react-hot-toast";

const Mainlayouts = () => {
    return (
      <div>
            <Toaster />
            {/* Navbar */}
            <Navbar></Navbar>
            {/* Dynamic Section */}
            <div className="min-h-[calc(100vh-250px)] py-16 container mx-auto px-20">
            <Outlet></Outlet>
            </div>
            {/* Footer */}
            <Footer></Footer>
      </div>
    );
};

export default Mainlayouts;