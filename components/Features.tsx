import { client } from "@/lib/sanity";
import SVG from "react-inlinesvg";
import { featuresSlide } from "@/lib/interface";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
export const revalidate = 0; // revalidate at most 0 seconds

async function getData() {
  const query = `
    *[_type == 'features'] {
  featureTitle,
    featureDescription,
    "svg":icon.svg
}

    `;
  const data = await client.fetch(query);
  return data;
}

const Features = async () => {
  const data: featuresSlide[] = await getData();
  return (
    <div className=" w-full overflow-x-hidden h-[50vh] flex justify-center items-center ">
      <div className=" container 2xl:px-44">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className=" "
        >
          <CarouselContent className=" items-center">
            {data &&
              data.map((item, index) => {
                return (
                  <CarouselItem
                    key={index}
                    className=" h-fit hover:py-8 cursor-pointer md:basis-1/2 lg:basis-1/3 bg-[#26313C] hover:bg-gradient-to-r from-[#5192e1] via-[#23ced5] to-[#5192e1] p-0 "
                  >
                    <div className=" py-16 px-7 flex flex-col items-center justify-center ">
                      <SVG
                        src={item.svg}
                        className=" text-white text-4xl mb-6"
                      />
                      <h2 className=" text-white capitalize text-base md:text-lg font-semibold mb-3">
                        {item.featureTitle}
                      </h2>
                      <p className=" text-white text-center text-sm lg:w-[90%]">
                        {item.featureDescription}
                      </p>
                    </div>
                  </CarouselItem>
                );
              })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Features;
