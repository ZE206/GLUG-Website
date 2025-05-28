import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/navbar";

function RootLayout() {
  return (
    <div className="font-primary bg-background">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default RootLayout;
