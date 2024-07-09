import { ArticleType } from "@/lib/interface";
import { client, urlFor } from "@/lib/sanity";
import Image from "next/image";
import { CgCalendarDates } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa6";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

async function getData() {
  const query = `
    *[_type == 'blog']{
  title,
    articlePanner,
    description,
    writer,
    publish,
    comments
}
    `;
  const data = await client.fetch(query);
  return data;
}
const BlogArticles = async () => {
  const data: ArticleType[] = await getData();
  return (
    <div className=" grid justify-center flex-col md:mt-14 gap-5 grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 ">
      {data &&
        data.map((item, index) => {
          return (
            <div className=" overflow-hidden bg-white" key={index}>
              <div className=" w-full h-[50vh] relative md:h-[40vh] overflow-hidden">
                <Image
                  src={urlFor(item.articlePanner).url()}
                  alt="article-panner"
                  fill
                  className=" absolute top-0 left-0 w-full h-full hover:scale-110 cursor-pointer transition-all duration-500"
                />
              </div>
              <div className=" py-[40px] px-[30px]">
                <p className=" text-xl capitalize text-[#384141] md:text-[22px] hover:text-[#24CDD5] cursor-pointer">
                  {item.title}
                </p>
                <div className=" flex py-5 gap-3">
                  <div className=" flex items-center gap-1">
                    <CgCalendarDates className=" text-[#A5A5A5]" />
                    <p className=" text-[#A5A5A5] text-[12px]">
                      {item.publish}
                    </p>
                  </div>
                  <div className=" flex items-center gap-1">
                    <FaRegUser className=" text-[#A5A5A5]" />

                    <p className="  text-[#A5A5A5] text-[12px] capitalize">
                      {item.writer}
                    </p>
                  </div>
                  <div className=" flex items-center gap-1">
                    <IoChatbubbleEllipsesOutline className=" text-[#A5A5A5]" />

                    <p className=" text-[#A5A5A5] text-[12px]">
                      {item.comments}
                    </p>
                  </div>
                </div>
                <p className=" text-[13px] text-[#808080]">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default BlogArticles;
