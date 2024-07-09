import BlogArticles from "./BlogArticles";

const Blog = () => {
  return (
    <div className=" w-full overflow-hidden bg-[#F6F7F8]">
      <div className="container 2xl:px-44 py-[78px]">
        <div className="">
          <p className=" text-[#24CDD5] text-center text-sm md:text-base capitalize">
            read out our
          </p>
          <h2 className=" text-[#394141] text-center text-[32px] md:text=[35px] lg:text-[42px] xl:text[50px] capitalize mb-[30px]">
            latest blog
          </h2>
          <p className=" text-[#808080] text-[13px] md:w-2/3 md:m-auto text-center lg:w-1/2 xl:text-sm mb-7">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolores
            omnis provident quam reiciendis voluptatum.
          </p>
        </div>
        <BlogArticles />
      </div>
    </div>
  );
};

export default Blog;
