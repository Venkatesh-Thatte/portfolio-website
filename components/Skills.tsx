import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};

function Skills({}: Props) {
  const skills = [
    {
      image: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
      proficiency: "90%",
    },
    {
      image: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
      proficiency: "85%",
    },
    {
      image: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
      proficiency: "95%",
    },
    {
      image: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg",
      proficiency: "80%",
    },
    {
      image: "https://cdn.worldvectorlogo.com/logos/css-3.svg",
      proficiency: "85%",
    },
    {
      image: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
      proficiency: "75%",
    },
    {
      image: "https://cdn.worldvectorlogo.com/logos/html-1.svg",
      proficiency: "95%",
    },
    {
      image: "https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg",
      proficiency: "100%",
    },
    {
      image: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg",
      proficiency: "90%",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col text-center items-center xl:px-10 py-20 min-h-screen justify-center mx-auto"
    >
      <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl mb-20 mt-20">
        Skills
      </h3>
      <h3 className="uppercase tracking-[3px] text-gray-500 text-sm mb-10">
        Hover over a skill for current proficiency
      </h3>

      <div className="grid grid-cols-3 gap-5">
        {skills.slice(0, skills.length / 2).map((skill, index) => (
          <Skill
            key={index}
            image={skill.image}
            proficiency={skill.proficiency}
            directionLeft={true}
          />
        ))}
        {skills.slice(skills.length / 2).map((skill, index) => (
          <Skill
            key={index + skills.length / 2}
            image={skill.image}
            proficiency={skill.proficiency}
            directionLeft={false}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
