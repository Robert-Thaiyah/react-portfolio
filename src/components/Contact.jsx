import React from "react";
import { motion } from "framer-motion";

export const Contact = () => {
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
    hidden: { x: 200, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <motion.form
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        method="POST"
        action="https://getform.io/f/9e81b294-683a-4f3c-aee6-fec700277883"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            // Submit the form below or shoot me an email - bobthaiya@gmail.com
          </p>
        </div>

        <motion.input
          variants={item}
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <motion.input
          variants={item}
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <motion.textarea
          variants={item}
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
          required
        ></motion.textarea>
        <motion.button
          className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center"
          variants={item}
        >
          Let's Collaborate
        </motion.button>
      </motion.form>
    </div>
  );
};
