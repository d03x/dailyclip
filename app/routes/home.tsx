import { faker } from "@faker-js/faker";
import { TbDotsVertical } from "react-icons/tb";
import { FeaturedTopList } from "~/features/featured";
import pkg from "react-lazy-load-image-component";
import VideoThumbnail from "~/components/image/VideoThumbnail";
import AvatarImage from "~/components/image/AvatarImage";
import { CheckCircle, Verified } from "lucide-react";
import { VideoItem } from "~/features/video";
export default function Home() {
  return (
    <>
      <FeaturedTopList />
      <div className="grid mt-4 grid-cols-2 md:grid-cols-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 2, 3, 4, 4].map((item, index) => {
          return <VideoItem key={index} />;
        })}
      </div>
    </>
  );
}
