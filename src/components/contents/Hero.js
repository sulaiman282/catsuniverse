import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero({ videoRef }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const marginTop = scrollY * 0.14;
  const marginBottom = -scrollY * 0.14;

  return (
    <section
      className='relative bg-[url("/bg1.png")] overflow-hidden min-h-screen bg-no-repeat  bg-center bg-cover bg-fixed '
      id="hero"
    >
      {/* <video
        ref={videoRef}
        loop
        className="w-full object-cover h-screen pointer-events-none"
        muted
        playsInline
      >
        <source src="/video1.mp4" type="video/mp4" />
      </video> */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
        <div className="flex items-center flex-col justify-center my-10  w-full h-full lg:gap-16 gap-10">
          <Image
            src={"/cats.png"}
            width={1920}
            height={1080}
            style={{
              marginTop: `${marginTop}px`,
              marginBottom: `${marginBottom}px`,
            }}
            className="object-contain image-animation  w-full lg:w-[40vw] xl:w-[50vw]"
          />
          <p className="text-5xl xl:text-[64px] font-display text-white text-center font-bold">
            Welcome to Cats Universe
          </p>
        </div>
      </div>
    </section>
  );
}
