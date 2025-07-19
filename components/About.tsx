import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative text-center px-10 max-w-7xl mx-auto items-center"
    >
      <div className="mb-10 mt-50">
        <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl mb-15">
          About
        </h3>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left">
        <motion.img
          initial={{ x: -200, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          src="/images/img2.jpg"
          alt="Profile Image"
          className="flex-shrink-0 w-40 h-40 rounded-full object-cover md:w-64 md:h-95 md:rounded-lg xl:w-[400px] xl:h-[500px]"
        />

        <div className="space-y-10 px-0 md:px-10 mt-10 lg:mt-0 lg:ml-10 ">
          <h4 className="text-4xl font-semibold mt-10">
            Here is a{" "}
            <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
            background
          </h4>
          <p className="text-base">
            👨‍💻 I am Venkatesh 💯. I am a dedicated and enthusiastic Frontend
            Developer with a strong foundation in React.js, modern UI libraries,
            and responsive web design. As a recent entrant to the tech industry,
            I have built a diverse portfolio of full-featured web applications
            that demonstrate my ability to turn ideas into functional and
            visually appealing user interfaces. My hands-on experience includes
            projects like an Amazon Clone and a Netflix-inspired UI, where I
            implemented key features such as authentication, dynamic routing,
            modals, state management, and API integration using tools like
            Firebase, Redux Toolkit, and React Router. With a strong focus on
            clean code, performance, and mobile-first design, I aim to deliver
            seamless user experiences using modern frameworks and best
            practices.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
