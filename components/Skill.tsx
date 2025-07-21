
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
        className="rounded-full border border-gray-500 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 xl:w-28 xl:h-28 overflow-hidden flex items-center justify-center"
      >
        <Image
          src={image}
          alt="Skill icon"
          width={80}
          height={80}
          className="object-contain"
        />
      </motion.div>

      {/* Skill proficiency overlay */}
      <div
        className={`
          absolute
          bg-gray-100 dark:bg-white/80
          rounded-full flex items-center justify-center z-10
          text-black font-bold text-sm sm:text-base
          transition duration-300 ease-in-out

          w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 xl:w-28 xl:h-28

          // Hide by default, show on hover for desktop
          opacity-0 group-hover:opacity-80

          // Show always on small screens (pointer:none devices)
          pointer-events-none sm:pointer-events-auto sm:group-hover:opacity-80
          sm:opacity-0
        `}
      >
        {proficiency}
      </div>
    </div>
  );
}

export default Skill;
