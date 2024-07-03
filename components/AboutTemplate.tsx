"use client";
import AboutImage from "@/public/awesome-feature.png";
import Image from "next/image";
import { motion } from "framer-motion";
const AboutTemplate = (props: any) => {
  return (
    <div>
      <div className=" container 2xl:px-44 grid grid-cols-1 grid-rows-2 items-center justify-center lg:grid-cols-2 lg:grid-rows-1 lg:justify-between">
        <div className=" flex flex-col items-center justify-center gap-5 lg:items-start">
          <motion.h3
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: { duration: 0.7 } }}
            className=" text-[32px] dark:text-slate-200 text-center first-letter:text-blue-500 lg:text-start lg:text-[42px] text-slate-800"
          >
            {props.title}
          </motion.h3>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.7, delay: 0.5 },
            }}
            className=" text-center text-sm text-slate-700 lg:text-start dark:text-slate-400"
          >
            {props.description}
          </motion.p>
          <motion.button
            initial={{ x: -100, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.7, delay: 0.6 },
            }}
            type="button"
            className=" capitalize bg-gradient-to-r from-[#5192e1] via-[#23ced5] to-[#5192e1] text-white w-fit px-7 py-2 rounded-3xl text-sm lg:text-base lg:mt-5"
          >
            learn more
          </motion.button>
        </div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: { duration: 0.7, delay: 1 },
          }}
          className=""
        >
          <Image
            src={AboutImage}
            alt="about-pic"
            width={500}
            height={500}
            className=""
          />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutTemplate;
