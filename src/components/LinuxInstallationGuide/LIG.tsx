import { Link } from "react-router-dom";
function Card(item: any) {
    return (
        <div className="bg-custom_blue rounded-[45px] p-8 sm:p-16 mb-8 sm:mb-14 text-white">
            <h3 className="text-lg sm:text-2xl">{item.title}</h3>
            <p className="text-base sm:text-2xl mt-2">{item.description}</p>
            <iframe
                src={item.video_url}
                title="YouTube video player"
                width={"90%"}
                height="auto"
                allowFullScreen
                className="mx-auto my-6 sm:my-8 rounded-lg sm:rounded-4xl aspect-video"
            ></iframe>{" "}
            <div className="flex items-center gap-3 sm:gap-4">
                <img
                    src="src/assets/internet 2.svg"
                    alt="internet-icon"
                    className="w-6 sm:w-auto"
                />
                <Link
                    to={item.website_url}
                    className="underline decoration-1 underline-offset-3 text-sm sm:text-2xl"
                >
                    {item.website}
                </Link>
            </div>{" "}
            <div className="flex items-center gap-3 sm:gap-4 mt-3 sm:mt-4">
                <img
                    src="src/assets/inss 2.svg"
                    alt="settings0-icon"
                    className="w-6 scale-120 sm:w-auto sm:scale-100"
                />
                <span className="text-sm sm:text-2xl">
                    Installation of {item.title} OS:{" "}
                    <Link
                        to={item.guide_url}
                        className="underline decoration-1 underline-offset-3 text-sm sm:text-2xl"
                    >
                        {item.guide}
                    </Link>
                </span>
            </div>
        </div>
    );
}

const LIG = () => {
    return (
        <div className="w-[90%] sm:w-4/5 mx-auto my-8 sm:my-16 font-medium">
            <h1 className="bg-[#D9D9D9] rounded-4xl py-2 px-4 w-fit text-xl sm:text-3xl mb-6 sm:mb-8">
                Not sure where to start? Try ubuntu
            </h1>{" "}
            <Card
                title="Ubuntu"
                description="Ubuntu is the most beginner-friendly Linux distro. It just works — easy to install, has a clean interface, and huge community support."
                website="Enterprise Open Source and Linux | Ubuntu"
                website_url="https://ubuntu.com/"
                guide=" Install Ubuntu Desktop | Ubuntu"
                guide_url="https://ubuntu.com/tutorials/install-ubuntu-desktop#1-overview"
                video_url="https://www.youtube.com/embed/POf5mCs5YgI"
            />
            <Card
                title="Fedora"
                description="Fedora is modern, fast, and open-source-only — you always get the latest software. Great for developers and privacy lovers."
                website="The Fedora Project"
                website_url="https://fedoraproject.org/"
                guide="Installation Guide :: Fedora Docs"
                guide_url="https://docs.fedoraproject.org/en-US/fedora/f36/install-guide/"
                video_url="https://www.youtube.com/embed/1z57nN5R5EU"
            />
            <Card
                title="Debian"
                description="Debian is stable, reliable, and time-tested. It powers everything from personal PCs to NASA servers. Not flashy, but rock-solid."
                website="Debian -- The Universal Operating System"
                website_url="https://www.debian.org/"
                guide="Installation of Debian OS: Debian GNU/Linux Installation Guide"
                guide_url="https://www.debian.org/releases/stable/i386/"
                video_url="https://www.youtube.com/embed/zOZEkzwhThc"
            />
            <Card
                title="POP"
                description="Linux for creators and developers.Created by System76, Pop!_OS is sleek, fast, and great for creative work and development. It has excellent hardware support and tiling window features out of the box."
                website="Pop!_OS by System76"
                website_url="https://system76.com/pop/"
                guide="https://system76.com/pop/"
                guide_url="https://support.system76.com/articles/install-pop/"
                video_url="https://www.youtube.com/embed/1ekoWV4Li4k"
            />
            <Card
                title="Arch"
                description="Arch gives you total control. You install everything yourself — and learn Linux inside-out in the process"
                website="Arch Linux"
                website_url="https://archlinux.org/"
                guide="Installation guide - ArchWiki"
                guide_url="https://wiki.archlinux.org/title/Installation_guide"
                video_url="https://www.youtube.com/embed/FxeriGuJKTM&t=2438s"
            />
            <Card
                title="Zorin"
                description="Zorin looks like Windows, so you won't feel lost. It's built for beginners who want to try Linux without confusion."
                website="Zorin OS - Make your computer better"
                website_url="https://zorin.com/os/"
                guide="https://help.zorin.com/docs/getting-started/install-zorin-os/"
                guide_url="https://help.zorin.com/docs/getting-started/install-zorin-os/"
                video_url="https://www.youtube.com/embed/_zt3znvsz94?si=WkUlFNpxRp3t0qn3"
            />
        </div>
    );
};

export default LIG;
