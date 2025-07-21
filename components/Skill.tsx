import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  directionLeft?: boolean;
  image: string;
  proficiency: string;
};

function Skill({ directionLeft, image, proficiency }: Props) {
  return (
    <div className="relative group flex items-center justify-center">
      <motion.div
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="rounded-full border border-gray-500 w-20 h-20 md:w-24 md:h-24 xl:w-28 xl:h-28 overflow-hidden flex items-center justify-center"
      >
       <Image
  src={image}
  alt="Skill icon"
  width={80}
  height={80}
  className="object-contain"
/>
      </motion.div>

      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out bg-gray-100 dark:bg-white/80 h-20 w-20 md:w-24 md:h-24 xl:w-28 xl:h-28 rounded-full flex items-center justify-center z-10">
        <p className="text-lg md:text-xl font-bold text-black">{proficiency}</p>
      </div>
    </div>
  );
}

export default Skill;
