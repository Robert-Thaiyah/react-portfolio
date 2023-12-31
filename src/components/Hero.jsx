import React from "react";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div name="home" className="bg-[#0a192f] w-full h-screen">
      {/* container */}

      <motion.div
        className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full"
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.75, ease: "easeIn" }}
        viewport={{ once: true }}
      >
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Robert Thaiyah Kibue
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Front-End and Email Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I’m a front-end developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive front-end applications and beautiful email
          templates.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            <Link to="work" smooth={true} duration={500}>
              View Work
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowRight className="ml-3 hover" />
            </span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
