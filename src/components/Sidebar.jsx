import React from "react";
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { TbUserSquare } from "react-icons/tb";
import { RiHistoryLine } from "react-icons/ri";
import { MdVideoLibrary } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { FaFire } from "react-icons/fa";
import { MdMusicNote } from "react-icons/md";
import { CiStreamOn } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { RiFeedbackLine } from "react-icons/ri";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // ! Early return pattern

  // if(!isMenuOpen) return null;

  return !isMenuOpen ? (
    <div className="w-[3.8vw] h-[90vh] mt-1 p-1 bg-zinc-200 flex flex-col gap-y-5">
      <h1 className="flex flex-col items-center gap-x-4 py-4 text-[.8vw] rounded-lg px-6 hover:bg-zinc-400 ease-linear transition-all">
        <GoHome />
        Home
      </h1>
      <h1 className="flex flex-col items-center gap-x-4 py-4 text-[.8vw] rounded-lg px-1 hover:bg-zinc-400 ease-linear transition-all">
        <SiYoutubeshorts />
        Shorts
      </h1>
      <h1 className="flex flex-col items-center gap-x-4 py-4 tracking-tighter  text-[.7vw] rounded-lg px-4 hover:bg-zinc-400 ease-linear transition-all">
        <MdSubscriptions />
        Subscription
      </h1>
      <h1 className="flex flex-col items-center gap-x-4 py-4 text-[.8vw] rounded-lg px-5 hover:bg-zinc-400 ease-linear transition-all">
        <MdVideoLibrary />
        You
      </h1>
    </div>
  ) : (
    <div className="sidebar w-[13vw] h-[90vh] mt-1  overflow-y-scroll  bg-zinc-200">
      <div className="p-6 flex flex-col gap-y-2 font-medium text-[1.2vw] text-zinc-700 border-b-[1px] border-zinc-500">
        <h1 className="flex items-center gap-x-4 rounded-lg py-1 px-1 hover:bg-zinc-400 ease-linear transition-all">
          <GoHome />
          Home
        </h1>
        <h1 className="flex items-center gap-x-4 rounded-lg py-1 px-1 hover:bg-zinc-400 ease-linear transition-all">
          <SiYoutubeshorts />
          Shorts
        </h1>
        <h1 className="flex items-center gap-x-4 rounded-lg py-1 px-1 hover:bg-zinc-400 ease-linear transition-all">
          <MdSubscriptions />
          Subscription
        </h1>
      </div>

      <div className="p-6 flex flex-col gap-y-4 font-medium text-[1.1vw] text-zinc-700 border-b-[1px] border-zinc-500 ">
        <p className="font-bold text-lg text-zinc-900 -ml-2">You ></p>
        <h1 className="flex items-center gap-x-4 rounded-lg px-1 py-1  hover:bg-zinc-400 ease-linear transition-all">
          <TbUserSquare />
          Your channel
        </h1>
        <h1 className="flex items-center gap-x-4 rounded-lg py-1 px-1 hover:bg-zinc-400 ease-linear transition-all">
          <RiHistoryLine />
          History
        </h1>
        <h1 className="flex items-center gap-x-4 rounded-lg py-1 px-1 hover:bg-zinc-400 ease-linear transition-all">
          <MdVideoLibrary />
          Your vidoes
        </h1>
        <h1 className="flex items-center gap-x-4 rounded-lg py-1 px-1 hover:bg-zinc-400 ease-linear transition-all">
          <MdOutlineWatchLater />
          Watch later
        </h1>
        <h1 className="flex items-center gap-x-4 rounded-lg py-1 px-1 hover:bg-zinc-400 ease-linear transition-all">
          <BiLike />
          Liked videos
        </h1>
      </div>

      <div className="p-6 flex flex-col gap-y-4 font-medium text-[1.2vw] text-zinc-700 border-b-[1px] border-zinc-500">
        <p className="font-bold text-lg text-zinc-900 -ml-2">Explore</p>
        <h1 className="flex items-center gap-x-4 rounded-lg py-1 px-1 hover:bg-zinc-400 ease-linear transition-all">
          <FaFire />
          Trending
        </h1>
        <h1 className="flex items-center gap-x-4 rounded-lg py-1 px-1 hover:bg-zinc-400 ease-linear transition-all">
          <MdMusicNote />
          Music
        </h1>
        <h1 className="flex items-center gap-x-4 rounded-lg py-1 px-1 hover:bg-zinc-400 ease-linear transition-all">
          <CiStreamOn />
          Live
        </h1>
      </div>

      <div className="p-6 flex flex-col gap-y-4 font-medium text-[1.1vw] text-zinc-700 ">
        <h1 className="flex items-center gap-x-4 rounded-lg py-1 px-1 hover:bg-zinc-400 ease-linear transition-all">
          <IoSettingsOutline />
          Settings
        </h1>
        <h1 className="flex items-center gap-x-4 rounded-lg py-1 px-1 hover:bg-zinc-400 ease-linear transition-all">
          <IoIosHelpCircleOutline />
          Help
        </h1>
        <h1 className="flex items-center gap-x-4 rounded-lg py-1 px-1 hover:bg-zinc-400 ease-linear transition-all">
          <RiFeedbackLine />
          Send.feedback
        </h1>
      </div>
    </div>
  );
};

export default Sidebar;
