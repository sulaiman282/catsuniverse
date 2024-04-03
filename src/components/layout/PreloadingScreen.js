import { Avatar, IconButton } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";


export default function PreloadingScreen({ togglePlay1, handleToggleVideo1 }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (show === false) {
      document.body.classList.add("overflow-hidden");
    }
  }, [show]);

  const [hide, setHide] = useState(false);

  const makeHide = () => {
    setTimeout(() => {
      setHide(true);

      document.body.classList.remove("overflow-hidden");
    }, 2000);
  };

  return (
    <>
      {!hide && (
        <>
          <div
            className={`backdrop-blur-sm backdrop-brightness-[10%] !z-50  triangle ${
              show ? "-translate-x-full -translate-y-full" : ""
            } triangle2 duration-[2000ms] w-full h-full fixed top-0 left-0`}
          ></div>
          <div
            className={`backdrop-blur-sm backdrop-brightness-[10%] !z-50 triangle rotate-180 ${
              show ? "translate-x-full translate-y-full" : ""
            } triangle2 duration-[2000ms] w-full h-full fixed top-0 left-0`}
          ></div>

          <div className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-500 flex flex-col items-center gap-2">
            <IconButton
              onClick={(e) => {
                togglePlay1();
                handleToggleVideo1();
                setShow(true);
                makeHide();
              }}
              className={`animate-pulse  w-fit h-fit duration-500    ${
                show ? "opacity-0" : "bg-black/20 hover:bg-white mt-5 opacity-100"
              }`}
            >
              <Avatar src="/fav.png" className="h-12 w-12 lg:h-20 lg:w-20"></Avatar>
            </IconButton>
            <span
              className={`mt-5 font-bold font-display duration-500  lg:text-4xl md:text-3xl text-2xl text-white  text-center  ${
                show ? "opacity-0 " : "opacity-100"
              }`}
            >
              ENTER THE
              <br />
              CATS UNIVERSE
            </span>
          </div>
        </>
      )}
    </>
  );
}
