"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import LogoEnvato from "@/public/logo-5.png";
import Autoplay from "embla-carousel-autoplay";

const Partners = () => {
  return (
    <div className=" w-full overflow-hidden">
      <div className="container 2xl:px-44 py-[105px]">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent>
            <CarouselItem className=" basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
              <div className=" w-full h-full flex justify-center items-center">
                <Image src={LogoEnvato} alt="Logo" width={160} height={30} />
              </div>
            </CarouselItem>
            <CarouselItem className=" basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
              <div className=" w-full h-full flex justify-center items-center">
                <Image src={LogoEnvato} alt="Logo" width={160} height={30} />
              </div>
            </CarouselItem>
            <CarouselItem className=" basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
              <div className=" w-full h-full flex justify-center items-center">
                <Image src={LogoEnvato} alt="Logo" width={160} height={30} />
              </div>
            </CarouselItem>
            <CarouselItem className=" basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
              <div className=" w-full h-full flex justify-center items-center">
                <Image src={LogoEnvato} alt="Logo" width={160} height={30} />
              </div>
            </CarouselItem>
            <CarouselItem className=" basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
              <div className=" w-full h-full flex justify-center items-center">
                <Image src={LogoEnvato} alt="Logo" width={160} height={30} />
              </div>
            </CarouselItem>
            <CarouselItem className=" basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
              <div className=" w-full h-full flex justify-center items-center">
                <Image src={LogoEnvato} alt="Logo" width={160} height={30} />
              </div>
            </CarouselItem>
            <CarouselItem className=" basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
              <div className=" w-full h-full flex justify-center items-center">
                <Image src={LogoEnvato} alt="Logo" width={160} height={30} />
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default Partners;
