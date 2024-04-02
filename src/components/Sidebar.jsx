import React from "react";
import { GrTechnology } from "react-icons/gr";
import { PiStudentDuotone } from "react-icons/pi";
import { MdOutlineSportsCricket } from "react-icons/md";
import { GiFireSpellCast } from "react-icons/gi";
import { BiCameraMovie } from "react-icons/bi";
import { LiaNewspaperSolid } from "react-icons/lia";
import { GoHome } from "react-icons/go";
import { FaCamera } from "react-icons/fa";
import { RiMovieFill } from "react-icons/ri";
import { FaCarRear } from "react-icons/fa6";
import { FaFire } from "react-icons/fa";
import { MdMusicNote } from "react-icons/md";
import { RxPaperPlane } from "react-icons/rx";

import { CiStreamOn } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoGameController } from "react-icons/io5";
import { RiFeedbackLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = ({ categroy, setCategroy }) => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // ! Early return pattern

  if (!isMenuOpen) return null;

  return (
    <div className="sidebar lg:w-[13vw] w-[30vw] h-[96vh] mt-1  lg:overflow-y-scroll  bg-zinc-200 overflow-x-hidden">
      <div className="lg:p-6 flex flex-col gap-y-2 lg:font-medium  font-bold text-[3vw] lg:text-[1.2vw] text-zinc-700 border-b-[1px] border-zinc-500">
        <Link to="/">
          <h1
            className={`${
              categroy === 0 ? "active" : ""
            } flex items-center lg:gap-x-4 rounded-lg py-1 px-1 hover:bg-zinc-400 ease-linear transition-all`}
            onClick={() => setCategroy(0)}
          >
            <GoHome />
            Home
          </h1>
        </Link>
        <h1
          className={` ${
            categroy === 10 ? "active" : ""
          } flex items-center lg:gap-x-4 rounded-lg py-1 px-1 hover:bg-zinc-400 ease-linear transition-all`}
          onClick={() => setCategroy(10)}
        >
          <MdMusicNote />
          Music
        </h1>
        <h1
          className={` ${
            categroy === 20 ? "active" : ""
          } flex items-center lg:gap-x-4 rounded-lg py-1 px-1 hover:bg-zinc-400 ease-linear transition-all`}
          onClick={() => setCategroy(20)}
        >
          <IoGameController />
          Gamimg
        </h1>
      </div>

      <div className="lg:p-6 p-1 flex flex-col gap-y-4 lg:font-medium  font-bold text-[2.3vw] lg:text-[1.2vw] text-zinc-700 border-b-[1px] border-zinc-500">
        <p className="font-bold lg:text-xl tracking-wider text-[3vw] text-zinc-900 lg:-ml-2">Explore</p>
        <h1
          className={` ${
            categroy === 28 ? "active" : ""
          } flex items-center lg:gap-x-4 rounded-lg py-1  px-1 hover:bg-zinc-400 ease-linear transition-all`}
          onClick={() => setCategroy(28)}
        >
          <GrTechnology />
          Technology
        </h1>
        <h1
          className={` ${
            categroy === 17 ? "active" : ""
          } flex items-center lg:gap-x-4 gap-x-1 rounded-lg py-1 px-1 hover:bg-zinc-400 ease-linear transition-all`}
          onClick={() => setCategroy(17)}
        >
          <MdOutlineSportsCricket />
          Sport
        </h1>
        <h1
          className={` ${
            categroy === 24 ? "active" : ""
          } flex items-center lg:gap-x-4 gap-x-1 rounded-lg py-1 px-1 hover:bg-zinc-400 ease-linear transition-all`}
          onClick={() => setCategroy(24)}
        >
          <BiCameraMovie /> Movie's
        </h1>
        <h1
          className={` ${
            categroy === 1 ? "active" : ""
          } flex items-center lg:gap-x-4 gap-x-1 rounded-lg py-1 px-1 hover:bg-zinc-400 ease-linear transition-all`}
          onClick={() => setCategroy(1)}
        >
          <GiFireSpellCast /> Fun
        </h1>
        <h1
          className={` ${
            categroy === 22 ? "active" : ""
          } flex items-center lg:gap-x-4 gap-x-1 rounded-lg py-1 px-1 hover:bg-zinc-400 ease-linear transition-all`}
          onClick={() => setCategroy(22)}
        >
          <FaCamera />
          Blog's
        </h1>
        <h1
          className={` ${
            categroy === 25 ? "active" : ""
          } flex items-center lg:gap-x-4 gap-x-1 rounded-lg py-1 px-1 hover:bg-zinc-400 ease-linear transition-all`}
          onClick={() => setCategroy(25)}
        >
          <LiaNewspaperSolid />
          News
        </h1>
        <h1
          className={` ${
            categroy === 2 ? "active" : ""
          } flex items-center lg:gap-x-4 gap-x-1 rounded-lg py-1 px-1 hover:bg-zinc-400 ease-linear transition-all`}
          onClick={() => setCategroy(2)}
        >
          <FaCarRear />
          Vehicles
        </h1>
        <h1
          className={` ${
            categroy === 23 ? "active" : ""
          } flex items-center lg:gap-x-4 gap-x-1 rounded-lg py-1 px-1 hover:bg-zinc-400 ease-linear transition-all`}
          onClick={() => setCategroy(23)}
        >
          <RxPaperPlane />
          Comedy
        </h1>
      </div>

      <div className="lg:p-6 p-2 flex flex-col gap-y-4 lg:font-medium lg:text-[1.1vw] font-bold text-[3vw] text-zinc-700 ">
        <h1 className="flex items-center lg:gap-x-4 rounded-lg py-1 px-1 hover:bg-zinc-400 ease-linear transition-all">
          <IoSettingsOutline />
          Settings
        </h1>
        <h1 className="flex items-center lg:gap-x-4 gap-x-1 rounded-lg py-1 px-1 hover:bg-zinc-400 ease-linear transition-all">
          <IoIosHelpCircleOutline />
          Help
        </h1>
        <h1 className="flex items-center lg:gap-x-4 rounded-lg lg:text-[1.1vw] text-[2.3vw] py-1 px-1 hover:bg-zinc-400 ease-linear transition-all -ml-3">
          <RiFeedbackLine />
          Send.feedback
        </h1>
      </div>
    </div>
  );
};

export default Sidebar;
