import Image from "next/image";
import FooterLogo from "@/public/creative logo.png";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { GoTriangleRight } from "react-icons/go";

const Footer = () => {
  return (
    <div className=" w-full overflow-x-hidden bg-[#26313C]">
      <div className="container 2xl:px-44 relative pt-[84px] lg:pb-[84px]">
        <div className=" absolute"></div>
        <div className=" grid grid-cols-2 grid-rows-2 gap-x-5 gap-y-10 lg:grid-cols-4 lg:grid-rows-1 lg:gap-x-10">
          <div className=" flex flex-col gap-8">
            <Image
              src={FooterLogo}
              alt="logo"
              className=""
              width={120}
              height={90}
            />
            <p className=" text-white text-[13px]">
              Keep away from people who try to belittle your ambitions Small
              people always do that but the really great Friendly.
            </p>
            <div className=" flex gap-4 items-center">
              <IoPhonePortraitOutline className=" text-4xl text-white" />

              <div className=" flex flex-col">
                <p className=" text-[13px] text-white">+01 - 123 - 4567</p>
                <p className=" text-[13px] text-white">example@example.com</p>
              </div>
            </div>
            <div className=" flex gap-3">
              <div className=" p-2 rounded-full border-[0.5px] border-white cursor-pointer">
                <FaFacebookF className=" text-white" />
              </div>
              <div className=" p-2 rounded-full border-[0.5px] border-white cursor-pointer">
                <FaTwitter className=" text-white" />
              </div>
              <div className=" p-2 rounded-full border-[0.5px] border-white cursor-pointer">
                <FaLinkedinIn className=" text-white" />
              </div>
              <div className=" p-2 rounded-full border-[0.5px] border-white cursor-pointer">
                <FaInstagram className=" text-white" />
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-8 lg:gap-5">
            <p className=" text-xl text-white capitalize">latest news</p>
            <div className=" flex flex-col gap-3 lg:gap-2">
              <p className=" text-white hover:text-[#24CDD5] text-sm">
                Lorem ipsum dolor sit amet.
              </p>
              <p className=" text-[#24CDD5] text-[13px]">22 july 2024</p>
              <span className=" w-full h-[1px] bg-slate-600 relative"></span>
            </div>
            <div className=" flex flex-col gap-3 lg:gap-2">
              <p className=" text-white hover:text-[#24CDD5] text-sm">
                Lorem ipsum dolor sit amet.
              </p>
              <p className=" text-[#24CDD5] text-[13px]">22 july 2024</p>
              <span className=" w-full h-[1px] bg-slate-600 relative"></span>
            </div>
            <div className=" flex flex-col gap-3 lg:gap-2">
              <p className=" text-white hover:text-[#24CDD5] text-sm">
                Lorem ipsum dolor sit amet.
              </p>
              <p className=" text-[#24CDD5] text-[13px]">22 july 2024</p>
              <span className=" w-full h-[1px] bg-slate-600 relative"></span>
            </div>
          </div>
          <div className="">
            <p className=" text-white text-xl capitalize mb-6">navigation</p>
            <div className=" flex gap-2 mb-3">
              <GoTriangleRight className=" text-slate-500" />

              <p className="text-white capitalize text-sm">home</p>
            </div>
            <div className=" flex gap-2 mb-3">
              <GoTriangleRight className=" text-slate-500" />

              <p className="text-white capitalize text-sm">about us</p>
            </div>
            <div className=" flex gap-2 mb-3">
              <GoTriangleRight className=" text-slate-500" />

              <p className="text-white capitalize text-sm">our pricing</p>
            </div>
            <div className=" flex gap-2 mb-3">
              <GoTriangleRight className=" text-slate-500" />

              <p className="text-white capitalize text-sm">portfolio</p>
            </div>
            <div className=" flex gap-2 mb-3">
              <GoTriangleRight className=" text-slate-500" />

              <p className="text-white capitalize text-sm">our blog</p>
            </div>
            <div className=" flex gap-2 mb-3">
              <GoTriangleRight className=" text-slate-500" />

              <p className="text-white capitalize text-sm">contact us</p>
            </div>
          </div>
          <div className="">
            <p className=" text-white text-xl capitalize mb-6">
              business hours
            </p>
            <p className=" text-white text-sm mb-5">
              Our support available to help you 24 hours a day, seven days week
            </p>
            <p className=" text-white capitalize text-[13px] mb-3">
              monday-saturday: ............. 8.00-18.00
            </p>
            <p className=" text-white capitalize text-[13px] mb-3">
              monday-saturday: ............. 8.00-18.00
            </p>
            <p className=" text-white capitalize text-[13px] mb-3">
              monday-saturday: ............. 8.00-18.00
            </p>
            <p className=" text-white capitalize text-[13px] mb-3">
              monday-saturday: ............. 8.00-18.00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
