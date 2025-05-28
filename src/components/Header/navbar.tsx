import { Link, redirect, useLocation } from "react-router-dom";
import logo from "../../assets/navbar-logo.svg";
function Navbar() {
  const location = useLocation();
  console.log(location.pathname)
  return (
    <nav className="bg-black flex justify-between items-center px-8 py-1">
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
      </Link>{" "}
      <ul className="nav-menu flex text-white gap-8 text-xl font-normal items-center">
        <li className="nav-item">
          <Link
            to="/"
            className={`nav-links  ${
              location.pathname === "/" ? "nav-link-selected" : ""
            }`}
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/about"
            className={`nav-links  ${
              location.pathname.startsWith("/about") ? "nav-link-selected" : ""
            }`}
          >
            About Us
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/projects"
            className={`nav-links  ${
              location.pathname.startsWith("/projects") ? "nav-link-selected" : ""
            }`}
          >
            Projects
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/linux-guide"
            className={`nav-links  ${
              location.pathname.startsWith("/linux-guide") ? "nav-link-selected" : ""
            }`}
          >
            Linux installation Guide
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/blog"
            className={`nav-links  ${
              location.pathname.startsWith("/blog") ? "nav-link-selected" : ""
            }`}
          >
            Blog
          </Link>
        </li>
        <li className="nav-item rounded-xl bg-[#1E1E1E] text-primary font-light py-4 px-7">
          <button onClick={() => redirect("")}>Contribute</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
