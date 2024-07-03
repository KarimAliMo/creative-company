import { levelType } from "@/lib/interface";
import { client } from "@/lib/sanity";

async function getData() {
  const query = `
    *[_type == "work"] | order(_createdAt asc){
  level,
    levelNumber,
    description
}
    `;
  const data = await client.fetch(query);
  return data;
}
const WorkTemplate = async () => {
  const data: levelType[] = await getData();
  return (
    <div className=" flex flex-col items-center gap-7 md:flex-row md:gap-4 md:justify-center md:flex-wrap xl:flex-nowrap">
      {data &&
        data.map((levels, index) => {
          return (
            <div
              className=" flex flex-col items-center gap-5 cursor-pointer"
              key={index}
            >
              <div className=" py-6 px-7 hover:bg-gradient-to-r from-[#5192e1] via-[#23ced5] to-[#5192e1] rounded-full border border-slate-100 w-fit h-fit text-[28px] text-white">
                0{levels.levelNumber}
              </div>
              <h4 className=" text-white text-sm capitalize">{levels.level}</h4>
              <p className=" text-slate-200 text-sm w-[70%] xl:w-full text-center">
                {levels.description}
              </p>
            </div>
          );
        })}
    </div>
  );
};

export default WorkTemplate;
