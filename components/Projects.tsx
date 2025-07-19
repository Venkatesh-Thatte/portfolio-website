import React from "react";
import { motion } from "framer-motion";

type Props = {};

const projects = [
  {
    title: "Netflix Clone",
    image: "/images/Netflix.png",
    description:
      "A full-featured, responsive Netflix Clone built using React, Firebase Authentication, and React Router DOM. This project replicates Netflix's core UI and functionality — including horizontal scroll cards, category-wise movie browsing, and YouTube trailer previews.",
  },
  {
    title: "Amazon Clone",
    image: "/images/Amazon clone.png",
    description:
      "A fully functional Amazon Clone built using React, Redux Toolkit, Firebase, and Tailwind CSS. This project replicates key features of the Amazon e-commerce experience, including product listings, cart functionality and authentication with fully responsive.",
  },
  {
    title: "Weather App",
    image: "/images/weather.png",
    description:
      "A weather forecasting app developed using HTML, CSS, and JavaScript. It fetches real-time data from the OpenWeatherMap API and displays current weather conditions for any searched city with a clean, mobile-friendly UI.",
  },
];

function Projects({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen relative flex flex-col items-center justify-start md:justify-center overflow-hidden py-20"
    >
      <h3 className="absolute top-12 md:top-10 uppercase tracking-[15px] text-gray-500 text-xl md:text-2xl z-30">
        Projects
      </h3>

      <div className="w-full absolute top-40 md:top-32 bg-[#F7AB0A]/10 left-0 h-[450px] -skew-y-12 z-0"></div>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 mt-[30px] scrollbar-hidden">
        {projects.map((project, i) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 snap-center flex flex-col items-center justify-center px-6 md:px-20 lg:px-40 space-y-10"
          >
            <motion.img
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true, amount: 0.5 }}
              src={project.image}
              alt={project.title}
              className={`object-contain shadow-xl rounded-lg ${
                project.title === "Weather App"
                  ? "w-[260px] md:w-[320px] h-[250px]" // smaller height only for Weather App
                  : "w-[300px] md:w-[400px] h-auto"
              }`}
            />

            <div className="space-y-6 text-center md:text-left max-w-4xl">
              <h4 className="text-2xl md:text-4xl font-semibold text-white text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                {project.title}
              </h4>
              <p className="text-base md:text-lg text-gray-300 text-center">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;
