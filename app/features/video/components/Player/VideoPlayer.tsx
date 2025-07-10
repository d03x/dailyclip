import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Player from "react-player";
import { Play } from "./icons/Play";
import { NextIcon } from "./icons/Next";
import { Volume } from "./icons/Volume";
import { PauseIcon } from "./icons/PauseIcon";
import cn from "~/utils/cn";
import Controls from "./Controls";

export type ControlsType = {
  played: number;
  playing: boolean;
  muted: boolean;
  volume: number;
  formatedTime: string;
  speed: number;
  updatedTime: number;
  seeking: boolean;
  duration: number;
  isFullScreen: boolean;
  currentScruberWidth: number;
};

export const VideoPlayer = () => {
  const video = "https://ik.imagekit.io/ikmedia/example_video.mp4";
  const videoRef = useRef<HTMLVideoElement>(null);

  const [controls, setControls] = useState<ControlsType>({
    played: 0,
    playing: false,
    muted: false,
    formatedTime: "0:0:0",
    volume: 0.5,
    duration: 0,
    updatedTime: 0,
    currentScruberWidth: 0,
    speed: 1,
    seeking: false,
    isFullScreen: false,
  });

  function loadMetadataHandler() {
    setControls((prev) => ({
      ...prev,
      duration: videoRef.current?.duration ?? 0,
    }));
  }

  useLayoutEffect(() => {
    const current = videoRef.current;
    if (current) {
      setControls((prev) => ({
        ...prev,
        playing: !current.paused,
      }));
      current.addEventListener("loadeddata", loadMetadataHandler);
    }
    return () => {
      current?.removeEventListener("loadeddata", loadMetadataHandler);
    };
  }, []);

  function handleProgress(e: any) {
    if (!controls.seeking) {
      setControls((prev) => ({
        ...prev,
        played: e.played,
      }));
    }
  }

  return (
    <>
      <div className="border-2 relative">
        <Player
          style={{ width: "100%", height: "100%" }}
          muted={controls.muted}
          onProgress={handleProgress}
          ref={videoRef}
          playing={controls.playing}
          src={video}
          autoPlay={false}
          controls={false}
        />
        <Controls
          videoRef={videoRef}
          controls={controls}
          setControls={setControls}
        />
      </div>
    </>
  );
};
