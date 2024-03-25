import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constant";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const raw = await data.json();
    // console.log(raw.items);
    setVideos(raw?.items);
  };

  return !isMenuOpen ? (
    <div className="flex flex-wrap w-[98.9vw] ml-4 mx-auto h-[84vh] overflow-y-scroll ">
      {videos?.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  ) : (
    <div className="flex flex-wrap w-[87vw] mx-auto h-[84vh] overflow-y-scroll ">
      {videos?.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
