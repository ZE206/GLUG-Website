import { Link } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Header/navbar";
import Footer from "./components/Footer";
import UserTestimonials from "./components/User_Testimonials";

function App() {
  return (
    <div className="w-full bg-[#1e1e1e]">
      <Navbar />
      <div className="h-[89px]"></div>
      <div className="landingBox relative w-full h-auto">
        <img src="src/assets/Landing-block.png" alt="landing_box" className="bg-[#1e1e1e] w-full h-auto"/>
        <img src="src/assets/the_penguins_with_bg.png" alt="GLUG_logo" className="absolute h-[83vh] right-[8rem] top-[6.5rem]" />
      </div>
      <div className="h-[10rem] "></div>
      <div className="servicesBlock relative">
        <img src="src/assets/services_block.png" alt="services-block" className="w-full h-auto" />
        <Link to="/projects">
          <button className="bg-transparent absolute top-[25.5rem] left-[25rem] h-[4.5rem] w-[15rem] cursor-pointer"></button>
        </Link>
      </div>
      <div className="h-[89px] "></div>
      <div className="ctaBlock relative">
        <img src="src/assets/CTA_block.png" alt="CTA Block" className="w-full"/>
        <Link to="/linux-guide">
          <button className="bg-transparent absolute top-[22.4rem] left-[13rem] h-[6rem] w-[15.7rem] cursor-pointer"></button>
        </Link>
      </div>
      <div className="h-[89px] "></div>
      <div className="resourcesBlock relative">
        <img src="src/assets/Resources-block.png" alt="Resources Block" className="w-full"/>
        <Link to="/linux-guide">
          <button className="bg-transparent absolute top-[24rem] left-[24rem] h-[3.3rem] w-[13rem] cursor-pointer"></button>
        </Link>
        <Link to="/tutorials">
          <button className="bg-transparent absolute top-[22.5rem] left-[53rem] h-[3.3rem] w-[13rem] cursor-pointer"></button>
        </Link>
        <Link to="/recommended">
          <button className="bg-transparent absolute top-[22rem] left-[75rem] h-[3.3rem] w-[12.5rem] cursor-pointer"></button>
        </Link>
      </div>
      <div className="h-[89px] "></div>
      <UserTestimonials/>
      <div className="h-[89px] "></div>
      <Footer/>
    </div>
  );
}

export default App;
