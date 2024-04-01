import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";
import Simmer from "./Simmer";

const SearchResult = () => {
  const videos = useSelector((store) => store.search2.video);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);


  return !isMenuOpen ? (
    <div className="flex flex-wrap w-[98.9vw] ml-4 mx-auto h-[91vh] overflow-y-scroll ">
      {videos?.map((video) => (
        <Link
          key={video.id}
          to={`/watch?v=${video.id.videoId}`}
        >
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  ) : videos ? (
    <div className="flex flex-wrap w-[87vw] mx-auto h-[91vh] overflow-y-scroll ">
      {videos?.map((video, index) => (
        <Link
          key={index}
          to={`/watch?v=${video.id.videoId}`}
        >
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  ) : (
    <Simmer />
  );
};

export default SearchResult;
