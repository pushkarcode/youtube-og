import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { GoSearch } from "react-icons/go";
import { FaRegCircleUser } from "react-icons/fa6";
import logo from "../assets/logo1.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import {  YOUTUBE_SEARCH_API } from "../utils/constant";
import { CiSearch } from "react-icons/ci";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
 

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="flex items-center justify-between p-3">
      <div className="flex items-center text-2xl">
        <span
          className="cursor-pointer px-3 lg-px-2 py-2 hover:bg-zinc-400 transition-all ease-linear rounded-full"
          onClick={() => toggleMenuHandler()}
        >
          <AiOutlineMenu />
        </span>

        <img className="w-[7vw] lg:w-[2vw] ml-3" src={logo} alt="" />
        <span className="golu font-medium ml-2 lg:text-lg text-[6vw] tracking-wide text-zinc-800">
          Youtub*
        </span>
      </div>

     

      <div className="flex text-2xl text-zinc-600">
        <FaRegCircleUser />
      </div>
    </div>
  );
};

export default Head;
