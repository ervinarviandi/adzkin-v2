import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
// import { BiMenuAltLeft } from "react-icons/bi";
// import { HiMenuAlt1 } from "react-icons/hi";
import { CgMenuMotion } from "react-icons/cg";
import { WiSunrise, WiSunset } from "react-icons/wi";
import { RiHomeSmileLine } from "react-icons/ri";
import Link from "next/link";
import Acordion from "@/components/atoms/Acordion";

import { LiaQuranSolid } from "react-icons/lia";

export default function MenuSheets() {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="  p-2 hover:dark:bg-[#161618] hover:bg-gray-100 rounded-lg">
          <CgMenuMotion size={18} />
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="mt-4">
            <div className="font-bold text-lg flex items-center gap-2 ">
              <LiaQuranSolid size={20} />
              <p>Adzkin.</p>
            </div>
          </SheetTitle>
          <SheetDescription></SheetDescription>
          <div className="my-4">
            <div className="">
              <Link
                href="/"
                // bg-[#161618] color default
                className="flex items-center gap-2  dark:hover:bg-[#252529] hover:bg-gray-100 dark:text-[#fff] text-[#000] py-2 px-6 rounded-lg"
              >
                <RiHomeSmileLine size={20} />
                Beranda
              </Link>
            </div>
            <div className="py-3">
              <Link
                href="/Beranda"
                className="flex items-center gap-2  hover:bg-sky-400 dark:text-[#fff] text-[#000] py-2 px-6 rounded-lg"
              >
                <WiSunrise size={20} />
                Dzikir Pagi
              </Link>
            </div>
            <div>
              <Link
                href="/DzikirSore"
                className="flex items-center gap-2 hover:bg-orange-400 dark:text-[#fff] text-[#000] py-2 px-6 rounded-lg"
              >
                <WiSunset size={20} />
                Dzikir Sore
              </Link>
            </div>
          </div>

          <Acordion />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
