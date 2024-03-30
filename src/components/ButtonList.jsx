import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_KEY, YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheResults } from "../utils/searchSlice";
import { Link } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { CiSearch } from "react-icons/ci";

const ButtonList = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
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
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchQuery}&type=video&key=${API_KEY}`
    );
    const raw = await data.json();
    console.log(raw.items);
  };

  return !isMenuOpen ? (
    <div className="btn flex justify-center  gap-x-4  w-[100vw]">
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

          <Link to="/search">
            <button
              onClick={fetchVideoByCategory}
              className="px-5 py-[.5vw] border-[1px] border-zinc-600 rounded-r-full text-[1.57vw] text-zinc-600"
            >
              <GoSearch />
            </button>
          </Link>
        </div>

        {showsuggestions && (
          <div className="absolute bg-gradient-to-r from-violet-200 to-pink-200 w-[29vw] rounded-lg left-[.6%] top-[108%]">
            {suggesition.map((s) => (
              <h1 className="flex items-center gap-x-5 p-1 text-lg font-semibold text-zinc-600  mb-1 hover:bg-slate-200 ">
                <span>
                  <CiSearch />
                </span>
                {s}
              </h1>
            ))}
          </div>
        )}
      </div>
    </div>
  ) : (
    <div className="btn flex justify-center p-2 -mt-6     w-[87vw]">
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

          <Link to="/search">
            <button
              onClick={fetchVideoByCategory}
              className="px-5 py-[.5vw] border-[1px] border-zinc-600 rounded-r-full text-[1.57vw] text-zinc-600"
            >
              <GoSearch />
            </button>
          </Link>
        </div>

        {showsuggestions && (
          <div className="absolute bg-gradient-to-r from-violet-200 to-pink-200 w-[29vw] rounded-lg left-[.6%] top-[108%]">
            {suggesition.map((s) => (
              <h1 className="flex items-center gap-x-5 p-1 text-lg font-semibold text-zinc-600  mb-1 hover:bg-slate-200 ">
                <span>
                  <CiSearch />
                </span>
                {s}
              </h1>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ButtonList;
