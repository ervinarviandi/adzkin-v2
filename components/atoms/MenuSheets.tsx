import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BiMenuAltRight } from "react-icons/bi";
import { WiSunrise, WiSunset } from "react-icons/wi";
import { RiHomeSmileLine } from "react-icons/ri";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RiGithubFill } from "react-icons/ri";
export default function MenuSheets() {
  return (
    <Sheet>
      <div className="relative">
        <SheetTrigger>
          <BiMenuAltRight size={20} />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="mt-4"></SheetTitle>
            {/* <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription> */}
            <div className="my-4">
              <div className="">
                <Link
                  href="/"
                  className="flex items-center gap-2 bg-[#161618] hover:bg-[#252529] text-[#fff] py-2 px-6 rounded-lg"
                >
                  <RiHomeSmileLine size={20} />
                  Beranda
                </Link>
              </div>
              <div className="py-3">
                <Link
                  href="/Beranda"
                  className="flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-[#fff] py-2 px-6 rounded-lg"
                >
                  <WiSunrise size={20} />
                  Dzikir Pagi
                </Link>
              </div>
              <div>
                <Link
                  href="/DzikirSore"
                  className="flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-[#fff] py-2 px-6 rounded-lg"
                >
                  <WiSunset size={20} />
                  Dzikir Sore
                </Link>
              </div>
            </div>

            {/* Acordion */}
            <div>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-sm text-left">
                    Tentang
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-left">
                    Adzkin, Sebuah aplikasi dzikir yang memandu penggunanya
                    dalam berzikir pagi atau sore hari berdasarkan waktu mereka
                    saat ini. semua data dalam aplikasi ini diambil menggunakan
                    Public API.
                    <br />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            {/* Acordion */}
            <div className="my-4">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-sm text-left">
                    Sumber
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-left">
                    <ul>
                      <li>
                        <Link
                          href="https://rumaysho.com/1636-bacaan-dzikir-pagi.html"
                          className=" dark:hover:text-[#696970] hover:text-gray-600 flex items-center gap-2"
                        >
                          Rumaysho - Bacaan Dzikir Pagi
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://rumaysho.com/1638-bacaan-dzikir-petang.html"
                          className=" dark:hover:text-[#696970] hover:text-gray-600 flex items-center gap-2"
                        >
                          Rumyasho - Bacaan Dzikir Petang
                        </Link>
                      </li>
                      <li>
                        <Link
                          href=""
                          className=" dark:hover:text-[#696970] hover:text-gray-600 flex items-center gap-2 "
                        >
                          Yazid bin Abdul Qadir Jawas - Dzikir Pagi Petang
                        </Link>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="absolute bottom-5">
              <Link href="https://github.com/ervinarviandi/adzkin-">
                <RiGithubFill size={20} />
              </Link>
            </div>
          </SheetHeader>
        </SheetContent>
      </div>
    </Sheet>
  );
}
