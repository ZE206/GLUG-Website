import { Link } from "react-router";

const Footer=()=>{
    return (
        <div className=" container text-xl rounded-2xl  flex justify-between relative w-3/4  mx-auto p-6 text-white items-center">
            <div className="flex gap-4 items-center text-3xl font-bold"><img src="src/assets/pengu_whitebg.png" alt="Footer" className="h-30" />GLUG NITC</div>
            <div className="flex justify-between gap-20">
            <Link to="/">
                Home
            </Link>
            <Link to="/about">
                About Us
            </Link>
            <Link to="/projects">
                Projects
            </Link>
            <Link to="/linux-guide">
              Linux Installation guide
            </Link>
            </div>
        </div>
    )
}

export default Footer;