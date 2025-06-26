import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TestimonyProps {
  quote: string;
  author: string;
  total: number;
  currNo: number;
  onNext: () => void;
  onPrev: () => void;
}

const Testimony: React.FC<TestimonyProps> = ({ quote, author, total, currNo, onNext, onPrev }) => {
  return (
    <div className="testimonialsBlock flex justify-center">
      <div className="bg-[#191a23] rounded-[3rem] p-6 md:p-10 lg:mx-32 text-white w-[90vw] md:w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currNo} // Key is important to trigger exit/enter
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
          >
            <div className="quote">
              {quote}
              <br />
              <br />
              <br />
            </div>
            <div className="author justify-self-end">~{author}</div>
          </motion.div>
        </AnimatePresence>

        <div className="arrowBar flex items-center gap-[15vw] md:gap-[30vw] mt-[1rem] md:px-10">
          {/* {currNo==0 && <img src="src/assets/dullArrow.png" alt="left arrow" className="cursor-pointer" />} */}
          {/* {currNo!=0 && <img src="src/assets/Arrow.png" alt="left arrow" className="cursor-pointer rotate-180" onClick={onPrev}/>} */}
          <img src="/Arrow.png" alt="left arrow" className="cursor-pointer rotate-180" onClick={onPrev} />
          <div className="starBar flex w-full">
            {Array.from({ length: currNo }, (_, i) => (
              <img src="/WhiteStar.png" alt="star" key={i} className="mr-[1rem] cursor-pointer" />
            ))}
            <img src="/BrightStar.png" alt="star" key={currNo} className="mr-[1rem] cursor-pointer" />
            {Array.from({ length: total - currNo - 1 }, (_, i) => (
              <img
                src="/WhiteStar.png"
                alt="star"
                key={`star-${i + currNo + 1}`}
                className="mr-[1rem] cursor-pointer"
              />
            ))}
          </div>
          {/* {currNo==total-1 && <img src="src/assets/dullArrow.png" alt="right arrow" className="cursor-pointer rotate-180" />} */}
          {/* {currNo!=total-1 && <img src="src/assets/Arrow.png" alt="right arrow" className="cursor-pointer" onClick={onNext}/>} */}
          <img src="/Arrow.png" alt="right arrow" className="cursor-pointer" onClick={onNext} />
        </div>
      </div>
    </div>
  );
};

export default Testimony;