"use client";
import { Link, redirect, useLocation } from "react-router-dom";
import logo from "../../assets/navbar-logo.svg";
import "../../App.css";
import { useState, useRef, useEffect } from "react";

function Navbar() {
    const location = useLocation();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const sidebarRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                sidebarRef.current &&
                buttonRef.current &&
                !sidebarRef.current.contains(event.target as Node) &&
                !buttonRef.current.contains(event.target as Node)
                //check the mouse click is outside under the condition sidebar and button are displayed
            ) {
                setSidebarOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };
    return (
        <nav className=" font-primary w-full flex justify-between items-center px-8 py-1">
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
            <ul className="hidden sm:flex nav-menu text-white gap-8 text-xl font-normal items-center">
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
                            location.pathname.startsWith("/about")
                                ? "nav-link-selected"
                                : ""
                        }`}
                    >
                        About Us
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="/projects"
                        className={`nav-links  ${
                            location.pathname.startsWith("/projects")
                                ? "nav-link-selected"
                                : ""
                        }`}
                    >
                        Projects
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="/linux-installation-guide"
                        className={`nav-links  ${
                            location.pathname.startsWith(
                                "/linux-installation-guide"
                            )
                                ? "nav-link-selected"
                                : ""
                        }`}
                    >
                        Linux installation Guide
                    </Link>
                </li>
                <li className="nav-item rounded-xl bg-[#1E1E1E] text-primary text-orange-500 font-light py-4 px-7">
                    <button onClick={() => redirect("")}>Contribute</button>
                </li>
            </ul>{" "}
            {/* responsive part */}{" "}
            <img
                src="src/assets/navOpt.svg"
                alt="nav-options"
                className="block sm:hidden cursor-pointer"
                onClick={toggleSidebar}
                ref={buttonRef}
            />
            <div
                ref={sidebarRef}
                className={`${
                    sidebarOpen ? "block" : "hidden"
                } fixed right-8 top-24 rounded-2xl w-72 bg-[#0000004D] backdrop-blur-sm text-white p-8 z-50`}
            >
                {" "}
                <ul className="flex flex-col w-full gap-4">
                    <li className="nav-item w-full text-right">
                        <Link
                            to="/"
                            className={`nav-links text-lg inline-block ${
                                location.pathname === "/"
                                    ? "nav-link-selected"
                                    : ""
                            }`}
                        >
                            Home
                        </Link>
                    </li>{" "}
                    <li className="nav-item w-full text-right">
                        <Link
                            to="/about"
                            className={`nav-links text-lg inline-block ${
                                location.pathname.startsWith("/about")
                                    ? "nav-link-selected"
                                    : ""
                            }`}
                        >
                            About Us
                        </Link>
                    </li>{" "}
                    <li className="nav-item w-full text-right">
                        <Link
                            to="/projects"
                            className={`nav-links text-lg inline-block ${
                                location.pathname.startsWith("/projects")
                                    ? "nav-link-selected"
                                    : ""
                            }`}
                        >
                            Projects
                        </Link>
                    </li>{" "}
                    <li className="nav-item w-full text-right">
                        <Link
                            to="/linux-installation-guide"
                            className={`nav-links text-lg inline-block whitespace-nowrap ${
                                location.pathname.startsWith(
                                    "/linux-installation-guide"
                                )
                                    ? "nav-link-selected"
                                    : ""
                            }`}
                        >
                            Linux Installation Guide
                        </Link>
                    </li>
                    <li className="nav-item w-full">
                        <button
                            onClick={() => redirect("")}
                            className="w-full rounded-lg bg-[#1E1E1E] text-primary text-orange-500 font-light py-3 px-6 text-md hover:bg-opacity-80 transition-colors text-xl"
                        >
                            Contribute
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
