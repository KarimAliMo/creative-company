import { client, urlFor } from "@/lib/sanity";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import TextSlider from "./TextSlider";

async function getData() {
  const query = `
  *[_type == 'landing']{
  sliderImage1,
    sliderImage2,
    sliderImage3
}[0]
  `;
  const data = await client.fetch(query);
  return data;
}

const Landing = async () => {
  const data = await getData();
  return (
    <div
      style={{ backgroundImage: `url(${urlFor(data.sliderImage2).url()})` }}
      className=" h-screen w-full overflow-x-hidden relative z-10 flex justify-center items-center"
    >
      <div className=" container 2xl:px-44">
        <div className=" absolute top-0 left-0 w-full h-full bg-[#000000a9] z-10 bg-cover"></div>
        <div className=" hidden absolute z-20 right-[5%] top-1/2 md:flex md:flex-col md:gap-1 md:-translate-y-1/2">
          <Link href="#" className=" p-3 rounded-full hover:bg-blue-700">
            <FaFacebookF className=" text-white text-lg" />
          </Link>
          <Link href="#" className=" p-3 rounded-full hover:bg-blue-400">
            <FaTwitter className=" text-white text-lg " />
          </Link>
          <Link href="#" className=" p-3 rounded-full hover:bg-blue-500">
            <FaLinkedinIn className=" text-white text-lg" />
          </Link>
          <Link
            href="#"
            className=" p-3 rounded-full hover:bg-gradient-to-t from-yellow-200 via-red-500 to-purple-800"
          >
            <FaInstagram className=" text-white text-lg" />
          </Link>
        </div>
        <TextSlider />
      </div>
    </div>
  );
};

export default Landing;
