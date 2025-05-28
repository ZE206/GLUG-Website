import { Link, redirect } from "react-router-dom";
import logo from "../../assets/navbar-logo.svg";
function Navbar() {
  return (
    <nav className="bg-black font-primary w-full flex justify-between items-center px-8 py-1">
      <Link
        to="/"
        className="text-white text-3xl font-bold flex justify-center items-center text-wrap"
      >
        <img
          src={logo}
          alt="main-navbar-logo"
          height={100}
          width={100}
          className="object-cover m-4"
        />
        <div className="flex flex-col">
          <span>GLUG</span>
          <span>NITC</span>
        </div>
      </Link>
      <ul className="nav-menu flex text-white gap-8 text-xl font-normal items-center">
        <li className="nav-item">
          <Link to="/" className="nav-links bg-primary rounded-lg px-2 py-1">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-links">
            About Us
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-links">
            Projects
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-links">
            Linux installation Guide
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/events" className="nav-links">
            Blog
          </Link>
        </li>
        <li className="nav-item rounded-xl bg-[#1E1E1E] text-primary text-orange-500 font-light py-4 px-7">
          <button onClick={() => redirect("")}>Contribute</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
