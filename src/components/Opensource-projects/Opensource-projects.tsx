import React from "react";
import Contributors from "./Contributors";
function Card(props: { text: string; img: string; alt: string }) {
    return (
        <div className="bg-bg2 flex py-6 justify-center rounded-[45px] mb-8 gap-8 min-h-96">
            <div className="w-2/5 my-auto">
                <p className="font-semibold text-3xl mb-8">{props.text}</p>
                <div className="flex justify-center">
                    <button  className="bg-[#191A23] text-white px-6 py-4 rounded-xl mr-8">Visit site</button>
                    <button className="bg-primary px-6 py-4 rounded-xl">Contribute</button>
                </div>
            </div>
            <img className="w-2/5 max-h-72 max-w-lg my-auto object-contain" src={props.img} alt={props.alt} />
        </div>
    );
}



const OpensourceProj = () => {
    return (
        <div>
            <div className="w-4/5 mx-auto">
                <h2 className="title">OPEN SOURCE PROJECTS</h2>
                <Card
                    text="Meet our NITC wiki. Browse through our extensive collection of NITC info. Maybe download the app to be up to date, or go on to contribute your fantastic ideas!"
                    img="src\assets\Nitc-wiki.svg"
                    alt="NITC-Wiki"
                />
                <Card
                    text="Race on a replica racetrack of our campus. Specially designed for FOSSMEET 25. Explore how we did it !"
                    img="src\assets\fossmeet25-race-track.svg"
                    alt="FOSS-MEET-25"
                />
                <Card
                    text="Want to ask fellow NITC students about their lifestyle, workflow and skills, or just have some basic doubts? Visit Ask NITC"
                    img="src\assets\Ask NITC.svg"
                    alt="Ask NITC"
                />
                <Card
                    text='A python "daemon"/CLI that tries to keep you logged into the NITC It will automatically log you in from the next reboot/shutdown'
                    img="src\assets\nitc-fwd.png"
                    alt="NITC-Login-Daemon"
                />
                <Card
                    text="A Django application to record the entry and exit of students into the library by scanning their ID cards using an RFID reader."
                    img="src\assets\entry-exit-dl.png"
                    alt="Entry-Exit-DL"
                />
            </div>
            <div className="w-9/10 mx-auto my-16">
                <h2 className="title ml-18">Contributors:</h2>
                <Contributors />
            </div>
        </div>
    );
};

export default OpensourceProj;
