import { StatisticsType } from "@/lib/interface";
import { client } from "@/lib/sanity";
export const revalidate = 0; // revalidate at most 0 seconds

async function getData() {
  const query = `
    *[_type == 'statistics']{
  start,
    solutions,
    description
}[0]
    `;
  const data = await client.fetch(query);
  return data;
}
const Statistics = async () => {
  const data: StatisticsType = await getData();
  return (
    <div
      style={{ backgroundImage: `url(/counter-bg.jpg)` }}
      className=" w-full overflow-hidden bg-cover bg-fixed bg-left-top py-[78px]"
    >
      <div className=" container 2xl:px-44">
        {data && (
          <div className=" grid grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1 justify-center items-center">
            <div className=" flex justify-center items-center flex-col">
              <div className=" text-[65px] md:text-[70px] xl:text-[95px] text-white font-light text-center">
                {data.start}
              </div>
              <p className=" text-white capitalize text-lg md:text-[20px] xl:text-[22px] text-center">
                since we started
              </p>
            </div>
            <div className=" flex justify-center items-center">
              <p className=" text-white text-center text-sm xl:text-base py-5">
                {data.description}
              </p>
            </div>
            <div className=" flex justify-center items-center flex-col">
              <div className=" text-white text-[65px] md:text-[70px] xl:text-[95px] font-light text-center">
                {data.solutions}
              </div>
              <p className=" text-white capitalize text-center text-lg md:text-[20px] xl:text-[22px]">
                for our customers
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Statistics;
