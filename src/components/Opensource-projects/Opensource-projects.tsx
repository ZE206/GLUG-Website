import Contributors from "./Contributors";

function Card(props: {
    text: string;
    img: string;
    alt: string;
    siteUrl?: string;
    repoUrl?: string;
}) {
    return (
        <div className="bg-bg2 flex flex-col lg:flex-row py-4 lg:py-6 px-3 lg:px-6 justify-center rounded-[45px] mb-8 lg:mb-8 gap-6 lg:gap-8 min-h-96">
            <div className="w-full lg:w-2/5 flex justify-center my-auto order-1">
                <img
                    className="w-[85%] lg:w-full max-h-56 lg:max-h-72 max-w-lg object-contain"
                    src={props.img}
                    alt={props.alt}
                />
            </div>{" "}
            <div className="w-full lg:w-2/5 my-auto text-center lg:text-left order-2 lg:order-none px-3 lg:px-4">
                <p className="font-semibold text-xl sm:text-2xl xl:text-3xl mb-5 lg:mb-8">
                    {props.text}
                </p>
                <div className="flex justify-center lg:justify-start flex-wrap gap-3 lg:gap-4">
                    {props.siteUrl && (
                        <a
                            href={props.siteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="bg-[#191A23] text-white text-md lg:text-base px-5 lg:px-6 py-3 lg:py-4 rounded-xl">
                                Visit site
                            </button>
                        </a>
                    )}

                    {props.repoUrl && (
                        <a
                            href={props.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="bg-primary text-white text-md lg:text-base px-5 lg:px-6 py-3 lg:py-4 rounded-xl">
                                Contribute
                            </button>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

const OpensourceProj = () => {
    return (
        <div>
            <div className="w-[90%] lg:w-4/5 mx-auto">
                <h2 className="title text-center lg:text-left">
                    OPEN SOURCE PROJECTS
                </h2>
                <Card
                    text="Meet our NITC wiki. Browse through our extensive collection of NITC info. Maybe download the app to be up to date, or go on to contribute your fantastic ideas!"
                    img="public/Nitc-wiki.svg"
                    alt="NITC-Wiki"
                    siteUrl="https://wiki.fosscell.org"
                    repoUrl="https://gitlab.com/wiki-nitc/nitc-wiki-android-app"
                />
                <Card
                    text="Race on a replica racetrack of our campus. Specially designed for FOSSMEET 25. Explore how we did it !"
                    img="public/fossmeet25-race-track.svg"
                    alt="FOSS-MEET-25"
                    repoUrl="https://github.com/DuffyYT/KSRTC-NITC-tuxKart"
                />
                <Card
                    text="Want to ask fellow NITC students about their lifestyle, workflow and skills, or just have some basic doubts? Visit Ask NITC"
                    img="public/Ask NITC.svg"
                    alt="Ask NITC"
                    siteUrl="https://ask.kenobi.win"
                />
                <Card
                    text='A python "daemon"/CLI that tries to keep you logged into the NITC. It will automatically log you in from the next reboot/shutdown'
                    img="public/nitc-fwd.png"
                    alt="NITC-Login-Daemon"
                    repoUrl="https://github.com/astroanax/nitc-fwd"
                />
                <Card
                    text="A Django application to record the entry and exit of students into the library by scanning their ID cards using an RFID reader."
                    img="public/entry-exit-dl.png"
                    alt="Entry-Exit-DL"
                    repoUrl="https://github.com/AfthabEK/Entry-Exit-DL"
                />
            </div>
            <div className="w-[90%] lg:w-4/5 mx-auto my-16">
                <h2 className="title text-3xl lg:text-4xl text-center lg:text-left">
                    Contributors:
                </h2>
                <Contributors />
            </div>
        </div>
    );
};

export default OpensourceProj;
