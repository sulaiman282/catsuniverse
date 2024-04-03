import React, { useRef, useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Social from "./SocailFloat";
import Audio from "./Audio";
import Scroller from "./Scroller";
import PreloadingScreen from "./PreloadingScreen";
import Hero from "../contents/Hero.js";

export default function Layout({ children }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const audio = audioRef.current;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
      audio.volume = 15 / 100;
    }

    setIsPlaying(!isPlaying);
  };

  const togglePlay1 = () => {
    const audio = audioRef.current;

    audio.play();
    audio.volume = 15 / 100;

    setIsPlaying(true);
  };

  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef?.current;

    const handleCanPlay = () => {
      if(video){
        setIsVideoLoaded(true);
        if (isVideoPlaying) {
          video.play();
        }
      }
   
    };

    video && video.addEventListener("canplay", handleCanPlay);

    return () => {
      video &&   video.removeEventListener("canplay", handleCanPlay);
    };
  }, [isVideoPlaying]);

  const handleToggleVideo1 = () => {
    const video = videoRef.current;
    if(video){
      video.play();
      setIsVideoPlaying(true);
    }
   
  };

  return (
    <>
      <>
        <header className="relative">
          <Header />
        </header>

        <main>
          
          <Hero videoRef={videoRef}  />
          {children}
        </main>
        <Social />
        <Audio
          audioRef={audioRef}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          togglePlay={togglePlay}
        />
        <Scroller />

        <footer>{/* <Footer /> */}</footer>
      </>

      <PreloadingScreen
        togglePlay1={togglePlay1}
        handleToggleVideo1={handleToggleVideo1}
      />
    </>
  );
}
