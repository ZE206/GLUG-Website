import { Link } from "react-router";

const Footer=()=>{
    return (
        <>
        <div className=" container text-xl rounded-2xl  gap-30 flex  flex-col justify-between relative w-full  mx-auto px-10 py-6 text-white items-center ">
            <div className="flex flex-row justify-between w-full items-center">
            <div className="flex gap-4 items-center text-3xl font-bold"><img src="src/assets/pengu_whitebg.png" alt="Footer" className="h-30" />GLUG NITC</div>
            <div className="flex justify-between gap-20">
            <Link to="/" className="underline">
                Home
            </Link>
            <Link to="/about" className="underline">
                About Us
            </Link>
            <Link to="/projects" className="underline">
                Projects
            </Link>
            <Link to="/linux-guide" className="underline">
              Linux Installation guide
            </Link>
            </div>
            </div>
        </div>
        </>
    )
}

export default Footer;