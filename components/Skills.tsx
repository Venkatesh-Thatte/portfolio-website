import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

function Skills() {
  const skills = [
    { image: "https://cdn.worldvectorlogo.com/logos/react-2.svg", proficiency: "90%" },
    { image: "https://cdn.worldvectorlogo.com/logos/typescript.svg", proficiency: "85%" },
    { image: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg", proficiency: "95%" },
    { image: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg", proficiency: "80%" },
    { image: "https://cdn.worldvectorlogo.com/logos/css-3.svg", proficiency: "85%" },
    { image: "https://cdn.worldvectorlogo.com/logos/next-js.svg", proficiency: "75%" },
    { image: "https://cdn.worldvectorlogo.com/logos/html-1.svg", proficiency: "95%" },
    { image: "https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg", proficiency: "100%" },
    { image: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg", proficiency: "90%" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col text-center items-center px-4 sm:px-10 py-20 min-h-screen justify-center mx-auto max-w-7xl"
    >
      <h3 className="uppercase tracking-[15px] sm:tracking-[20px] text-gray-500 text-xl sm:text-2xl mb-10">
        Skills
      </h3>

      <h4 className="hidden md:block uppercase text-gray-400 text-sm sm:text-base tracking-wide mb-8 mt-10">
  Hover over a skill for current proficiency
</h4>



      <div className="grid grid-cols-3 gap-6 sm:gap-10">
        {skills.map((skill, index) => (
          <Skill
            key={index}
            image={skill.image}
            proficiency={skill.proficiency}
            directionLeft={index % 2 === 0}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;



