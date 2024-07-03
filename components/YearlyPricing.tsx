import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
const YearlyPricing = () => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent>
        <CarouselItem className=" md:basis-1/2 lg:basis-1/3">
          <div className=" py-10 bg-white md:px-8">
            <div className=" flex flex-col justify-center items-center">
              <p className=" text-center capitalize text-slate-700 text-lg md:text-xl lg:text-[22px] xl:text-[26px] xl:tracking-wide">
                basic
              </p>
              <p className=" text-[13px] lg:text-sm xl:text-base text-center mb-7 text-slate-600 capitalize mt-1">
                the standard version
              </p>
              <span className=" w-1/4 h-[1px] bg-slate-300"></span>
            </div>
            <div className=" flex flex-col justify-center items-center">
              <p className=" text-[32px] md:text-[35px] lg:text-[42px] xl:text-[55px] text-center font-light my-4 dark:text-slate-700">
                $89.95
                <span className=" text-[15px] md:text-base lg:text-[17px]">
                  /yearly
                </span>
              </p>
              <span className=" w-1/4 h-[1px] bg-slate-300"></span>
            </div>
            <div className=" flex justify-center py-[25px]">
              <div className="">
                <div className=" flex items-center gap-3 my-[14px]">
                  <FaCheck className=" text-[12px] text-green-600" />

                  <p className=" capitalize text-slate-700">support forum</p>
                </div>
                <div className=" flex items-center gap-3 my-[14px]">
                  <FaCheck className=" text-[12px] text-green-600" />

                  <p className=" capitalize text-slate-700">free hosting</p>
                </div>
                <div className=" flex items-center gap-3 my-[14px]">
                  <ImCross className=" text-[12px] text-red-600" />
                  <p className=" capitalize text-slate-700">
                    40MB of storage space
                  </p>
                </div>
                <div className=" flex items-center gap-3 my-[14px]">
                  <ImCross className=" text-[12px] text-red-600" />
                  <p className=" capitalize text-slate-700">
                    social media integration
                  </p>
                </div>
                <div className=" flex items-center gap-3 my-[14px]">
                  <ImCross className=" text-[12px] text-red-600" />
                  <p className=" capitalize text-slate-700">
                    10GB of storage space
                  </p>
                </div>
              </div>
            </div>
            <div className=" flex justify-center items-center">
              <button
                type="button"
                className=" py-[10px] px-[30px] capitalize tracking-wide text-white bg-[#24CDD5] rounded-3xl"
              >
                choose plan
              </button>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className=" md:basis-1/2 lg:basis-1/3">
          <div className=" py-10 bg-white px-8">
            <div className=" flex flex-col justify-center items-center">
              <p className=" text-center capitalize text-slate-700 text-lg md:text-xl lg:text-[22px] xl:text-[26px] xl:tracking-wide">
                popbular
              </p>
              <p className=" text-[13px] lg:text-sm xl:text-base text-center mb-7 text-slate-600 capitalize mt-1">
                the standard version
              </p>
              <span className=" w-1/4 h-[1px] bg-slate-300"></span>
            </div>
            <div className=" flex flex-col justify-center items-center">
              <p className=" text-[32px] md:text-[35px] lg:text-[42px] xl:text-[55px] text-center font-light my-4 dark:text-slate-700">
                $179.95
                <span className=" text-[15px] md:text-base lg:text-[17px]">
                  /yearly
                </span>
              </p>
              <span className=" w-1/4 h-[1px] bg-slate-300"></span>
            </div>
            <div className=" flex justify-center py-[25px]">
              <div className="">
                <div className=" flex items-center gap-3 my-[14px]">
                  <FaCheck className=" text-[12px] text-green-600" />

                  <p className=" capitalize text-slate-700">support forum</p>
                </div>
                <div className=" flex items-center gap-3 my-[14px]">
                  <FaCheck className=" text-[12px] text-green-600" />

                  <p className=" capitalize text-slate-700">free hosting</p>
                </div>
                <div className=" flex items-center gap-3 my-[14px]">
                  <ImCross className=" text-[12px] text-red-600" />
                  <p className=" capitalize text-slate-700">
                    40MB of storage space
                  </p>
                </div>
                <div className=" flex items-center gap-3 my-[14px]">
                  <ImCross className=" text-[12px] text-red-600" />
                  <p className=" capitalize text-slate-700">
                    social media integration
                  </p>
                </div>
                <div className=" flex items-center gap-3 my-[14px]">
                  <ImCross className=" text-[12px] text-red-600" />
                  <p className=" capitalize text-slate-700">
                    10GB of storage space
                  </p>
                </div>
              </div>
            </div>
            <div className=" flex justify-center items-center">
              <button
                type="button"
                className=" py-[10px] px-[30px] capitalize tracking-wide text-white bg-[#24CDD5] rounded-3xl"
              >
                choose plan
              </button>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className=" md:basis-1/2 lg:basis-1/3">
          <div className=" py-10 bg-white px-8">
            <div className=" flex flex-col justify-center items-center">
              <p className=" text-center capitalize text-slate-700 text-lg md:text-xl lg:text-[22px] xl:text-[26px] xl:tracking-wide">
                enterprise
              </p>
              <p className=" text-[13px] lg:text-sm xl:text-base text-center mb-7 text-slate-600 capitalize mt-1">
                the standard version
              </p>
              <span className=" w-1/4 h-[1px] bg-slate-300"></span>
            </div>
            <div className=" flex flex-col justify-center items-center">
              <p className=" text-[32px] md:text-[35px] lg:text-[42px] xl:text-[55px] text-center font-light my-4 dark:text-slate-700">
                $269.95
                <span className=" text-[15px] md:text-base lg:text-[17px]">
                  /yearly
                </span>
              </p>
              <span className=" w-1/4 h-[1px] bg-slate-300"></span>
            </div>
            <div className=" flex justify-center py-[25px]">
              <div className="">
                <div className=" flex items-center gap-3 my-[14px]">
                  <FaCheck className=" text-[12px] text-green-600" />

                  <p className=" capitalize text-slate-700">support forum</p>
                </div>
                <div className=" flex items-center gap-3 my-[14px]">
                  <FaCheck className=" text-[12px] text-green-600" />

                  <p className=" capitalize text-slate-700">free hosting</p>
                </div>
                <div className=" flex items-center gap-3 my-[14px]">
                  <ImCross className=" text-[12px] text-red-600" />
                  <p className=" capitalize text-slate-700">
                    40MB of storage space
                  </p>
                </div>
                <div className=" flex items-center gap-3 my-[14px]">
                  <ImCross className=" text-[12px] text-red-600" />
                  <p className=" capitalize text-slate-700">
                    social media integration
                  </p>
                </div>
                <div className=" flex items-center gap-3 my-[14px]">
                  <ImCross className=" text-[12px] text-red-600" />
                  <p className=" capitalize text-slate-700">
                    10GB of storage space
                  </p>
                </div>
              </div>
            </div>
            <div className=" flex justify-center items-center">
              <button
                type="button"
                className=" py-[10px] px-[30px] capitalize tracking-wide text-white bg-[#24CDD5] rounded-3xl"
              >
                choose plan
              </button>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className=" md:basis-1/2 lg:basis-1/3">
          <div className=" py-10 bg-white px-8">
            <div className=" flex flex-col justify-center items-center">
              <p className=" text-center capitalize text-slate-700 text-lg md:text-xl lg:text-[22px] xl:text-[26px] xl:tracking-wide">
                ultimate
              </p>
              <p className=" text-[13px] lg:text-sm xl:text-base text-center mb-7 text-slate-600 capitalize mt-1">
                the standard version
              </p>
              <span className=" w-1/4 h-[1px] bg-slate-300"></span>
            </div>
            <div className=" flex flex-col justify-center items-center">
              <p className=" text-[32px] md:text-[35px] lg:text-[42px] xl:text-[55px] text-center font-light my-4 dark:text-slate-700">
                $449.95
                <span className=" text-[15px] md:text-base lg:text-[17px]">
                  /yearly
                </span>
              </p>
              <span className=" w-1/4 h-[1px] bg-slate-300"></span>
            </div>
            <div className=" flex justify-center py-[25px]">
              <div className="">
                <div className=" flex items-center gap-3 my-[14px]">
                  <FaCheck className=" text-[12px] text-green-600" />

                  <p className=" capitalize text-slate-700">support forum</p>
                </div>
                <div className=" flex items-center gap-3 my-[14px]">
                  <FaCheck className=" text-[12px] text-green-600" />

                  <p className=" capitalize text-slate-700">free hosting</p>
                </div>
                <div className=" flex items-center gap-3 my-[14px]">
                  <ImCross className=" text-[12px] text-red-600" />
                  <p className=" capitalize text-slate-700">
                    40MB of storage space
                  </p>
                </div>
                <div className=" flex items-center gap-3 my-[14px]">
                  <ImCross className=" text-[12px] text-red-600" />
                  <p className=" capitalize text-slate-700">
                    social media integration
                  </p>
                </div>
                <div className=" flex items-center gap-3 my-[14px]">
                  <ImCross className=" text-[12px] text-red-600" />
                  <p className=" capitalize text-slate-700">
                    10GB of storage space
                  </p>
                </div>
              </div>
            </div>
            <div className=" flex justify-center items-center">
              <button
                type="button"
                className=" py-[10px] px-[30px] capitalize tracking-wide text-white bg-[#24CDD5] rounded-3xl"
              >
                choose plan
              </button>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default YearlyPricing;
