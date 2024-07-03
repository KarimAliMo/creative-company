"use client";
import Image from "next/image";
import Logo from "@/public/creative logo.png";
import Link from "next/link";
import { ModeToggle } from "./MoodToggle";
import { PhoneMenu } from "./PhoneMenu";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [navBg, setNavBg] = useState(false);
  const navigation = () => {
    if (window.scrollY >= 60) {
      setNavBg(true);
    } else {
      setNavBg(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", navigation);
    return () => {
      window.addEventListener("scroll", navigation);
    };
  }, []);
  return (
    <nav
      className={
        navBg
          ? ` w-full overflow-hidden fixed 2xl:px-44 bg-[#fff] z-30`
          : ` w-full overflow-hidden fixed 2xl:px-44 bg-[#363d4347] z-30`
      }
    >
      <div className=" flex justify-between items-center container py-3">
        <div className=" relative z-30">
          <Image src={Logo} width={90} height={60} alt="logo-pic" />
        </div>
        <div className=" flex items-center justify-between gap-12">
          <div className=" lg:flex gap-6 items-center justify-center hidden">
            <Link
              href=""
              className={
                navBg
                  ? `capitalize text-slate-900 text-sm hover:text-cyan-400`
                  : `capitalize text-white text-sm hover:text-cyan-400`
              }
            >
              home
            </Link>
            <Link
              href=""
              className={
                navBg
                  ? `capitalize text-slate-900 text-sm hover:text-cyan-400`
                  : `capitalize text-white text-sm hover:text-cyan-400`
              }
            >
              about us
            </Link>
            <Link
              href=""
              className={
                navBg
                  ? `capitalize text-slate-900 text-sm hover:text-cyan-400`
                  : `capitalize text-white text-sm hover:text-cyan-400`
              }
            >
              our pricing
            </Link>
            <Link
              href=""
              className={
                navBg
                  ? `capitalize text-slate-900 text-sm hover:text-cyan-400`
                  : `capitalize text-white text-sm hover:text-cyan-400`
              }
            >
              portfolio
            </Link>
            <Link
              href=""
              className={
                navBg
                  ? `capitalize text-slate-900 text-sm hover:text-cyan-400`
                  : `capitalize text-white text-sm hover:text-cyan-400`
              }
            >
              our blog
            </Link>
            <Link
              href=""
              className={
                navBg
                  ? `capitalize text-slate-900 text-sm hover:text-cyan-400`
                  : `capitalize text-white text-sm hover:text-cyan-400`
              }
            >
              contact us
            </Link>
          </div>
          <div className=" flex items-center gap-4">
            <ModeToggle />
            <PhoneMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
