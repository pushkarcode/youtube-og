import React, { useEffect, useState } from "react";
import { API_KEY } from "../utils/constant";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const VideoContainer = ({ categroy }) => {
  const [videos, setVideos] = useState([]);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  useEffect(() => {
    getVideos();
  }, [categroy]);

  const getVideos = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${categroy}&key=${API_KEY}`
    );
    const raw = await data.json();
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
