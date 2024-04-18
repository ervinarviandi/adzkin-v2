import Link from "next/link";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";
import { SparklesCore } from "@/components/ui/sparkles";
import { TbSquareRoundedArrowDownFilled } from "react-icons/tb";
export default function Home() {
  return (
    <>
      <div
        className="h-screen relative w-full overflow-hidden bg-[#000000] flex flex-col items-center justify-center   
        "
      >
        {/* Radial gradient for the container to give a faded look */}
        {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div> */}
        <div
          className="absolute inset-0 w-full bg-[#000000] h-full z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none"
          id="Buka-Aplikasi"
        />
        <Boxes />
        <h2
          className={cn(
            "text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8"
          )}
        >
          Adzkin.
        </h2>
        <p className="my-3 lg:text-md text-sm text-center text-neutral-300 lg:w-8/12 w-9/12 relative z-20">
          {/* Sebuah aplikasi dzikir yang memandu penggunanya dalam berzikir pagi
          atau sore hari . */}
          Adzkin, Aplikasi untuk Android &amp; Desktop yang bertujuan memudahkan
          kaum muslimin untuk melakukan dzikir pagi dan petang sesuai tuntunan
          Nabi shalallahu &apos;alaihi wasallam melalui handphone/tablet
          berbasis website
        </p>

        <Link
          href="/Beranda"
          className={cn(
            "my-5 flex bg-[#161618] text-white hover:bg-[#252529] py-3 px-6 rounded-xl justify-center z-10 relative text-center text-xl"
          )}
        >
          Buka Aplikasi
        </Link>
      </div>
    </>
  );
}
