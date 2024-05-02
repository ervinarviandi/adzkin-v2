import React from "react";
import { ModeToggle } from "@/components/atoms/modeToggle";
import MenuSheets from "@/components/atoms/MenuSheets";
import Link from "next/link";
import { RiGithubFill } from "react-icons/ri";
import { LiaQuranSolid } from "react-icons/lia";
import { FaXTwitter } from "react-icons/fa6";
import SearchToggle from "@/components/atoms/SearchToggle";
const Header = () => {
  return (
    <div className="w-full backdrop-blur dark:bg-black/60 bg-[#fff]/60 fixed  z-20  dark:border-b-[#161618] border-b-gray-100">
      <div className="lg:max-w-6xl mx-auto p-4 flex justify-between items-center  ">
        <div className="font-bold text-lg lg:flex items-center gap-2 md:hiden hidden">
          <LiaQuranSolid size={20} />
          <Link href="/Beranda">Adzkin.</Link>
        </div>
        <div className="lg:hidden md:hidden flex items-center gap-2 mr-3">
          {/* <div className="p-2 hover:dark:bg-[#161618] hover:bg-gray-100 rounded-lg">
            <MenuSheets />
          </div> */}
          <div className="ml-3">
            <SearchToggle />
          </div>
        </div>

        <div className="flex items-center lg:gap-2 gap-1">
          <div className="lg:block md:block hidden">
            <SearchToggle />
          </div>

          <MenuSheets />
          <Link
            href="https://github.com/ervinarviandi"
            className="p-2 hover:dark:bg-[#161618] hover:bg-gray-100 rounded-lg"
          >
            <RiGithubFill size={18} />
          </Link>

          {/* Link X  */}
          {/* https://www.x.com/EArviandi?t=uhKSIrqEwhcLv7BCYqeRdw&s=09 */}
          <Link
            href=""
            className="p-2 hover:dark:bg-[#161618] hover:bg-gray-100 rounded-lg"
          >
            <FaXTwitter size={18} />
          </Link>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Header;
