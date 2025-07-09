import { faker } from "@faker-js/faker";
import { TbDotsVertical } from "react-icons/tb";
import { FeaturedTopList } from "~/features/featured";
import pkg from "react-lazy-load-image-component";
import VideoThumbnail from "~/components/image/VideoThumbnail";
import AvatarImage from "~/components/image/AvatarImage";
import { CheckCircle, Verified } from "lucide-react";
export default function Home() {
  return (
    <>
      <FeaturedTopList />
      <div className="grid mt-4 grid-cols-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 2, 3, 4, 4].map((item, index) => {
          return (
            <div key={index} className="p-2">
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <div className="absolute z-3 bottom-3 right-0 px-3 py-0.5 font-semibold text-[11px] rounded-full bg-black text-white mx-3">
                  18:23:33
                </div>

                <VideoThumbnail
                  key={index}
                  alt={faker.person.fullName()}
                  className="w-full h-full object-cover"
                  src={faker.image.url()}
                />
              </div>
              <div className="space-y-2 mt-1.5">
                <div>
                  <p className="line-clamp-2 text-[16px] font-semibold capitalize  leading-tight">
                    {faker.word.words(6)}
                  </p>
                </div>

                <div className="flex items-center gap-1">
                  <AvatarImage
                    className="w-8 ring-1 ring-gray-400 h-8 rounded-full aspect-square"
                    src={faker.image.avatar()}
                  />
                  <div className="flex  flex-col ml-2">
                    <p className="text-[12px] flex items-center gap-1 font-semibold leading-4 text-gray-600">
                      <span>{faker.person.fullName()}</span>
                      <Verified className="text-green-500" size={14}/>
                    </p>
                    <div className="flex text-[10px] items-center  text-gray-500 gap-2">
                      <p className=" text-gray-500">1,4 Jt Views</p>
                      &bull;
                      <span>7 Jam Lalu</span>
                    </div>
                  </div>
                  <button className="ml-auto">
                    <TbDotsVertical />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
