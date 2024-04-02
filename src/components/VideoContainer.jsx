import React, { useEffect } from "react";
import { API_KEY } from "../utils/constant";
import VideoCard from "./VideoCard";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setHomeVideo } from "../utils/appSlice";
import Simmer from "./Simmer";

const VideoContainer = ({ categroy }) => {
  const videos = useSelector((store) => store.app.video);
  // const category = useSelector((store) => store.app.category);
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  useEffect(() => {
    getVideos();
  }, [categroy]);

  const getVideos = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${categroy}&key=${API_KEY}`
    );
    const raw = await data.json();
    dispatch(setHomeVideo(raw?.items));
  };

  return !isMenuOpen ? (
    <div className="lg:flex lg:flex-wrap lg:w-[98.9vw] w-[100vw] lg-p-0 p-2 lg:ml-4  mx-auto h-[91vh] overflow-y-scroll   ">
      {videos?.map((video) => (
        <Link
          key={video.id}
          to={`/watch?v=${video.id}/id=${video.snippet.categoryId}`}
        >
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  ) : videos ? (
    <div className="lg:flex lg:flex-wrap lg:w-[87vw] mx-auto h-[91vh] lg-p-0 p-2 overflow-y-scroll ">
      {videos?.map((video, index) => (
        <Link
          key={index}
          to={`/watch?v=${video.id}/id=${video.snippet.categoryId}`}
        >
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  ) : (
    <Simmer />
  );
};

export default VideoContainer;
