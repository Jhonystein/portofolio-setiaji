// icons
import React, { useState } from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";
import Circles from "../../components/Circles";
import Avatar from "../../components/Avatar";
import { motion } from "framer-motion";

// data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJs key="js" />,
          <FaReact key="react" />,
          <SiNextdotjs key="nextjs" />,
          <SiFramer key="framer" />,
          <FaWordpress key="wordpress" />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [
          <FaFigma key="figma" />,
          <SiAdobexd key="adobexd" />,
          <SiAdobephotoshop key="photoshop" />,
        ],
      },
    ],
  },

  {
    title: "experience",
    info: [
      {
        title: "IT Division - PT. PARAMESTI EDUTAMA SEMESTA",
        stage: "Februari - April 2018",
      },
      {
        title: "Data Inputer - KANTAR WORLD PANEL",
        stage: "2021 - 2023",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title:
          "Software Engineering - 2 Vocational High School Jakarta, Indonesia",
        stage: "2016 - 2019",
      },
      {
        title:
          "Bachelor of Informatics Engineering - GUNADARMA UNIVERSITY – Depok, Indonesia",
        stage: "2019 - 2023",
      },
    ],
  },
];

const fadein = (direction, delay) => {
  return {
    hidden: { opacity: 0, x: direction === "right" ? 100 : -100 },
    show: { opacity: 1, x: 0, transition: { delay: delay } },
  };
};

import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
    
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6" style={{ overflowY: 'auto' }}>
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadein("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Captivating <span className="text-accent">stories</span> birth
            magnificent design.
          </motion.h2>
          <motion.p
            variants={fadein("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            My name is Setiaji Alif Nugroho. I am a graduate with a Bachelor's degree in Informatics Engineering from Gunadarma University. I am currently actively seeking employment.
During my time in college, I developed my skills in programming and design at an intermediate level and can learn quickly. I have a strong interest in becoming a programmer or designer, and I am enthusiastic about learning new things in this field.
          </motion.p>
        </div>
        <motion.div
          variants={fadein("right", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4"
        >
          {aboutData.map((item, itemIndex) => (
            <div
              key={itemIndex}
              className={`${
                index === itemIndex &&
                "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
              } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
              onClick={() => setIndex(itemIndex)}
            >
              {item.title}
            </div>
          ))}
        </motion.div>
        <motion.div
          variants={fadein("right", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="max-w-lg"
        >
          {aboutData[index].info.map((infoItem, infoIndex) => (
            <div key={infoIndex} className="mb-4">
              <h3 className="text-xl font-semibold break-words">{infoItem.title}</h3>
              {infoItem.icons && (
                <div className="flex gap-x-2 mt-2">
                  {infoItem.icons.map((icon, iconIndex) => (
                    <div key={iconIndex} className="text-2xl">
                      {icon}
                    </div>
                  ))}
                </div>
              )}
              {infoItem.stage && (
                <p className="text-gray-600">{infoItem.stage}</p>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
