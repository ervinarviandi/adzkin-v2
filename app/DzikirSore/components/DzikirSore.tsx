import React from "react";
import { HiMiniCheckBadge } from "react-icons/hi2";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default async function DzikirSore(title: any, children: any) {
  const response = await fetch("https://dzikir.zakiego.com/api/v0/dzikir-sore");
  const surah = await response.json();
  // console.log(surah);

  return (
    <div className="w-full py-20">
      <div className="lg:max-w-6xl mx-auto px-5">
        <div className="p-1 border-l-4 border-orange-400 mb-5">
          <h2 className="lg:text-3xl text-xl font-bold ">Dzikir Sore</h2>
        </div>
        {surah.map((items: any) => (
          <div key={items}>
            <div className="  p-4 rounded-xl  dark:bg-[#161618] bg-gray-100 mt-4">
              <div className="flex justify-end">
                <div className=" bg-orange-400 p-2 rounded-xl  text-right">
                  <p className="lg:text-md text-sm">{items.read}</p>
                </div>
              </div>
              <h2 className="lg:text-5xl md:text-3xl text-2xl my-5 leading-loose text-right ">
                {" "}
                {items.arabic}
              </h2>
              <div className="">
                <p className="lg:text-lg md:text-md text-sm my-7 italic leading-relaxed ">
                  {" "}
                  {items.translation}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2 mt-3">
                <p className="lg:text-md text-sm flex flex-wrap gap-2 ">
                  {items.source}
                  <HiMiniCheckBadge size={20} />
                </p>
              </div>
              <p className="italic mt-5 lg:text-md text-sm dark:text-[#696970] text-gray-600">
                {items.benefit}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
