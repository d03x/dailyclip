import { useEffect } from "react";
import { useLocation } from "react-router";
import { useAppContext } from "~/contexts/AppContext";
import ReactPlayer from "react-player";
import AvatarImage from "~/components/image/AvatarImage";
import { faker } from "@faker-js/faker";
import { Bell, MoreHorizontal, Verified } from "lucide-react";
import { BiCheckCircle, BiDislike, BiLike } from "react-icons/bi";
import { AiFillLike, AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { TbFileLike } from "react-icons/tb";
import {
  FaCircleInfo,
  FaHeart,
  FaInfo,
  FaShare,
  FaStar,
} from "react-icons/fa6";
import { VideoPlayer } from "~/features/video/components/Player/VideoPlayer";
export default function Watch() {
  return (
    <div className="px-3 py-4 lg:px-24">
      <div className="lg:flex w-full gap-3 items-start">
        <div className="w-full lg:min-w-[780px]">
          <div className="aspect-video bg-gray-100 w-full rounded-xl overflow-hidden border-gray-200">
            <VideoPlayer/>
          </div>

          <div className="mt-3">
            <p className="text-xl font-bold gap-3 tracking-tight leading-tight">
              Ridwan SouQy Full Lagu-Lagu Terpopuler | Kumpulan Lagu Terbaik
              Ridwan SouQy
            </p>
          </div>
          <div className="py-2 my-1.5 border-gray-100">
            <div className="flex items-center gap-x-4">
              <div className="flex items-center">
                <button className="flex bg-gray-100 py-1.5 px-3  cursor-pointer items-center gap-1 hover:bg-gray-200 active:ring-2 rounded-l-full ring-gray-300 ring-offset-1 transition-all  duration-150">
                  <BiLike size={20} className="text-gray-700" />
                  <span className="text-sm"> 139 Rb</span>
                </button>
                <button className="flex bg-gray-100 border-l border-gray-200 py-1.5 px-3 rounded-r-full cursor-pointer items-center gap-1 hover:bg-gray-200 active:ring-2 ring-gray-300 ring-offset-1 transition-all  duration-150">
                  <BiDislike size={20} className="text-gray-700" />
                </button>
              </div>
              <button className="hidden group lg:flex bg-gray-100 py-1.5 px-3 rounded-full cursor-pointer items-center gap-1 hover:bg-gray-200 active:ring-2 ring-gray-300 ring-offset-1 transition-all  duration-150">
                <FaShare className="text-gray-700 group-hover:text-primary" />
                <span className="text-sm"> Bagikan</span>
              </button>
              <button className="hidden group bg-gray-100 py-1.5 px-3 lg:flex rounded-full cursor-pointer items-center gap-1 hover:bg-gray-200 active:ring-2 ring-gray-300 ring-offset-1 transition-all  duration-150">
                <FaStar className="text-gray-700 group-hover:text-primary" />
                <span className="text-sm"> Rate</span>
              </button>
              <button className="hidden group bg-gray-100 py-1.5 px-3 lg:flex rounded-full cursor-pointer items-center gap-1 hover:bg-gray-200 active:ring-2 ring-gray-300 ring-offset-1 transition-all  duration-150">
                <FaCircleInfo className="text-danger" />
                <span className="text-sm"> Laporkan</span>
              </button>
              <button className="flex ml-auto bg-gray-100 p-1.5 rounded-full cursor-pointer items-center gap-1 hover:bg-gray-200 active:ring-2 ring-gray-300 ring-offset-1 transition-all  duration-150">
                <MoreHorizontal />
              </button>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex items-center">
              <AvatarImage
                className="w-9 ring-1 ring-gray-400 h-9 rounded-full aspect-square"
                src={faker.image.avatar()}
              />
              <div className="flex  flex-col ml-2">
                <p className="flex items-center gap-1 font-semibold leading-6">
                  <span className="text-danger">DailyClip Official</span>
                  <svg className=" fill-primary" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><path  d="M9 3L8 6H4l1 4l-3 2l3 2l-1 4h4l1 3l3-2l3 2l1-3h4l-1-4l3-2l-3-2l1-4h-4l-1-3l-3 2zm7 5l1 1l-7 7l-3-3l1-1l2 2z"></path></svg>
                </p>
                <div className="flex font-semibold text-xs items-center  text-gray-500 gap-2">
                  600 Subscriber
                </div>
              </div>
            </div>
            <div className="ml-auto flex items-center gap-3">
              <button className="bg-primary/75 hover:bg-primary text-white  p-2  rounded-full text-sm px-4  font-semibold cursor-pointer">
                Subscribe
              </button>
              <button className="bg-gray-200  p-2  rounded-full text-sm  text-primary font-semibold cursor-pointer">
                <Bell />
              </button>
            </div>
          </div>

          <div className="bg-gray-200 r rounded-2xl rounded-tl-lg p-3 mt-5 relative">
            {/* Arrow dengan efek border dan shadow */}
            <div className="absolute -z-10 -top-2 left-0">
              <div className="w-4 h-4 bg-gray-200 rotate-45  ml-2"></div>
            </div>
            <div className="flex items-center mb-2 font-semibold text-gray-600 gap-2 text-sm">
              <span>4,5 Jt x ditonton</span> &bull;{" "}
              <span>20 hari yang lalu</span>
            </div>
            {/* Konten teks */}
            <p className="text-sm text-gray-800">
              Ridwan SouQy Full Lagu-Lagu Terpopuler | Kumpulan Lagu Terbaik
              Ridwan SouQy. Haloo semua selamat datang di Channel saya Ridwan
              Souqy. Disini kalian dapat mendengarkan berbagai lagu lagu populer
              saya. Selamat Mendengarkan.. Jangan Lupa Subscribe, Like, Komen,
              dan Share Sebanyak banyaknya yaa!!
            </p>
          </div>
        </div>

        {/* Sidebar / Description Section */}
        <div className="bg-white w-full rounded-xl p-4">
          <h2 className="text-lg font-semibold mb-2">Deskripsi Video</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            officiis perferendis iure distinctio nobis error, quasi architecto
            fugit velit. Quis deserunt maxime incidunt vero, dolore harum
            voluptas illum voluptate ipsa.
          </p>
        </div>
      </div>
    </div>
  );
}
