import WorkTemplate from "./WorkTemplate";

const Work = () => {
  return (
    <div className=" w-full overflow-x-hidden py-8">
      <div className=" bg-[#26313C] py-16 lg:py-28">
        <div className=" container 2xl:px-44">
          <p className=" text-sm text-slate-200 text-center md:text-base">
            Quisque tellus risus, adipisci
          </p>
          <h2 className=" text-[32px] md:text-[35px] lg:text-[42px] lg:mb-14 mt-2 mb-6 text-white text-center capitalize">
            our work process
          </h2>
          <WorkTemplate />
        </div>
      </div>
    </div>
  );
};

export default Work;
