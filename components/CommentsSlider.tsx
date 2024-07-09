import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Testmonial2 from "@/public/testimonial-2.jpg";
import { FaStar } from "react-icons/fa6";

const CommentsSlider = () => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className=" -mt-[20%] lg:-mt-[10%] xl:-mt-[8%]"
    >
      <CarouselContent>
        <CarouselItem>
          <div className=" w-full h-full flex flex-col justify-center lg:flex-row lg:gap-44 xl:px-20">
            <div className=" flex flex-col justify-center items-center">
              <div className=" w-44 h-44 rounded-full overflow-hidden">
                <Image
                  src={Testmonial2}
                  width={180}
                  height={180}
                  alt="testmonial"
                  className=" hover:scale-110 transition-all duration-500 cursor-pointer"
                />
              </div>
              <p className=" text-base text-[#24CDD5] text-center mt-4 capitalize xl:text-lg font-light">
                john smith
              </p>
              <p className=" text-[13px] xl:text-sm text-[#808080] uppercase text-center">
                upwork new york
              </p>
            </div>
            <div className=" flex justify-center flex-col lg:justify-end">
              <p className=" text-center text-[#808080] text-[13px] lg:text-sm mt-[10px] mb-[15px] lg:text-start">
                We have a number of different teams within our agency that
                specialise in different areas of business so you can be sure
                that you won't receive a generic service and although we boast a
                years and years of service.
              </p>
              <div className=" flex justify-center items-center lg:justify-start gap-1">
                <FaStar className=" text-[#ffc202]" />
                <FaStar className=" text-[#ffc202]" />
                <FaStar className=" text-[#ffc202]" />
                <FaStar className=" text-[#ffc202]" />
                <FaStar className=" text-[#ffc202]" />
              </div>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className=" w-full h-full flex flex-col justify-center lg:flex-row lg:gap-44 xl:px-20">
            <div className=" flex flex-col justify-center items-center">
              <div className=" w-44 h-44 rounded-full overflow-hidden">
                <Image
                  src={Testmonial2}
                  width={180}
                  height={180}
                  alt="testmonial"
                  className=" hover:scale-110 transition-all duration-500 cursor-pointer"
                />
              </div>
              <p className=" text-base text-[#24CDD5] text-center mt-4 capitalize xl:text-lg font-light">
                john smith
              </p>
              <p className=" text-[13px] xl:text-sm text-[#808080] uppercase text-center">
                upwork new york
              </p>
            </div>
            <div className=" flex justify-center flex-col lg:justify-end">
              <p className=" text-center text-[#808080] text-[13px] lg:text-sm mt-[10px] mb-[15px] lg:text-start">
                We have a number of different teams within our agency that
                specialise in different areas of business so you can be sure
                that you won't receive a generic service and although we boast a
                years and years of service.
              </p>
              <div className=" flex justify-center items-center lg:justify-start gap-1">
                <FaStar className=" text-[#ffc202]" />
                <FaStar className=" text-[#ffc202]" />
                <FaStar className=" text-[#ffc202]" />
                <FaStar className=" text-[#ffc202]" />
                <FaStar className=" text-[#ffc202]" />
              </div>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className=" w-full h-full flex flex-col justify-center lg:flex-row lg:gap-44 xl:px-20">
            <div className=" flex flex-col justify-center items-center">
              <div className=" w-44 h-44 rounded-full overflow-hidden">
                <Image
                  src={Testmonial2}
                  width={180}
                  height={180}
                  alt="testmonial"
                  className=" hover:scale-110 transition-all duration-500 cursor-pointer"
                />
              </div>
              <p className=" text-base text-[#24CDD5] text-center mt-4 capitalize xl:text-lg font-light">
                john smith
              </p>
              <p className=" text-[13px] xl:text-sm text-[#808080] uppercase text-center">
                upwork new york
              </p>
            </div>
            <div className=" flex justify-center flex-col lg:justify-end">
              <p className=" text-center text-[#808080] text-[13px] lg:text-sm mt-[10px] mb-[15px] lg:text-start">
                We have a number of different teams within our agency that
                specialise in different areas of business so you can be sure
                that you won't receive a generic service and although we boast a
                years and years of service.
              </p>
              <div className=" flex justify-center items-center lg:justify-start gap-1">
                <FaStar className=" text-[#ffc202]" />
                <FaStar className=" text-[#ffc202]" />
                <FaStar className=" text-[#ffc202]" />
                <FaStar className=" text-[#ffc202]" />
                <FaStar className=" text-[#ffc202]" />
              </div>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className=" w-full h-full flex flex-col justify-center lg:flex-row lg:gap-44 xl:px-20">
            <div className=" flex flex-col justify-center items-center">
              <div className=" w-44 h-44 rounded-full overflow-hidden">
                <Image
                  src={Testmonial2}
                  width={180}
                  height={180}
                  alt="testmonial"
                  className=" hover:scale-110 transition-all duration-500 cursor-pointer"
                />
              </div>
              <p className=" text-base text-[#24CDD5] text-center mt-4 capitalize xl:text-lg font-light">
                john smith
              </p>
              <p className=" text-[13px] xl:text-sm text-[#808080] uppercase text-center">
                upwork new york
              </p>
            </div>
            <div className=" flex justify-center flex-col lg:justify-end">
              <p className=" text-center text-[#808080] text-[13px] lg:text-sm mt-[10px] mb-[15px] lg:text-start">
                We have a number of different teams within our agency that
                specialise in different areas of business so you can be sure
                that you won't receive a generic service and although we boast a
                years and years of service.
              </p>
              <div className=" flex justify-center items-center lg:justify-start gap-1">
                <FaStar className=" text-[#ffc202]" />
                <FaStar className=" text-[#ffc202]" />
                <FaStar className=" text-[#ffc202]" />
                <FaStar className=" text-[#ffc202]" />
                <FaStar className=" text-[#ffc202]" />
              </div>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className=" left-1/4 top-[60%] md:left-[30%] lg:-left-10 lg:top-[90%] xl:left-6" />
      <CarouselNext className=" right-1/4 top-[60%] md:right-[30%] lg:top-[90%] lg:right-[78%] xl:right-[75%] " />
    </Carousel>
  );
};

export default CommentsSlider;
