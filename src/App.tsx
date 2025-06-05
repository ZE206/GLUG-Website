import { Link } from "react-router-dom";
import "./App.css";
import UserTestimonials from "./components/User_Testimonials";

import { FaCircleArrowRight } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

function App() {  return (
    <div className="w-full bg-[#121212]">
      {/* <div className="h-[10rem]"></div> */}
      <div className="landingBox">
        <div className="text-white text-5xl md:text-7xl font-primary text-center font-semibold">May The Foss Be With You</div>
        <div className="body md:flex md:justify-between">
          <div className="msg p-2 md:p-20 md:pl-52 flex flex-col items-center md:items-start">
            <div className="subtitle text-white text-4xl md:text-7xl/snug font-semibold p-4 md:text-left text-center">
              <h1>Welcome to<br/> Glug NITC!</h1>
            </div>
            <div className="subbody mt-2 text-2xl font-primary md:text-left text-center text-[rgba(170,170,170,0.666)] md:ml-4 w-[80vw] md:w-[30vw]">
              We’re the GNU/Linux Users Group of NIT Calicut. From kernel to code, we dive deep into the world of FOSS, create impactful projects, and push the boundaries of what’s possible with linux and beyond.
            </div>
          </div>
          <div className="imgContainer relative hidden md:block">
            <img src="src/assets/home/bg_for_lux.png" alt="" className="h-[60vh] m-20 mr-40 hidden md:block object-cover"/>
            <div className="bg-[#ffffff]/40 h-[60vh] w-[37vw] absolute top-[5rem] left-[5rem] rounded-2xl"></div>
            <img src="src/assets/home/GLUG-logo_without_bg.png" alt="lux" className="absolute hidden md:block h-[60vh] top-[6rem] left-[10rem]" />
          </div>
        </div>
      </div>

      <div className="servicesBlock flex flex-col items-center p-5 md:p-10 gap-[5rem] mt-10 md:mt-0">
        <div className="exploreTitle self-start bg-custom_orange h-[7vh] w-[35vw] md:w-[18vw] rounded-sm left-[10rem] flex items-center justify-center text-3xl font-semibold  md:mb-5 ">
          Explore
        </div>
        <div className="mainServicesBlock bg-custom_orange h-[30vh] md:h-[40vh] w-[80vw] md:w-[50vw] rounded-2xl md:flex md:justify-between p-5 md:p-10 text-2xl">
          <div className="textBox flex flex-col justify-between md:p-10">
            <div className="title inset-shadow-sm">
              <div className="openSource">
                <div className="line1 bg-white h-[5vh] p-2 rounded-md w-[65vw] md:w-[15vw] flex justify-center items-center ">
                  Open Source
                </div>
                <div className="line2 bg-white rounded-md h-[5vh] w-[45vw] md:w-[11vw] p-2 flex justify-center items-center">
                  Projects
                </div>
              </div>
            </div>
            <Link to="/projects">
              <div className="LearnMore flex">
                <FaCircleArrowRight className="rotate-315 text-4xl mr-3"/>
                Learn More
              </div>
            </Link>
          </div>
          <img src="src/assets/home/browser_click.png" alt="image" className="h-[20vh] hidden md:block" />
        </div>
      </div>

      <div className="ctaBlock flex justify-center mt-[5rem] md:mt-[10rem]">
        <div className="greyBox left-[20rem] bg-gray-200 rounded-3xl md:h-[50vh] w-[80vw] md:w-[60vw] p-5 md:p-10 flex justify-around">
          <div className="textBox flex flex-col justify-between ">
            <div className="textContent text-2xl mb-4 md:mb-0">
            Tired of your computer begging for updates<br/>every five minutes and crashing like it’s 1999?<br/>Maybe it’s time to try Linux—because wasting<br/>your life waiting on Windows is so 2000s
            </div>
            <div className="installLinuxButton cursor-pointer bg-custom_blue h-[7vh] md:w-[10vw] mb-2 mr-3 rounded-2xl flex justify-center items-center text-white text-2xl font-primary">
              Install Linux
            </div>
          </div>
          <div className="imageContainer">
            <img src="src/assets/home/weird_bob.png" alt="Hey" className="hidden md:block" />
          </div>
        </div>
      </div>

      <div className="h-[10rem] "></div>

      <div className="resourcesBlock flex flex-col p-15 items-center">
        <div className="exploreTitle self-start bg-custom_orange h-[11vh] md:h-[7vh] p-2 md:p-0 md:w-[18vw] rounded-sm left-[10rem] flex items-center justify-center text-3xl font-semibold  mb-5 ">
          Resources for Noobies
        </div>
        <div className="blueBox bg-custom_blue rounded-3xl h-[70vh] w-[80vw] md:h-[25vh] md:w-[60vw] p-10 flex flex-col md:flex-row justify-between">
          <div className="textbox1 flex flex-col justify-center text-left">
            <div className="mb-2 text-white font-primary text-2xl">
              How to install Linux (With guides)
            </div>
            <Link to="/linux-guide">
            <div className="learnMore text-xl text-custom_orange flex items-center">
              Learn More 
              <FaArrowRight className="ml-2 rotate-315"/>
            </div>
            </Link>
          </div>
          <div className="whiteLine bg-white h-[2px] md:h-0 md:w-[2px]"></div>
          <div className="textbox2 flex flex-col justify-center text-left">
            <div className="mb-2 text-white font-primary text-2xl">
              Beginner Tutorials
            </div>
            <Link to="/beginner-tutorials">
            <div className="learnMore text-xl text-custom_orange flex items-center">
              Learn More
              <FaArrowRight className="ml-2 rotate-315"/>
            </div>
            </Link>
          </div>
          <div className="whiteLine bg-white h-[2px] md:h-0 md:w-[2px]"></div>
          <div className="textbox3 flex flex-col justify-center text-left">
            <div className="mb-2 text-white font-primary text-2xl">
              Recommended Softwares
            </div>
            <Link to="/recommended-software">
            <div className="learnMore text-xl text-custom_orange flex items-center">
              Learn More
              <FaArrowRight className="ml-2 rotate-315"/>
            </div>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="h-[5rem] "/>

      <div className="testimonialsBlock flex flex-col p-15 items-center">
        <div className="exploreTitle md:self-start bg-custom_orange h-[7vh] w-[50vw] md:w-[18vw] rounded-sm flex items-center justify-center text-3xl font-semibold  mb-5 ">
            Testimonials
          </div>
        <UserTestimonials/>
      </div>
      <div className="h-[10rem] "></div>
    </div>
  );
}

export default App;
