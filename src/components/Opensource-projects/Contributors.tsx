import React from "react";
import Carousel from "../common/Carousel";
import { Link } from "react-router";
const ContributorCard = (item: any) => (
    <div className="bg-bg2 rounded-[45px] p-8 w-full h-full flex flex-col justify-between">
        <div className="flex h-full">
            <img
                src={item.img}
                className="mr-4 self-start"
                alt={`${item.name}-photo`}
                width={"90px"}
            />

            <div className="text-black flex flex-col justify-between flex-1">
                {/* <div>
                    <h3 className="font-bold">{item.name}</h3>
                    <p>{item.position}</p>
                </div> */}
                <Link to={item.linkedIn_link} >
                    <img
                        src="src/assets/Nitc-wiki.svg"
                        alt="linkedIn-icon"
                        width={"45px"}
                        className="ml-auto mb-auto translate-x-2 -translate-y-2"
                    />
                </Link>
                <h3 className="font-bold text-sm sm:text-base">{item.name}</h3>
            </div>
        </div>
        <div className="h-[1px] bg-black mt-4 w-full"></div>
    </div>
);

const Contributors = () => {
    const contributors_details = [
        {
            name: "Vysakh Sheeja Premkumar",
            position: "CEO and Founder",
            img: "src/assets/dummy-photo.svg",
            linkedIn_link:
                "https://wiki.fosscell.org/index.php?title=User:Vysakh",
        },
        {
            name: "Afthab E K",
            position: "CEO and Founder",
            img: "https://wiki.fosscell.org/images/avatars/my_wiki_7_l.jpg?r=20241018192034",
            linkedIn_link:
                "https://wiki.fosscell.org/index.php?title=User:AfthabEK",
        },
        {
            name: "Rehan Tadpatri",
            position: "CEO and Founder",
            img: "src/assets/dummy-photo.svg",
            linkedIn_link: "https://github.com/astroanax",
        },
        {
            name: "Akhil T",
            position: "CEO and Founder",
            img: "src/assets/dummy-photo.svg",
            linkedIn_link:
                "https://wiki.fosscell.org/index.php?title=User:Akhil_T",
        },
        {
            name: "John Smith",
            position: "CEO and Founder",
            img: "src/assets/dummy-photo.svg",
            linkedIn_link: "",
        },
    ];

    return (
        <Carousel
            items={contributors_details}
            renderItem={ContributorCard}
            // maxVisible={5}
        />
    );
};

export default Contributors;
