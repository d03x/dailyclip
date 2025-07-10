import { faker } from "@faker-js/faker";
import { TbDotsVertical } from "react-icons/tb";
import { FeaturedTopList } from "~/features/featured";
import pkg from "react-lazy-load-image-component";
import VideoThumbnail from "~/components/image/VideoThumbnail";
import AvatarImage from "~/components/image/AvatarImage";
import { CheckCircle, Verified } from "lucide-react";
import { Link, type LinkProps } from "react-router";
import { useRef, type MouseEvent, type MouseEventHandler } from "react";
const VideoItem = () => {
  function clickMore(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    e.stopPropagation();
  }

  return (
    <Link
      to={`/watch?v=${faker.string.uuid()}`}
      className="p-2 group cursor-pointer select-none transition-all"
    >
      <div className="aspect-video overflow-hidden group-active:scale-100 group-hover:scale-[0.98]  group-active:ring-2 group-hover:ring-primary transition-all group-hover:ring-0  relative rounded-lg">
        <div className="absolute z-3 bottom-3 right-0 px-3 py-0.5 font-semibold text-[11px] rounded-full bg-black/50 backdrop-blur-2xl text-white mx-3">
          18:30
        </div>

        <VideoThumbnail
          alt={faker.person.fullName()}
          className="w-full h-full"
          src={faker.image.url()}
        />
      </div>
      <div className="space-y-2 mt-1.5">
        <div>
          <p className="line-clamp-2 group-hover:text-red-600 whitespace-pre-wrap text-[16px] sm:text-title text-neutral-900 dark:text-white font-title-weight capitalize leading-title  -tracking-snug transition-colors duration-200">
            {faker.word.words(10)}
          </p>
        </div>

        <div className="flex items-center gap-1">
          <AvatarImage
            className="w-8 ring-1 ring-gray-400 h-8 rounded-full aspect-square"
            src={faker.image.avatar()}
          />
          <div className="flex  flex-col ml-2">
            <p className="text-[12px] flex items-center gap-1 font-semibold leading-4 text-gray-600">
              <span>{faker.person.firstName()}</span>
              <Verified className="text-primary" size={14} />
            </p>
            <div className="flex text-[10px] items-center  text-gray-500 gap-2">
              <p className=" text-gray-500">1,4 Jt Views</p>
              &bull;
              <span>7 Jam Lalu</span>
            </div>
          </div>
          <button
            onClick={clickMore}
            className="ml-auto cursor-pointer focus-within:ring-0 transition-all duration-100 focus-within:ring-gray-200 active:ring-1 p-2 rounded-full hover:bg-gray-100"
          >
            <TbDotsVertical />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default VideoItem;
