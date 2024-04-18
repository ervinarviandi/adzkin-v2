import React from "react";
import Link from "next/link";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

export default function ComandSearch() {
  return (
    <Command>
      <CommandInput
        placeholder="ketik perintah atau cari..."
        className="dark:text-[#83838f] text-gray-700"
      />
      <CommandList>
        <CommandEmpty>tidak ada hasil yang ditemukan.</CommandEmpty>
        <CommandGroup
          heading="Navigasi"
          className="dark:text-[#696970] text-gray-700"
        >
          <Link href="/">
            <CommandItem>Beranda</CommandItem>
          </Link>
          <Link href="/Beranda">
            <CommandItem>Dzikir Pagi</CommandItem>
          </Link>
          <Link href="/DzikirSore">
            <CommandItem>Dzikir Sore</CommandItem>
          </Link>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup
          heading="Links"
          className="dark:text-[#696970] text-gray-700"
        >
          <Link href="https://ervinarviandi.vercel.app/">
            <CommandItem>Personal Website</CommandItem>
          </Link>
          <Link href="https://ceritaervin.vercel.app/">
            <CommandItem>Blog</CommandItem>
          </Link>
        </CommandGroup>
        {/* <CommandGroup
          heading="Media Sosial"
          className="dark:text-[#696970] text-gray-600"
        >
          <Link href="https://github.com/ervinarviandi">
            <CommandItem>Github</CommandItem>
          </Link>
          <Link href="https://www.x.com/EArviandi?t=uhKSIrqEwhcLv7BCYqeRdw&s=09">
            <CommandItem>X</CommandItem>
          </Link>
          <Link href="https://www.instagram.com/ervinarviandi/">
            <CommandItem>Instagram</CommandItem>
          </Link>
          <Link href="https://www.threads.net/@ervinarviandi">
            <CommandItem>Threads</CommandItem>
          </Link>
          <Link href="mailto:muhamadervin34@gmail.com">
            <CommandItem>Email</CommandItem>
          </Link>
        </CommandGroup> */}
      </CommandList>
    </Command>
  );
}
