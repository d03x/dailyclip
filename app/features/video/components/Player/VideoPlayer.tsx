import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Player from "react-player";
import { Play } from "./icons/Play";
import { NextIcon } from "./icons/Next";
import { Volume } from "./icons/Volume";
import { PauseIcon } from "./icons/PauseIcon";
import cn from "~/utils/cn";

export const VideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const btnPlay = useRef<HTMLButtonElement>(null);
  const [duration, setDuration] = useState<number>(0);
  const [isPlayed, setIsPlayed] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [percentage, setPercentage] = useState<number>(0);
    const [isScrubbing,setIsScribbing] = useState<boolean>(false)
    const formatDuration = (duration : number)=>{
        const current = videoRef.current?.currentTime as number;
        setCurrentTime(current);
        console.log(current,duration);
        
        return (current / duration) * 100;
    }

  function handleLoadedMetadata() {
    setDuration(videoRef.current?.duration as number);
  }
  function handleTimeUpdate(e: Event) {
    setPercentage( formatDuration(videoRef.current?.duration as number) )
  }
  function handleScrubbing(){
        
    if( videoRef.current ){
        const rect = videoRef.current.getBoundingClientRect();
        console.log(rect.x);
        
    }
  }
  useLayoutEffect(() => {
    if (videoRef.current) {
      setIsPlayed(!videoRef.current.paused);
    }

    videoRef.current?.addEventListener("timeupdate", handleTimeUpdate);
    videoRef.current?.addEventListener("loadeddata", handleLoadedMetadata);

    return () => {
      videoRef.current?.removeEventListener("timeupdate", handleTimeUpdate);
      videoRef.current?.removeEventListener("loadeddata", handleLoadedMetadata);
    };
  }, []);
  const playHandler = () => {
    const video = videoRef.current as HTMLVideoElement;
    setIsPlayed(!isPlayed);
    if (!isPlayed) {
      video.play();
    } else {
      video.pause();
    }
  };
  useLayoutEffect(() => {
    btnPlay.current?.addEventListener("click", playHandler);
    return () => {
      btnPlay.current?.removeEventListener("click", playHandler);
    };
  }, [videoRef, btnPlay, isPlayed]);

  return (
    <div className="relative">
      <Player
        ref={videoRef}
        height={"100%"}
        width={"100%"}
        src="http://localhost:8080/input.mp4"
      />
      <div className="absolute  inset-x-0 -bottom-3 rounded-lg overflow-hidden py-2 mb-2 px-3 bg-gradient-to-t from-black/60 to-transparent">
        <div className="w-full cursor-pointer group flex">
          <div className={cn('h-1 relative group-hover:h-1 flex items-center justify-center transition-all  bg-gradient-to-r from-primary from-70% to-danger  mb-2')} style={{
            width : `${percentage}%`
          }}>
            <div onMouseDown={handleScrubbing} className="h-2 w-2 group-hover:scale-105 aspect-square right-0 absolute rounded-full bg-danger"></div>
          </div>
          <div className={cn('h-1 group-hover:h-1 transition-all  bg-gray-500/20 backdrop-blur-3xl  mb-2')} style={{
            width : `${100 - percentage}%`
          }}></div>
        </div>
        <div className="flex space-x-3 items-center">
          <div className="text-white">
            <NextIcon />
          </div>
          <button ref={btnPlay} className="text-white">
            {!isPlayed ? <Play /> : <PauseIcon />}
          </button>
          <div className="text-white">
            <NextIcon className="rotate-180" />
          </div>
          <div className="text-white">
            <Volume />
          </div>
        </div>
      </div>
    </div>
  );
};
