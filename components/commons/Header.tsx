import React from "react";
import { ModeToggle } from "@/components/atoms/modeToggle";
import MenuSheets from "@/components/atoms/MenuSheets";
import Link from "next/link";
const Header = () => {
  return (
    <div className="w-full backdrop-blur dark:bg-black/60 bg-[#fff]/60 fixed  z-20">
      <div className="lg:max-w-6xl mx-auto p-4 flex justify-between items-center  ">
        <Link href="/" className="font-bold text-lg">
          Adzkin.
        </Link>
        <div className="flex items-center gap-2">
          <MenuSheets />
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Header;
