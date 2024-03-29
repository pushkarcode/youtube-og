import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { GoSearch } from "react-icons/go";
import { FaRegCircleUser } from "react-icons/fa6";
import logo from "../assets/logo1.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { CiSearch } from "react-icons/ci";
import { cacheResults } from "../utils/searchSlice";
import { useNavigate } from "react-router-dom";
import SearchResult from "./SearchResult";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggesition, setSuggesition] = useState([]);
  const [showsuggestions, setShowsuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);

  // ! Appliying debouing
  useEffect(() => {
    // make api calll after every key press
    //but if the diffrence  betwwen two api call is <200ms
    // decline the api call

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggesition(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    // console.log("api-call"- +searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const raw = await data.json();
    // console.log(raw[1]);
    setSuggesition(raw[1]);

    //update results
    dispatch(
      cacheResults({
        [searchQuery]: raw[1],
      })
    );
  };

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="flex items-center justify-between p-3">
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

      <div className="relative">
        <div className="flex items-center">
          <input
            className="px-5 w-[29vw] py-[.5vw] outline-none border-[1.4px] border-zinc-600 rounded-l-full text-zinc-800 hover:border-blue-500 bg-gradient-to-r from-violet-200 to-pink-200 font-semibold"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowsuggestions(true)}
            onBlur={() => setShowsuggestions(false)}
          />

          <button className="px-5 py-[.5vw] border-[1px] border-zinc-600 rounded-r-full text-[1.57vw] text-zinc-600">
            <GoSearch />
          </button>
        </div>

        {showsuggestions && (
          <div className="absolute bg-gradient-to-r from-violet-200 to-pink-200 w-[29vw] rounded-lg left-[.6%] top-[108%]">
            {suggesition.map((s) => (
              <h1
                key={s} onClick={() => <SearchResult/>}
                className="flex items-center gap-x-5 p-1 text-lg font-semibold text-zinc-600  mb-1 hover:bg-slate-200 "
              >
                <span>
                  <CiSearch />
                </span>
                {s}
              </h1>
            ))}
          </div>
        )}
      </div>

      <div className="flex text-2xl text-zinc-600">
        <FaRegCircleUser />
      </div>
    </div>
  );
};

export default Head;
