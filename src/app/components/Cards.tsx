import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { IoMdCloudDownload } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import * as motion from "framer-motion/client";

// Define the structure of the data prop
interface Tag {
  isOpen: boolean;
  tagTitle: string;
  tagColor: string;
}

interface CardData {
  desc: string;
  filesize: string;
  close: boolean;
  tag: Tag;
}

interface CardsProps {
  data: CardData;
  reference: React.RefObject<HTMLElement>;
}

const Cards: React.FC<CardsProps> = ({ data, reference }) => {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
      animate={{ x: 100 }}
      transition={{ ease: "easeOut", duration: 2 }}
      className="relative flex-shrink-0 w-60 h-80 rounded-[40px] bg-zinc-900/60 text-gray-200 px-6 py-10 overflow-hidden"
    >
      <FaRegFileAlt />
      <p className="mt-5 text-sm leading-tight font-sans">{data.desc}</p>

      <div className="footer absolute w-full left-0 bottom-0">
        <div className="flex items-center justify-between py-3 px-6 pb-5">
          <h5 className="text-lg">{data.filesize}</h5>
          <span className="w-6 h-6 bg-zinc-700 rounded-full flex items-center justify-center">
            {data.close ? <IoClose /> : <IoMdCloudDownload size=".9em" color="#fff" />}
          </span>
        </div>

        {/* tags */}
        {data.tag.isOpen && (
          <div
            className={`tag w-full h-12 ${
              data.tag.tagColor === "sky" ? "bg-sky-500" : "bg-green-500"
            } flex items-center justify-center`}
          >
            <h3 className="font-sans font-semibold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Cards;
