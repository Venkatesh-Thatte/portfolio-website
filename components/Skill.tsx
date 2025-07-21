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
        initial={{ x: directionLeft ? -100 : 100, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="rounded-full border border-gray-500
          w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32
          flex items-center justify-center overflow-hidden bg-white/10"
      >
        <Image
          src={image}
          alt="Skill icon"
          width={64}
          height={64}
          className="object-contain w-4/5 h-4/5"
        />
      </motion.div>

      <div
        className="
          absolute top-0 left-0 w-full h-full
          flex items-center justify-center
          rounded-full text-black font-semibold text-xs md:text-sm
          bg-white/80 dark:bg-white/60
          transition-opacity duration-300 ease-in-out
          opacity-100 md:opacity-0 md:group-hover:opacity-90
        "
      >
        {proficiency}
      </div>
    </div>
  );
}

export default Skill;
