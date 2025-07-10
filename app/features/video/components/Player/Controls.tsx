import {
  useEffect,
  useLayoutEffect,
  useRef,
  type MouseEventHandler,
} from "react";
import type { ControlsType } from "./VideoPlayer";
import player from "./styles/player.module.scss";
import {
  ArrowLeftCircle,
  ArrowRightCircle,
  Cog,
  Fullscreen,
  PauseCircle,
  PlayCircle,
  Subtitles,
  Volume,
  Volume1,
} from "lucide-react";
import cn from "~/utils/cn";

function formatDuration(time: number) {
  const leadingZeroFormatter = new Intl.NumberFormat(undefined, {
    minimumIntegerDigits: 2,
  });
  const seconds = Math.floor(time % 60);
  const minutes = Math.floor(time / 60) % 60;
  const hours = Math.floor(time / 3600);
  if (hours === 0) {
    return `${minutes}:${leadingZeroFormatter.format(seconds)}`;
  }
  return `${hours}:${leadingZeroFormatter.format(
    minutes
  )}:${leadingZeroFormatter.format(seconds)}`;
}

export default function Controls({
  controls,
  videoRef,
  setControls,
}: {
  videoRef: React.RefObject<HTMLVideoElement | null>;
  controls: ControlsType;
  setControls: React.Dispatch<React.SetStateAction<ControlsType>>;
}) {
  const indicatorRef = useRef<HTMLDivElement>(null);
  const scrubberRef = useRef<HTMLDivElement>(null);
  const bufferRef = useRef<HTMLDivElement>(null);
  const indicatorLiveRef = useRef<HTMLDivElement>(null);
  const timeTooltip = useRef<HTMLDivElement>(null);

  const timeToPixel = (time: number) => {
    const indicator = indicatorRef.current?.getBoundingClientRect();
    const duration = videoRef.current?.duration || 0;
    if (!indicator || duration === 0) return 0;
    const percentage = time / duration;
    return indicator.width * percentage;
  };

  function pixelToTime(pixelPosition: number) {
    const indicator = indicatorRef.current?.getBoundingClientRect();
    const duration = videoRef.current?.duration ?? 0;
    if (!indicator || duration === 0) return 0;
    const percentage = pixelPosition / indicator.width;
    return duration * percentage;
  }

  function updateScruberPosition(position: number) {
    setControls((cot) => ({
      ...cot,
      formatedTime: formatDuration(pixelToTime(position)),
    }));
    if (indicatorLiveRef.current && scrubberRef.current) {
      indicatorLiveRef.current.style.width = `${position}px`;
      scrubberRef.current.style.left = `${position}px`;
    }
  }

  function updateTime() {
    const time = pixelToTime(controls.currentScruberWidth);
    setControls((prev) => ({
      ...prev,
      updatedTime: time,
    }));
  }

  function handleBufferIndicatorWidth(width: number) {
    if (bufferRef.current) {
      bufferRef.current.style.width = `${width}px`;
    }
  }

  function onMouseDrag(
    event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) {
    const indicator = indicatorRef.current?.getBoundingClientRect();
    if (!indicator) return;

    const clientX =
      "touches" in event ? event.touches[0].clientX : event.clientX;
    const x = clientX - indicator.x;
    const position = Math.max(0, Math.min(x, indicator.width));

    if (timeTooltip.current && controls.seeking) {
      timeTooltip.current.style.left = `${position}px`;
    }

    setControls((prev) => ({
      ...prev,
      currentScruberWidth: position,
    }));

    handleBufferIndicatorWidth(position);

    if (controls.seeking) {
      updateScruberPosition(position);
    }
  }

  function startDrag() {
    setControls((prev) => ({
      ...prev,
      seeking: true,
      playing: !videoRef.current?.paused,
    }));
  }

  function stopDrag() {
    const newTime = pixelToTime(controls.currentScruberWidth);
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
    }

    const newPixel = timeToPixel(newTime);
    updateScruberPosition(newPixel);

    setControls((prev) => ({
      ...prev,
      seeking: false,
      updatedTime: newTime,
      formatedTime: formatDuration(newTime),
    }));
  }

  function onMouseDown() {
    updateScruberPosition(controls.currentScruberWidth);
    updateTime();
  }

  function playVideo() {
    setControls((e) => ({
      ...e,
      playing: !controls.playing,
    }));
  }

  useLayoutEffect(() => {
    setControls((prev) => ({
      ...prev,
      playing: true,
    }));
  }, []);

  useEffect(() => {
    function handleMouseUp() {
      setControls((prev) => ({
        ...prev,
        seeking: false,
      }));
    }

    if (!controls.seeking && videoRef.current?.paused) {
      setControls((prev) => ({
        ...prev,
        playing: true,
      }));
    }

    window.addEventListener("mouseup", handleMouseUp);
    return () => window.removeEventListener("mouseup", handleMouseUp);
  }, [controls.seeking]);

  useEffect(() => {
    function updateVideoTime() {
      const currentTime = videoRef.current?.currentTime ?? 0;
      const size = timeToPixel(currentTime);
      updateTime();
      updateScruberPosition(size);
      setControls((cot) => ({
        ...cot,
        formatedTime: formatDuration(pixelToTime(size)),
      }));
    }

    videoRef.current?.addEventListener("timeupdate", updateVideoTime);
    return () =>
      videoRef.current?.removeEventListener("timeupdate", updateVideoTime);
  }, [videoRef]);

  return (
    <div className="absolute px-3 w-full select-none bottom-0 pb-2">
      <div
        onMouseLeave={stopDrag}
        onMouseMove={onMouseDrag}
        onMouseDown={onMouseDown}
        onTouchStart={(e) => {
          startDrag();
          onMouseDown();
          e.preventDefault();
        }}
        onTouchMove={(e) => {
          onMouseDrag(e);
          e.preventDefault();
        }}
        onTouchEnd={(e) => {
          stopDrag();
          e.preventDefault();
        }}
        ref={indicatorRef}
        className={player.indicator}
      >
        <div ref={indicatorLiveRef} className={player.indicator_live}></div>
        <div
          style={{
            transform: `scale(${controls.seeking ? "1.6" : "1"})`,
          }}
          onMouseDown={startDrag}
          onTouchStart={startDrag}
          ref={scrubberRef}
          className={player.scrubber}
        />
        <div
          ref={timeTooltip}
          className={cn(
            `absolute -top-9 py-1 text-xs text-white px-3 rounded-lg bg-black/40 backdrop-blur-2xl`,
            controls.seeking ? "inline" : "hidden"
          )}
        >
          {controls.formatedTime}
        </div>
        <div ref={bufferRef} className={player.indicator_buffer}></div>
      </div>

      <div className="text-xs py-2 flex items-center mt-2 gap-3 text-white">
        <div className="flex items-center gap-x-5">
          <button>
            <ArrowLeftCircle />
          </button>
          <button onClick={playVideo}>
            {controls.playing ? <PauseCircle /> : <PlayCircle />}
          </button>
          <button>
            <ArrowRightCircle />
          </button>
          <button>
            {controls.volume == 0 ? (
              <Volume />
            ) : controls.volume === 0.5 ? (
              <Volume1 />
            ) : (
              <Volume />
            )}
          </button>
        </div>
        <span>
          {controls.formatedTime} /{" "}
          {formatDuration(videoRef.current?.duration || 0)}
        </span>
        <div className="ml-auto flex items-center gap-x-4">
          <Cog />
          <Fullscreen />
          <Subtitles />
        </div>
      </div>
    </div>
  );
}
