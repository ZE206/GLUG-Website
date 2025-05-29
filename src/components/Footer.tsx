import { Link } from "react-router";

const Footer=()=>{
    return (
        <div className="flex justify-center relative">
            <img src="src/assets/Footer.png" alt="Footer" />
            <Link to="/">
                <button className="bg-transparent  absolute top-[5rem] left-[53.7rem] h-[2rem] w-[4.5rem] cursor-pointer"></button>
            </Link>
            <Link to="/about">
                <button className="bg-transparent  absolute top-[5rem] left-[59.8rem] h-[2rem] w-[5.4rem] cursor-pointer"></button>
            </Link>
            <Link to="/projects">
                <button className="bg-transparent  absolute top-[5rem] left-[67rem] h-[2rem] w-[5.4rem] cursor-pointer"></button>
            </Link>
            <Link to="/linux-guide">
                <button className="bg-transparent  absolute top-[5rem] left-[74rem] h-[2rem] w-[13.7rem] cursor-pointer"></button>
            </Link>
        </div>
    )
}

export default Footer;