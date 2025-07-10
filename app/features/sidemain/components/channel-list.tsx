import { faker } from "@faker-js/faker";
import { Flame, Radio } from "lucide-react";
import { Link } from "react-router";
import AvatarImage from "~/components/image/AvatarImage";
import cn from "~/utils/cn";

export default function ChannelLists() {
  return (
    <div>
      <div className="text-md mb-4   group-[.is-active]:text-xs group-[.is-active]:text-center flex items-center px-2">
        <Flame className={cn("group-[.is-active]:hidden")} />
        <span>Top Channel</span>
      </div>
      {Array.from({ length: 30 }).map((e: any, index) => {
        const isLive = Math.random() < 0.2;
        return (
          <Link
            key={index}
            to={"live"}
            className="mx-2 group/item relative   py-2 px-2 rounded-full flex justify-between hover:bg-gray-50"
          >
            <div className="group-[.is-active]:flex-col group-[.is-active]:mx-auto flex-row flex items-center gap-3">
              <div
                className={cn(
                  `w-6  h-6 group-[.is-active]:w-8 group-[.is-active]:h-8 rounded-full overflow-hidden aspect-square`,
                  isLive
                    ? "ring-red-500 ring-1 ring-offset-2"
                    : "ring-1 ring-gray-200"
                )}
              >
                <AvatarImage src={faker.image.avatar()} alt="" />
              </div>
              <span className="text-sm group-[.is-active]:hidden line-clamp-1">
                {faker.person.fullName()}
              </span>
            </div>
            {isLive && (
              <div className="flex group-[.is-active]:hidden  bg-gray-100 rounded-full px-2 py-1 items-center text-xs gap-1">
                <Radio color="red" size={15} />
                <span>{Math.floor(Math.random() * 100)}</span>
              </div>
            )}
            {isLive && (
              <div className="group-[.is-active]:flex hidden group-hover/item:opacity-100 translate-y-1 group-hover/item:translate-y-0 gap-2 rounded-full  items-center justify-center opacity-0 transition-all text-xs  group-hover/item:bg-gray-50/30 backdrop-blur bg-white px-4 h-6 text-red-500 ring-1 ring-red-500 absolute   inset-0 z-40 ">
                <Radio size={16} />
                <span className="font-semibold text-gray-500">190</span>
              </div>
            )}
          </Link>
        );
      })}
    </div>
  );
}
