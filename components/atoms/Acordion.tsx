import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function Acordion() {
  return (
    <>
      {/* Acordion */}
      <div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-sm text-left">
              Tentang
            </AccordionTrigger>
            <AccordionContent className="text-sm text-left">
              Adzkin, Aplikasi dzikir untuk Android &amp; Desktop yang bertujuan
              memudahkan kaum muslimin untuk melakukan dzikir pagi dan petang
              sesuai tuntunan Nabi shalallahu &apos;alaihi wasallam melalui
              handphone,tablet atau laptop berbasis website, <br /> semua data
              dalam aplikasi ini diambil menggunakan Public API.
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
    </>
  );
}
