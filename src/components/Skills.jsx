import React from "react";
import { motion } from "framer-motion";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";

export const Skills = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">// These are the technologies I've worked with</p>
        </div>

        <motion.div
          className="w-full grid grid-cols-2 sm:grid-cols-3 text-center py-8 gap-10"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
            variants={item}
          >
            <img src={HTML} alt="HTML Icon" className="w-20 mx-auto" />
            <p className="py-4">HTML</p>
          </motion.div>

          <motion.div
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
            variants={item}
          >
            <img src={CSS} alt="CSS Icon" className="w-20 mx-auto" />
            <p className="py-4">CSS</p>
          </motion.div>

          <motion.div
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
            variants={item}
          >
            <img
              src={JavaScript}
              alt="Javascript Icon"
              className="w-20 mx-auto"
            />
            <p className="py-4">Javascript</p>
          </motion.div>

          <motion.div
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
            variants={item}
          >
            <img src={ReactImg} alt="React Icon" className="w-20 mx-auto" />
            <p className="py-4">React</p>
          </motion.div>

          <motion.div
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
            variants={item}
          >
            <img src={GitHub} alt="Github Icon" className="w-20 mx-auto" />
            <p className="py-4">Github</p>
          </motion.div>

          <motion.div
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
            variants={item}
          >
            <img src={Tailwind} alt="Tailwind Icon" className="w-20 mx-auto" />
            <p className="py-4">Tailwind</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
