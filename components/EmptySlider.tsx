"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";

const EmptySlider = (props: any) => {
  return (
    <Carousel
      className=""
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      opts={{
        loop: true,
        align: "start",
      }}
    >
      <CarouselContent>
        <CarouselItem className="">
          <div className="">
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
              className=" text-[33px] md:text-[37px] lg:text-[44px] xl:text-[50px] text-white font-thin capitalize text-center"
            >
              {props.welcomeText1}
            </motion.h2>

            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { duration: 1, delay: 0.5 },
              }}
              className=" text-[33px] md:text-[37px] lg:text-[44px] xl:text-[50px] text-white font-bold capitalize text-center"
            >
              {props.headLine1}
            </motion.h1>
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { duration: 1, delay: 1 },
              }}
              className="text-[33px] md:text-[37px] lg:text-[44px] xl:text-[50px] text-white font-thin capitalize text-center "
            >
              {props.subHeadLine1}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 1, delay: 1.5 },
              }}
              className=" text-sm text-white capitalize text-center lg:text-base xl:text-lg"
            >
              {props.infoText1}
            </motion.p>
          </div>
        </CarouselItem>
        <CarouselItem className="">
          <div className="">
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
              className=" text-[33px] md:text-[37px] lg:text[44px] xl:text-[50px] text-white font-thin capitalize text-center"
            >
              {props.welcomeText2}
            </motion.h2>
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { duration: 1, delay: 0.5 },
              }}
              className=" text-[33px] md:text-[37px] lg:text[44px] xl:text-[50px] text-white font-bold capitalize text-center"
            >
              {props.headLine2}
            </motion.h1>
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { duration: 1, delay: 1 },
              }}
              className="text-[33px] md:text-[37px] lg:text[44px] xl:text-[50px] text-white font-thin capitalize text-center "
            >
              {props.subHeadLine2}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 1, delay: 1.5 },
              }}
              className=" text-sm text-white capitalize text-center lg:text-base xl:text-lg"
            >
              {props.infoText2}
            </motion.p>
          </div>
        </CarouselItem>
        <CarouselItem className="">
          <div className="">
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
              className=" text-[33px] md:text-[37px] lg:text-[44px] xl:text-[50px] text-white font-thin capitalize text-center"
            >
              {props.welcomeText3}
            </motion.h2>
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { duration: 1, delay: 0.5 },
              }}
              className=" text-[33px] md:text-[37px] lg:text-[44px] xl:text-[50px] text-white font-bold capitalize text-center"
            >
              {props.headLine3}
            </motion.h1>
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { duration: 1, delay: 1 },
              }}
              className="text-[33px] md:text-[37px] lg:text-[44px] xl:text-[50px] text-white font-thin capitalize text-center "
            >
              {props.subHeadLine3}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 1, delay: 1.5 },
              }}
              className=" text-sm text-white capitalize text-center lg:text-base xl:text-lg"
            >
              {props.infoText3}
            </motion.p>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default EmptySlider;
