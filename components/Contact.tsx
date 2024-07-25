import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className=" w-full overflow-hidden">
      <div className="container 2xl:px-44 py-[105px]">
        <div className="">
          <p className=" text-[#24CDD5] text-[15px] text-center">
            Quisque tellus risus
          </p>
          <h3 className=" text-[#384141] text-center text-[32px] capitalize md:text-[35px] lg:text-[42px] xl:text-[50px]">
            contact us
          </h3>
          <p className=" text-center text-[13px] text-[#808080] mt-3 md:w-1/2 md:m-auto md:mt-4 lg:text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolores
            omnis provident quam reiciendis voluptatum.
          </p>
        </div>
        <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 md:gap-8 md:mt-12">
          <div className=" flex flex-col items-center gap-[10px] lg:gap-4 justify-center md:order-2 md:items-start md:justify-start">
            <p className=" text-[#24CDD5] text-sm xl:text-base">
              Trax Agency Worldwide
            </p>
            <p className=" text-[21px] text-[#384141] xl:text-[30px]">
              Our London Agency
            </p>
            <p className=" text-[13px] text-[#808080] lg:text-sm">
              Address: 309, New Cavendish St, EC1Y 3WK
            </p>
            <p className=" text-[13px] text-[#808080] lg:text-sm">
              0800 214 5252
            </p>
            <p className=" text-[13px] text-[#808080] lg:text-sm">
              0400 20778972
            </p>
            <p className=" text-[13px] text-[#808080] lg:text-sm">
              example@example.com
            </p>
            <p className=" text-[13px] text-[#808080] lg:text-sm">
              Mon-Fri: 9am-5pm
            </p>
            <div className=" flex justify-center gap-4 md:gap-5 mt-3">
              <FaFacebookF className=" text-sm text-[#4c4c4c] cursor-pointer" />
              <FaTwitter className=" text-sm text-[#4c4c4c] cursor-pointer" />
              <FaLinkedinIn className=" text-sm text-[#4c4c4c] cursor-pointer" />
              <FaInstagram className=" text-sm text-[#4c4c4c] cursor-pointer" />
              <FaWhatsapp className=" text-sm text-[#4c4c4c] cursor-pointer" />
              <FaRegEnvelope className=" text-sm text-[#4c4c4c] cursor-pointer" />
            </div>
          </div>
          <div className=" flex flex-col gap-3 mt-5 md:mt-0 md:order-1">
            <input
              type="text"
              name=""
              id=""
              className=" border border-[#DDD] rounded-[4px] px-2 py-3 text-sm"
              placeholder="Name"
            />
            <input
              type="email"
              name=""
              id=""
              className=" border border-[#DDD] rounded-[4px] px-2 py-3 text-sm"
              placeholder="Email"
            />
            <textarea
              name=""
              id=""
              className=" border border-[#DDD] rounded-[4px] px-2 py-3 text-sm h-[200px]"
              placeholder="Message"
            ></textarea>
            <button
              type="submit"
              className=" py-[8px] px-[30px] bg-gradient-to-r from-[#5192e1] to-[#23ced5] text-white capitalize rounded-3xl"
            >
              send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
