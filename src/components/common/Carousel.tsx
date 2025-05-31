import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CarouselProps<T> {
    items: T[];
    renderItem: (item: T, index: number) => React.ReactNode;
}

function Carousel<T>({ items, renderItem }: CarouselProps<T>) {
    const total = items.length;
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = {
        mobile: 1,
        desktop: 3,
    };

    const totalPages = Math.ceil(total / itemsPerPage.desktop);

    const rightArrowClick = () => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
    };

    const leftArrowClick = () => {
        setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
    };

    const getCurrentItems = () => {
        const start = currentPage * itemsPerPage.desktop;
        const end = Math.min(start + itemsPerPage.desktop, total);
        return items.slice(start, end);
    };

    return (
        <div className="bg-[#191a23] rounded-[3rem] p-10 mx-auto text-white w-full overflow-hidden">
            <div className="relative">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentPage}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.4 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    >
                        {getCurrentItems().map((item, idx) => (
                            <div key={idx} className="flex-1">
                                {renderItem(
                                    item,
                                    idx + currentPage * itemsPerPage.desktop
                                )}
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>{" "}
            <div className="arrowBar flex items-center justify-center gap-[15%] mt-8 px-4">
                <img
                    src="src/assets/Arrow.png"
                    alt="left arrow"
                    className="cursor-pointer rotate-180"
                    onClick={leftArrowClick}
                />
                <div className="starBar flex w-auto mx-2">
                    {Array.from({ length: totalPages }, (_, i) => (
                        <img
                            src={
                                i === currentPage
                                    ? "src/assets/BrightStar.png"
                                    : "src/assets/WhiteStar.png"
                            }
                            alt="star"
                            key={i}
                            className="mr-[0.5rem] cursor-pointer"
                            onClick={() => setCurrentPage(i)}
                        />
                    ))}
                </div>
                <img
                    src="src/assets/Arrow.png"
                    alt="right arrow"
                    className="cursor-pointer"
                    onClick={rightArrowClick}
                />
            </div>
        </div>
    );
}

export default Carousel;
