"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { motion, AnimatePresence } from "framer-motion";
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
            <AnimatePresence>
              <motion.h2
                initial={{ y: 100 }}
                whileInView={{ y: 0, transition: { duration: 1 } }}
                exit={{ y: 100 }}
                className=" text-[33px] md:text-[37px] lg:text-[44px] xl:text-[50px] text-white font-thin capitalize text-center"
              >
                {props.welcomeText1}
              </motion.h2>
            </AnimatePresence>
            <h1 className=" text-[33px] md:text-[37px] lg:text-[44px] xl:text-[50px] text-white font-bold capitalize text-center">
              {props.headLine1}
            </h1>
            <h2 className="text-[33px] md:text-[37px] lg:text-[44px] xl:text-[50px] text-white font-thin capitalize text-center ">
              {props.subHeadLine1}
            </h2>
            <p className=" text-sm text-white capitalize text-center lg:text-base xl:text-lg">
              {props.infoText1}
            </p>
          </div>
        </CarouselItem>
        <CarouselItem className="">
          <div className="">
            <h2 className=" text-[33px] md:text-[37px] lg:text[44px] xl:text-[50px] text-white font-thin capitalize text-center">
              {props.welcomeText2}
            </h2>
            <h1 className=" text-[33px] md:text-[37px] lg:text[44px] xl:text-[50px] text-white font-bold capitalize text-center">
              {props.headLine2}
            </h1>
            <h2 className="text-[33px] md:text-[37px] lg:text[44px] xl:text-[50px] text-white font-thin capitalize text-center ">
              {props.subHeadLine2}
            </h2>
            <p className=" text-sm text-white capitalize text-center lg:text-base xl:text-lg">
              {props.infoText2}
            </p>
          </div>
        </CarouselItem>
        <CarouselItem className="">
          <div className="">
            <h2 className=" text-[33px] md:text-[37px] lg:text-[44px] xl:text-[50px] text-white font-thin capitalize text-center">
              {props.welcomeText3}
            </h2>
            <h1 className=" text-[33px] md:text-[37px] lg:text-[44px] xl:text-[50px] text-white font-bold capitalize text-center">
              {props.headLine3}
            </h1>
            <h2 className="text-[33px] md:text-[37px] lg:text-[44px] xl:text-[50px] text-white font-thin capitalize text-center ">
              {props.subHeadLine3}
            </h2>
            <p className=" text-sm text-white capitalize text-center lg:text-base xl:text-lg">
              {props.infoText3}
            </p>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default EmptySlider;
