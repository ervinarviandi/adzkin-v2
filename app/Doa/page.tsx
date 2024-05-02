import React from "react";
// import DzikirSore from "@/app/DzikirSore/components/DzikirSore";
import Header from "@/components/commons/Header";
import Footer from "@/components/commons/Footer";
import Doa from "@/app/Doa/components/Doa";
const page = () => {
  return (
    <>
      <div className="w-full  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        {/* <h2>Halaman Doa</h2> */}
        <div className="z-10 relative">
          <Header />
          <div className="pt-5">
            <Doa />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default page;
