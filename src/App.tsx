import { Link } from "react-router-dom";
import "./App.css";
import UserTestimonials from "./components/User_Testimonials";

import { FaCircleArrowRight } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

function App() {
  return (
    <div className="w-full bg-[#121212]">
      <div className="h-[2rem] md:h-[3rem]"></div>

      <div className="titleBlock">
        <div className="text-white text-5xl md:text-[4rem] lg:text-7xl mt-5 md:mt-0 px-1 md:px-3 lg:px-0 font-primary text-center font-semibold">May The Foss Be With You</div>
        <div className="body flex flex-col-reverse gap-2 mt-5 md:mt-0 md:gap-0 items-center md:flex-row md:justify-between">
          <div className="msg p-2 md:p-10 lg:p-20 lg:pl-[10vw] flex flex-col items-center md:items-start">
            <div className="subtitle text-white text-4xl md:text-5xl lg:text-7xl/snug font-semibold p-4 md:text-left text-center">
              <h1>Welcome to<br /> Glug NITC!</h1>
            </div>
            <div className="subbody mt-2 text-2xl font-primary md:text-left text-center text-[rgba(170,170,170,0.666)] md:ml-4 w-[80vw] md:w-[30vw]">
              We’re the GNU/Linux Users Group of NIT Calicut. From kernel to code, we dive deep into the world of FOSS, create impactful projects, and push the boundaries of what’s possible with linux and beyond.
            </div>
          </div>
          <div className="imgContainer">
            <img src="/hero_image.png" alt="" className="h-auto md:mr-[5vw] lg:mr-40 w-[80vw] md:w-[50vw] lg:w-auto object-cover rounded-md" />
          </div>
        </div>
      </div>

      <div className="exploreBlock flex flex-col items-center p-5 md:p-10 gap-[5rem] mt-10 md:mt-0">
        <div className="title self-start mb-0">
          Explore
        </div>
        <div className="mainServicesBlock bg-custom_orange h-[30vh] md:h-[30vh] lg:h-[35vh] w-[80vw] lg:w-[50vw] rounded-2xl md:flex md:justify-between p-5 md:p-10 text-2xl">
          <div className="textBox flex flex-col items-center justify-center md:items-start ">
            <div className="title inset-shadow-sm">
              <div className="openSource flex flex-col items-center justify-between md:block">
                <div className="line1 bg-white px-1 rounded-md">
                  Open Source
                </div>
                <div className="line2 bg-white px-1 rounded-md">
                  Projects
                </div>
              </div>
            </div>
            <Link to="/opensource-projects">
              <div className="LearnMore flex">
                <FaCircleArrowRight className="rotate-315 text-4xl mr-3" />
                Learn More
              </div>
            </Link>
          </div>
          <img src="/browser_click.png" alt="image" className="h-[20vh] hidden md:block" />
        </div>
      </div>

      <div className="ctaBlock flex justify-center p-3 mt-[5rem] md:mt-[10rem]">
        <div className="greyBox bg-gray-200 rounded-3xl p-7 md:p-5 md:pl-10 flex justify-between font-semibold w-[90vw] text-center md:text-left md:w-[75vw]">
          <div className="textBox flex flex-col justify-around">
            <div className="textContent text-2xl md:text-xl lg:text-3xl mb-6 md:mb-3">
              Tired of your computer begging for updates<br />every five minutes and crashing like it’s 1999?<br />Maybe it’s time to try Linux—because wasting<br />your life waiting on Windows is so 2000s
            </div>
            <Link to="/linux-installation-guide">
              <div className="installLinuxButton cursor-pointer bg-custom_blue h-[7vh] py-5 lg:w-[15vw] mb-2 mr-3 rounded-2xl flex justify-center items-center text-white text-2xl font-primary">
                Install Linux
              </div>
            </Link>
          </div>
          <div className="imageContainer">
            <img src="/weird_bob.png" alt="Hey" className="hidden md:block md:ml-10 md:mt-10 lg:ml-0 lg:mt-0 translate-y-[3.5rem]" />
          </div>
        </div>
      </div>

      <div className="h-[5rem] lg:h-[10rem]"></div>

      <div className="resourcesBlock flex flex-col p-15 items-center">lg
        <div className="title self-start text-center">
          Resources for Noobies
        </div>
        <div className="blueBox bg-custom_blue rounded-3xl h-[70vh] w-[80vw] md:h-[20vh] lg:h-[25vh] lg:w-[60vw] p-10 flex flex-col md:flex-row justify-between md:gap-5">
          <div className="textbox1 flex flex-col justify-center text-left">
            <div className="mb-2 text-white font-primary text-2xl">
              How to install Linux (With guides)
            </div>
            <Link to="/linux-installation-guide">
              <div className="learnMore text-xl text-custom_orange flex items-center">
                Learn More
                <FaArrowRight className="ml-2 rotate-315" />
              </div>
            </Link>
          </div>
          <div className="whiteLine bg-white h-[2px] md:h-auto md:w-[2px]"></div>
          <div className="textbox2 flex flex-col justify-center text-left">
            <div className="mb-2 text-white font-primary text-2xl">
              Beginner Tutorials
            </div>
            <Link to="/beginner-tutorials">
              <div className="learnMore text-xl text-custom_orange flex items-center">
                Learn More
                <FaArrowRight className="ml-2 rotate-315" />
              </div>
            </Link>
          </div>
          <div className="whiteLine bg-white h-[2px] md:h-auto md:w-[2px]"></div>
          <div className="textbox3 flex flex-col justify-center text-left">
            <div className="mb-2 text-white font-primary text-2xl">
              Recommended Softwares
            </div>
            <Link to="/recommended-software">
              <div className="learnMore text-xl text-custom_orange flex items-center">
                Learn More
                <FaArrowRight className="ml-2 rotate-315" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="h-[5rem] " />

      <div className="testimonialsBlock flex flex-col p-15 items-center">
        <div className="title self-start">
          Testimonials
        </div>
        <UserTestimonials />
      </div>
      <div className="h-[5rem] hidden md:block"></div>
    </div>
  );
}

export default App;
