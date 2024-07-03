"use client";
import { FaGear } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaRegFolderOpen } from "react-icons/fa";
import IphonePic from "@/public/iphone.png";
import Image from "next/image";
import AdvPic from "@/public/iphone-slide-lock.jpg";
import WebPic from "@/public/iphone-slide1.jpg";
import { useState } from "react";
import { motion } from "framer-motion";

const Design = () => {
  const [showPic, setShowPic] = useState(false);
  const [showButton, setShowButton] = useState(false);
  return (
    <div className=" w-full overflow-hidden">
      <div className=" container 2xl:px-44 py-20">
        <div className=" grid grid-cols-1 grid-rows-2 gap-7 mb-3 md:grid-cols-2 md:grid-rows-1 md:justify-between md:items-center md:mb-14">
          <div className="">
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1, transition: { duration: 0.7 } }}
              className=" text-base text-[#24CDD5] text-center mb-3 md:text-start "
            >
              Quisque tellus risus, adipisci viverra
            </motion.p>
            <motion.h3
              initial={{ x: -100, opacity: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: { duration: 0.7, delay: 0.3 },
              }}
              className=" text-4xl lg:text-[42px] xl:text-[50px] text-slate-700 dark:text-slate-100 text-center capitalize md:text-start"
            >
              mobile app designs
            </motion.h3>
          </div>
          <div className="">
            <p className=" text-[13px] text-gray-700 dark:text-slate-400 text-center md:text-start xl:text-base">
              Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed
              suscipit. Vestibulum auctor nunc vitae diam eleifend, in maximus
              metus sollicitudin. Quisque vitae sodales lectus.
            </p>
          </div>
        </div>
        <div className=" md:grid md:grid-cols-3 md:grid-rows-1 md:items-center md:justify-center md:gap-4 lg:gap-8 xl:gap-10">
          <div className="">
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { duration: 0.7 } }}
              className=" flex flex-col justify-center items-center gap-4 mb-10 md:items-end"
            >
              <FaGear className=" text-[#24CDD5] text-4xl lg:text-[40px] xl:text-[45px]" />
              <motion.h5
                initial={{ x: -100, opacity: 0 }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  transition: { duration: 0.5, delay: 0.4 },
                }}
                className=" text-lg md:text-[20px] dark:text-white dark:hover:text-[#24CDD5] lg:text-[22px] text-slate-700 font-semibold capitalize hover:text-[#24CDD5] mb-1"
              >
                theme options
              </motion.h5>
              <motion.p
                initial={{ x: -150, opacity: 0 }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  transition: { duration: 0.5, delay: 0.5 },
                }}
                className=" text-[13px] text-slate-600 text-center dark:text-slate-200 w-[60%] md:text-end md:w-full"
              >
                This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                vel velit auctor aliquet
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { duration: 0.7 } }}
              className=" flex flex-col justify-center items-center gap-4 mb-10 md:items-end"
            >
              <FaEdit className=" text-[#24CDD5] text-4xl lg:text-[40px] xl:text-[45px]" />
              <motion.h5
                initial={{ x: -100, opacity: 0 }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  transition: { duration: 0.5, delay: 0.4 },
                }}
                className=" text-lg md:text-[20px] dark:text-white dark:hover:text-[#24CDD5] lg:text-[22px] text-slate-700 font-semibold capitalize mb-1 hover:text-[#24CDD5]"
              >
                customization
              </motion.h5>
              <motion.p
                initial={{ x: -150, opacity: 0 }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  transition: { duration: 0.5, delay: 0.5 },
                }}
                className=" text-[13px] text-slate-600 text-center dark:text-slate-200 w-[60%] md:text-end md:w-full"
              >
                This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                vel velit auctor aliquet
              </motion.p>
            </motion.div>
          </div>
          <div className=" flex justify-center items-center mb-10">
            <motion.div
              initial={{ y: 200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
              onMouseEnter={() => setShowButton(true)}
              onMouseLeave={() => setShowButton(false)}
              className=" w-fit h-fit relative overflow-hidden rounded-3xl md:rounded-[40px]"
            >
              <Image
                src={AdvPic}
                alt="Lock-pic"
                className=" absolute top-0 left-0 w-full h-full z-10"
              />
              <Image
                src={WebPic}
                alt="Website-pic"
                className={
                  showPic
                    ? `absolute top-0 left-0 w-full h-full z-[15]`
                    : `absolute top-0 left-0 w-full h-full z-[8]`
                }
              />
              <Image
                src={IphonePic}
                alt="iphone-pic"
                className=" relative z-20 w-[170px] h-[350px] md:w-[220px] md:h-[450px] lg:w-[260px] lg:h-[520px]"
              />
              <div
                onClick={() => setShowPic(!showPic)}
                className={
                  showButton
                    ? `absolute w-10 h-10 rounded-full border-[3px] z-20 bottom-4 lg:bottom-6 left-1/2 -translate-x-1/2 cursor-pointer`
                    : `absolute w-10 h-10 rounded-full border-[3px] z-[8] bottom-4 lg:bottom-6 left-1/2 -translate-x-1/2`
                }
              ></div>
            </motion.div>
          </div>
          <div className="">
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { duration: 0.7 } }}
              className=" flex flex-col justify-center items-center gap-4 mb-10 md:items-start"
            >
              <FaCode className=" text-[#24CDD5] text-4xl lg:text-[40px] xl:text-[45px]" />
              <motion.h5
                initial={{ x: 100, opacity: 0 }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  transition: { duration: 0.5, delay: 0.4 },
                }}
                className=" text-lg md:text-[20px] dark:text-white dark:hover:text-[#24CDD5] lg:text-[22px] text-slate-700 font-semibold capitalize mb-1 hover:text-[#24CDD5]"
              >
                powerfull code
              </motion.h5>
              <motion.p
                initial={{ x: 150, opacity: 0 }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  transition: { duration: 0.5, delay: 0.5 },
                }}
                className=" text-[13px] text-slate-600 text-center dark:text-slate-200 w-[60%] md:text-start md:w-full"
              >
                This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                vel velit auctor aliquet
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { duration: 0.7 } }}
              className=" flex flex-col justify-center items-center gap-4 mb-10 md:items-start"
            >
              <FaRegFolderOpen className=" text-[#24CDD5] text-4xl lg:text-[40px] xl:text-[45px]" />
              <motion.h5
                initial={{ x: 100, opacity: 0 }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  transition: { duration: 0.5, delay: 0.4 },
                }}
                className=" text-lg md:text-[20px] dark:text-white dark:hover:text-[#24CDD5] lg:text-[22px] text-slate-700 font-semibold capitalize mb-1 hover:text-[#24CDD5]"
              >
                documentation
              </motion.h5>
              <motion.p
                initial={{ x: 150, opacity: 0 }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  transition: { duration: 0.5, delay: 0.5 },
                }}
                className=" text-[13px] text-slate-600 text-center dark:text-slate-200 w-[60%] md:text-start md:w-full"
              >
                This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                vel velit auctor aliquet
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;
