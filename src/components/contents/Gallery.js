import Image from "next/image.js";
import React from "react";

export default function Gallery() {
  return (
    <>
        <section
      id="gallery"
      className='w-full p-10 min-h-screen bg-no-repeat  bg-center bg-cover bg-fixed  bg-[url("/bg1.png")]'
    >
      <p className="text-white text-center lg:text-[60px] md:text-4xl text-3xl font-bold font-legion">
        Meet our mates
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8 xl:gap-10 mt-10 md:mt-20 xl:px-20">

        <div className="card relative w-full lg:min-h-[500px] border overflow-hidden border-[#E0C167] min-h-[400px] rounded-xl  backdrop-blur-lg cursor-pointer hover:shadow-lg duration-300">
          <div className="face face--front ">
            <div className="flex relative items-center justify-center lg:text-4xl text-2xl font-bold w-full h-full text-white">
              <Image
                src="/cat.gif"
                width={400}
                height={400}
                className="w-full h-full object-cover overflow-hidden "
              />
              <span className="font-display absolute bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap">Hadd Brother</span>
            </div>
          </div>
          <div className="face face--back">
            <div className="flex  flex-col gap-4 justify-center lg:text-2xl text-xl font-bold w-full h-full text-white p-5  xl:pl-10">
              <p>⮞ Dummy text to see how it looks</p>
              <p>⮞ Dummy text to see how it looks</p>
              <p>⮞ Dummy text to see how it looks</p>
              <p>⮞ Dummy text to see how it looks</p>
              <p>⮞ Dummy text to see how it looks</p>
            </div>
          </div>
        </div>
        <div className="card relative w-full lg:min-h-[500px] border overflow-hidden border-[#E0C167] min-h-[400px] rounded-xl  backdrop-blur-lg cursor-pointer hover:shadow-lg duration-300">
          <div className="face face--front ">
            <div className="flex relative items-center justify-center lg:text-4xl text-2xl font-bold w-full h-full text-white">
              <Image
                src="/cat.gif"
                width={400}
                height={400}
                className="w-full h-full object-cover overflow-hidden "
              />
              <span className="font-display absolute bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap">Hadd Brother</span>
            </div>
          </div>
          <div className="face face--back">
            <div className="flex  flex-col gap-4 justify-center lg:text-2xl text-xl font-bold w-full h-full text-white p-5  xl:pl-10">
              <p>⮞ Dummy text to see how it looks</p>
              <p>⮞ Dummy text to see how it looks</p>
              <p>⮞ Dummy text to see how it looks</p>
              <p>⮞ Dummy text to see how it looks</p>
              <p>⮞ Dummy text to see how it looks</p>
            </div>
          </div>
        </div>
        <div className="card relative w-full lg:min-h-[500px] border overflow-hidden border-[#E0C167] min-h-[400px] rounded-xl  backdrop-blur-lg cursor-pointer hover:shadow-lg duration-300">
          <div className="face face--front ">
            <div className="flex relative items-center justify-center lg:text-4xl text-2xl font-bold w-full h-full text-white">
              <Image
                src="/cat.gif"
                width={400}
                height={400}
                className="w-full h-full object-cover overflow-hidden "
              />
              <span className="font-display absolute bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap">Hadd Brother</span>
            </div>
          </div>
          <div className="face face--back">
            <div className="flex  flex-col gap-4 justify-center lg:text-2xl text-xl font-bold w-full h-full text-white p-5  xl:pl-10">
              <p>⮞ Dummy text to see how it looks</p>
              <p>⮞ Dummy text to see how it looks</p>
              <p>⮞ Dummy text to see how it looks</p>
              <p>⮞ Dummy text to see how it looks</p>
              <p>⮞ Dummy text to see how it looks</p>
            </div>
          </div>
        </div>
        <div className="card relative w-full lg:min-h-[500px] border overflow-hidden border-[#E0C167] min-h-[400px] rounded-xl  backdrop-blur-lg cursor-pointer hover:shadow-lg duration-300">
          <div className="face face--front ">
            <div className="flex relative items-center justify-center lg:text-4xl text-2xl font-bold w-full h-full text-white">
              <Image
                src="/cat.gif"
                width={400}
                height={400}
                className="w-full h-full object-cover overflow-hidden "
              />
              <span className="font-display absolute bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap">Hadd Brother</span>
            </div>
          </div>
          <div className="face face--back">
            <div className="flex  flex-col gap-4 justify-center lg:text-2xl text-xl font-bold w-full h-full text-white p-5  xl:pl-10">
              <p>⮞ Dummy text to see how it looks</p>
              <p>⮞ Dummy text to see how it looks</p>
              <p>⮞ Dummy text to see how it looks</p>
              <p>⮞ Dummy text to see how it looks</p>
              <p>⮞ Dummy text to see how it looks</p>
            </div>
          </div>
        </div>
        <div className="card relative w-full lg:min-h-[500px] border overflow-hidden border-[#E0C167] min-h-[400px] rounded-xl  backdrop-blur-lg cursor-pointer hover:shadow-lg duration-300">
          <div className="face face--front ">
            <div className="flex relative items-center justify-center lg:text-4xl text-2xl font-bold w-full h-full text-white">
              <Image
                src="/cat.gif"
                width={400}
                height={400}
                className="w-full h-full object-cover overflow-hidden "
              />
              <span className="font-display absolute bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap">Hadd Brother</span>
            </div>
          </div>
          <div className="face face--back">
            <div className="flex  flex-col gap-4 justify-center lg:text-2xl text-xl font-bold w-full h-full text-white p-5  xl:pl-10">
              <p>⮞ Dummy text to see how it looks</p>
              <p>⮞ Dummy text to see how it looks</p>
              <p>⮞ Dummy text to see how it looks</p>
              <p>⮞ Dummy text to see how it looks</p>
              <p>⮞ Dummy text to see how it looks</p>
            </div>
          </div>
        </div>
        <div className="card relative w-full lg:min-h-[500px] border overflow-hidden border-[#E0C167] min-h-[400px] rounded-xl  backdrop-blur-lg cursor-pointer hover:shadow-lg duration-300">
          <div className="face face--front ">
            <div className="flex relative items-center justify-center lg:text-4xl text-2xl font-bold w-full h-full text-white">
              <Image
                src="/cat.gif"
                width={400}
                height={400}
                className="w-full h-full object-cover overflow-hidden "
              />
              <span className="font-display absolute bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap">Hadd Brother</span>
            </div>
          </div>
          <div className="face face--back">
            <div className="flex  flex-col gap-4 justify-center lg:text-2xl text-xl font-bold w-full h-full text-white p-5  xl:pl-10">
              <p>⮞ Dummy text to see how it looks</p>
              <p>⮞ Dummy text to see how it looks</p>
              <p>⮞ Dummy text to see how it looks</p>
              <p>⮞ Dummy text to see how it looks</p>
              <p>⮞ Dummy text to see how it looks</p>
            </div>
          </div>
        </div>
        <div className="card relative w-full lg:min-h-[500px] border overflow-hidden border-[#E0C167] min-h-[400px] rounded-xl  backdrop-blur-lg cursor-pointer hover:shadow-lg duration-300">
          <div className="face face--front ">
            <div className="flex relative items-center justify-center lg:text-4xl text-2xl font-bold w-full h-full text-white">
              <Image
                src="/cat.gif"
                width={400}
                height={400}
                className="w-full h-full object-cover overflow-hidden "
              />
              <span className="font-display absolute bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap">Hadd Brother</span>
            </div>
          </div>
          <div className="face face--back">
            <div className="flex  flex-col gap-4 justify-center lg:text-2xl text-xl font-bold w-full h-full text-white p-5  xl:pl-10">
              <p>⮞ Dummy text to see how it looks</p>
              <p>⮞ Dummy text to see how it looks</p>
              <p>⮞ Dummy text to see how it looks</p>
              <p>⮞ Dummy text to see how it looks</p>
              <p>⮞ Dummy text to see how it looks</p>
            </div>
          </div>
        </div>
        <div className="card relative w-full lg:min-h-[500px] border overflow-hidden border-[#E0C167] min-h-[400px] rounded-xl  backdrop-blur-lg cursor-pointer hover:shadow-lg duration-300">
          <div className="face face--front ">
            <div className="flex relative items-center justify-center lg:text-4xl text-2xl font-bold w-full h-full text-white">
              <Image
                src="/cat.gif"
                width={400}
                height={400}
                className="w-full h-full object-cover overflow-hidden "
              />
              <span className="font-display absolute bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap">Hadd Brother</span>
            </div>
          </div>
          <div className="face face--back">
            <div className="flex  flex-col gap-4 justify-center lg:text-2xl text-xl font-bold w-full h-full text-white p-5  xl:pl-10">
              <p>⮞ Dummy text to see how it looks</p>
              <p>⮞ Dummy text to see how it looks</p>
              <p>⮞ Dummy text to see how it looks</p>
              <p>⮞ Dummy text to see how it looks</p>
              <p>⮞ Dummy text to see how it looks</p>
            </div>
          </div>
        </div>
    

 
         
      </div>
    </section>
    </>
  );
}
