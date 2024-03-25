import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { GoSearch } from "react-icons/go";
import { FaRegCircleUser } from "react-icons/fa6";
import logo from "../assets/logo1.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="flex items-center justify-between p-3  ">
      <div className="flex items-center text-2xl">
        <span
          className="cursor-pointer px-2 py-2 hover:bg-zinc-400 transition-all ease-linear rounded-full"
          onClick={() => toggleMenuHandler()}
        >
          <AiOutlineMenu />
        </span>
        <img className="w-[2vw] ml-3" src={logo} alt="" />
        <span className="golu font-medium ml-2 text-lg tracking-wide text-zinc-800">
          Youtub*
        </span>
      </div>

      <div className="flex items-center">
        <input
          className="px-5 w-[29vw] py-[.5vw] outline-none border-[1px] border-zinc-600 rounded-l-full text-zinc-700"
          type="text"
          placeholder="Search"
        />
        <button className="px-5 py-[.5vw] border-[1px] border-zinc-600 rounded-r-full text-[1.57vw] text-zinc-600">
          <GoSearch />
        </button>
      </div>
      <div className="flex text-2xl text-zinc-600">
        <FaRegCircleUser />
      </div>
    </div>
  );
};

export default Head;
