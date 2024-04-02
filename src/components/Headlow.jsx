import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_KEY, YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheResults } from "../utils/searchSlice";
import { GoSearch } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { setSearchVideo } from "../utils/searchSlice2";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

const Headlow = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggesition, setSuggesition] = useState([]);
  const [showsuggestions, setShowsuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

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

  const fetchVideoByCategory = async () => {
    const data = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${searchQuery}&type=video&key=${API_KEY}`
    );
    const raw = await data.json();
    dispatch(setSearchVideo(raw?.items));
    console.log(raw.items);
  };

  const setdata = () => {
    fetchVideoByCategory();
  };

  return (
    <div className="relative lg:pl-12 ml-12">
      <div className="flex items-center">
        <input
          className="px-5 lg:w-[29vw] w-[55vw] lg:py-[.4vw] outline-none border-[1.4px] border-zinc-600 rounded-l-full text-zinc-800 hover:border-blue-500 bg-gradient-to-r from-violet-200 to-pink-200 font-semibold"
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowsuggestions(true)}
          onBlur={() => setShowsuggestions(false)}
        />

        <Link to="/search">
          <button
            onClick={setdata}
            className="px-5 lg:py-[.4vw] py-1 mt-[.3vw] lg:mt-[.0vw] border-[1px] border-zinc-600 rounded-r-full lg:text-[1.57vw] text-zinc-600"
          >
            <GoSearch />
          </button>
        </Link>
      </div>

      {showsuggestions && (
        <div className="absolute bg-gradient-to-r from-violet-200 to-pink-200 lg:w-[29vw] w-[50vw] rounded-lg left-[4%] top-[108%]">
          {suggesition.map((s) => (
            <h1 className="flex items-center gap-x-5 lg:p-1 text-lg font-semibold text-zinc-600  mb-1 hover:bg-slate-200 ">
              <span>
                <CiSearch />
              </span>
              {s}
            </h1>
          ))}
        </div>
      )}
    </div>
  );
};

export default Headlow;
