import CommentsSlider from "./CommentsSlider";

const Comments = () => {
  return (
    <div className=" w-full overflow-hidden">
      <div className=" bg-[url('/testimonial-bg.jpg')] bg-cover bg-fixed h-[40vh] bg-top pt-12">
        <div className="container 2xl:px-44 flex justify-center h-full lg:justify-end lg:items-center">
          <div className="">
            <p className=" text-white text-sm text-center md:text-base lg:text-end">
              Quisque tellus risus, adipisci
            </p>
            <h3 className=" capitalize text-white text-[32px] text-center md:text-[35px] lg:text-[42px] lg:text-start xl:text-[50px]">
              what people say
            </h3>
          </div>
        </div>
      </div>
      <div className=" container 2xl:px-44">
        <CommentsSlider />
      </div>
    </div>
  );
};

export default Comments;
