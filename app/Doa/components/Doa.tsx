import React from "react";

export default async function Doa(title: any, children: any) {
  const response = await fetch("https://doa-doa-api-ahmadramadhan.fly.dev/api");
  const surah = await response.json();
  // console.log(surah);

  return (
    <div className="w-full py-20">
      <div className="lg:max-w-6xl mx-auto px-5">
        <div className=" p-1 border-l-4 border-purple-400 mb-5">
          <h2 className="lg:text-3xl text-xl font-bold ">Doa Doa</h2>
        </div>
        {surah.map((items: any) => (
          <div key={items}>
            <div className=" p-4 rounded-xl  dark:bg-[#161618] bg-gray-100 mt-4">
              <div className="flex justify-start">
                <div className=" bg-purple-400 p-2 rounded-lg  text-right">
                  <p className="lg:text-md text-sm">{items.id}</p>
                </div>
              </div>

              <div className="my-3">
                <span>{items.doa}</span>
              </div>
              <h2 className="lg:text-5xl md:text-3xl text-2xl my-5 leading-loose text-right ">
                {" "}
                {items.ayat}
              </h2>
              <div className="">
                <p className="lg:text-lg md:text-md text-sm my-7 italic leading-relaxed ">
                  {" "}
                  {items.latin}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2 mt-3">
                <p className="lg:text-md text-sm flex flex-wrap gap-2 ">
                  {items.artinya}
                  {/* <HiMiniCheckBadge size={20} /> */}
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

// export default DzikirPagi;
