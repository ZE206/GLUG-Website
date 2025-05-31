import React from "react";
import Carousel from "../common/Carousel";
import { Link } from "react-router";
const ContributorCard = (item: any) => (
    <div className="bg-bg2 rounded-[45px] p-8  w-fit ">
        <div className="flex">
            <img src={item.img} className="mr-4" alt={`${item.name}-photo`} />

            <div className="text-black mt-auto">
                <div>
                    <h3 className="font-bold">{item.name}</h3>
                    <p>{item.position}</p>
                </div>
            </div>

            <Link to={item.linkedIn_link} className="ml-2">
                <img src="src/assets/linkedIn icon.svg" alt="linkedIn-icon" />
            </Link>
        </div>
        <div className="h-[1px] bg-black mt-4 w-full"></div>
    </div>
);

const Contributors = () => {
    const contributors_details = [
        {
            name: "John Smith",
            position: "CEO and Founder",
            img: "src/assets/dummy-photo.svg",
            linkedIn_link: "",
        },
        {
            name: "John Smith",
            position: "CEO and Founder",
            img: "src/assets/dummy-photo.svg",
            linkedIn_link: "",
        },
        {
            name: "John Smith",
            position: "CEO and Founder",
            img: "src/assets/dummy-photo.svg",
            linkedIn_link: "",
        },
        {
            name: "John Smith",
            position: "CEO and Founder",
            img: "src/assets/dummy-photo.svg",
            linkedIn_link: "",
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
