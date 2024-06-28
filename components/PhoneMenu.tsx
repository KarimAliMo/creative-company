"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FaBarsStaggered } from "react-icons/fa6";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useState, useEffect } from "react";

export function PhoneMenu() {
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
    <Sheet>
      <SheetTrigger asChild>
        <FaBarsStaggered
          className={
            navBg
              ? `relative z-30 text-slate-900 text-xl cursor-pointer`
              : `relative z-30 text-white text-xl cursor-pointer`
          }
        />
      </SheetTrigger>
      <SheetContent className=" bg-gradient-to-r from-[hsla(213,71%,60%,1)] to-[#23ced5aa]">
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className=" my-[10vh]">
          <div className=" flex gap-6 flex-col items-start justify-center ">
            <Link href="" className=" uppercase text-white text-sm lg:text-xl">
              home
            </Link>
            <Link href="" className=" uppercase text-white text-sm lg:text-xl">
              about us
            </Link>
            <Link href="" className=" uppercase text-white text-sm lg:text-xl">
              our pricing
            </Link>
            <Link href="" className=" uppercase text-white text-sm lg:text-xl">
              portfolio
            </Link>
            <Link href="" className=" uppercase text-white text-sm lg:text-xl">
              our blog
            </Link>
            <Link href="" className=" uppercase text-white text-sm lg:text-xl">
              contact us
            </Link>
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <div className="">
              <div className=" flex gap-8 mt-12">
                <Link href="" className="">
                  <FaFacebookF className=" text-white text-lg" />
                </Link>
                <Link href="" className="">
                  <FaTwitter className=" text-white text-lg" />
                </Link>
                <Link href="" className="">
                  <FaInstagram className=" text-white text-lg" />
                </Link>
              </div>
              <p className=" text-white text-sm mt-4">
                © 2019-2024 Trax. Coded by Karim Ali
              </p>
            </div>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
