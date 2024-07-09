import { client, urlFor } from "@/lib/sanity";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { memberType } from "@/lib/interface";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

async function getData() {
  const query = `
  *[_type == 'team']{
  member,
    job,
    picture,
}
  `;
  const data = await client.fetch(query);
  return data;
}
const Team = async () => {
  const data: memberType[] = await getData();
  return (
    <div className=" w-full pt-[84px]">
      <div className=" container 2xl:px-44">
        <div className=" md:grid md:grid-cols-2 md:grid-rows-1 md:justify-between md:items-center">
          <div className=" flex flex-col justify-center items-center gap-3 md:items-start">
            <p className=" text-[#24CDD5] text-base xl:text-lg text-center md:text-start">
              Quisque tellus risus, adipisci
            </p>
            <h4 className=" text-4xl text-slate-800 dark:text-slate-100 text-center md:text-start capitalize lg:text-[42px] xl:text-[50px]">
              meet our experts
            </h4>
          </div>
          <div className=" flex justify-center items-center md:text-start md:items-start md:justify-start">
            <p className=" text-sm text-slate-500 dark:text-slate-300 text-center md:text-start mt-8 md:mt-0">
              Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed
              suscipit. Vestibulum auctor nunc vitae diam eleifend, in maximus
              metus sollicitudin. Quisque vitae sodales lectus.
            </p>
          </div>
        </div>
        <div className=" mt-16 relative -mb-[30vh] z-20">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="">
              {data &&
                data.map((member, index) => {
                  return (
                    <CarouselItem
                      key={index}
                      className=" basis-1/2 md:basis-1/3 lg:basis-1/4 p-0"
                    >
                      <div className=" cursor-pointer hover:last:bg-gradient-to-r from-[#5192e1] to-[#23ced5] hover:last:text-white">
                        <div className=" h-fit w-fit overflow-hidden">
                          <Image
                            src={urlFor(member.picture).url()}
                            alt="employee-pic"
                            width={500}
                            height={600}
                            className=" hover:scale-125 transition-all duration-500"
                          />
                        </div>
                        <div className=" py-[26px] px-[13px] dark:text-slate-800">
                          <p className=" text-center capitalize xl:font-semibold tracking-wider">
                            {member.member}
                          </p>
                          <p className=" text-center capitalize text-[13px] mb-3">
                            {member.job}
                          </p>
                          <div className=" flex justify-center items-center gap-6">
                            <FaFacebookF />
                            <FaTwitter />
                            <FaInstagram />
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  );
                })}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Team;
