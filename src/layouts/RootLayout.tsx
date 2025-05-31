import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/navbar";
import Footer from "../components/Footer";

function RootLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  );
}

export default RootLayout;
