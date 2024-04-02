import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { BiDislike } from "react-icons/bi";
import { PiShareFatLight } from "react-icons/pi";
import { GoDownload } from "react-icons/go";
import { BiLike } from "react-icons/bi";
import { FaRegSave } from "react-icons/fa";
import CommentsContainer from "./CommentsContainer";
import { API_KEY } from "../utils/constant";
import LiveChat from "./LiveChat";
import { value_converter } from "../utils/data";
import VideoDescription from "./VideoDescription";
import CommentBox from "./CommentBox";
import useFetcVideoData from "../hooks/useFetcVideoData";
import RecommendeVideos from "./RecommendeVideos";

const Watchpage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState([]);
  const [subscribe, setSubscribe] = useState("subscribe");
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const fetchchanneldata = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${videoData?.snippet?.channelId}&key=${API_KEY}`
    );
    const raw = await data.json();
    setChannelData(raw?.items && raw?.items[0]);

    // fetcing comments
    const commentsData = await fetch(
      `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${searchParams
        .get("v")
        .slice(0, 11)}&key=${API_KEY}`
    );
    const raw1 = await commentsData.json();
    setCommentData(raw1.items);
  };

  const videoData = useFetcVideoData(searchParams.get("v"));

  useEffect(() => {
    fetchchanneldata();
  }, [videoData]);

  // +"?&autoplay=1"

  return isMenuOpen ? (
    <div className="overflow-x-hidden ">
      <div className="lg:flex gap-x-2">
        <div className="lg:px-6 px-4 p-2 flex flex-col ">
          <iframe
            className="rounded-xl lg:w-[60vw] lg:h-[70vh] h-[25vh]  shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px]"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          {/* <CommentsContainer /> */}

          <div className="flex flex-col lg:w-[60vw] w-[110vw]">
            <div className="py-1 border-b-[1px] border-zinc-400">
              <h1 className="font-semibold lg:text-lg leading-6 lg:tracking-wide py-3">
                {videoData ? videoData?.snippet?.title : "Title Coming soon"}
              </h1>
            </div>
            {/* // ? susciber info */}
            <div className="flex items-center lg:gap-x-[11vw] gap-x-12 ">
              <div className="flex gap-x-3 py-9 ">
                <img
                  className="lg:w-[3vw] w-[10vw] object-cover rounded-full"
                  src={channelData?.snippet?.thumbnails?.default?.url}
                  alt="logo"
                />
                <div className="flex flex-col justify-center lg:gap-x-2 gap-x-4">
                  <p className="font-medium lg:text-[.9vw] text-[2vw] leading-[2vw] w-[9vw] lg:leading-3">
                    {videoData?.snippet?.channelTitle}
                  </p>
                  <p className="font-medium lg:text-[.8vw] text-[1.9vw] leading-[2vw]">
                    {value_converter(channelData?.statistics?.subscriberCount)}{" "}
                    subscriber
                  </p>
                </div>
                <button
                  onClick={() => setSubscribe("subscribed")}
                  className="lg:h-10 px-3 py-1 text-zinc-800 font-medium  rounded-full bg-red-400"
                >
                  {subscribe}
                </button>
              </div>

              <div className="flex gap-x-4 items-center">
                <h1 className="lg:px-2 px-1 py-1 rounded-full flex items-center gap-x-1 bg-zinc-300 hover:bg-zinc-400 transition-all">
                  <span>
                    <BiLike />
                  </span>
                  {value_converter(videoData?.statistics?.likeCount)}
                  <span className="border-l-[1px] border-zinc-500 px-2">
                    <BiDislike />
                  </span>
                </h1>
                <h1 className="opacity-0 lg:opacity-100 px-3 py-1 rounded-full flex items-center gap-x-1 bg-zinc-300 hover:bg-zinc-400 transition-all">
                  <span>
                    <PiShareFatLight />
                  </span>
                  Share
                </h1>
                <h1 className="opacity-0 lg:opacity-100 px-3 py-1 rounded-full flex items-center gap-x-1 bg-zinc-300 hover:bg-zinc-400 transition-all">
                  <span>
                    <GoDownload />
                  </span>
                  Download
                </h1>
                <h1 className="opacity-0 lg:opacity-100 px-3 py-1 rounded-full flex items-center gap-x-1 bg-zinc-300 hover:bg-zinc-400 transition-all">
                  <span>
                    <FaRegSave />
                  </span>
                  Save
                </h1>
              </div>
            </div>

            {/* // ! Description of video  */}

            <div className="lg:w-[60vw]  w-[73vw] overflow-hidden bg-zinc-200 rounded-lg p-3 px-2 ">
              <VideoDescription videoData={videoData} />
            </div>

            {/* {// * Comments of video} */}
            <div className="p-2 lg:w-[60vw] w-[20vw]  hidden lg:contents ">
              <CommentBox videoData={videoData} commentData={commentData} />
            </div>
          </div>
        </div>
        <div className="flex flex-col ">
          <div>
            <LiveChat />
          </div>
          <div className="lg:w-[25vw] p-3 lg:mt-20 lg:mr-20 h-[80vh]">
            <RecommendeVideos />
          </div>
        </div>
      </div>
    </div>
  ) : (

    <div className="overflow-x-hidden ">
      <div className="lg:flex  gap-x-2 ">
        <div className="lg:px-16 px-5 p-2 flex flex-col  ">
          <iframe
            className="rounded-xl lg:w-[65vw] lg:h-[70vh] w-[90vw] h-[30vh]  shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px]"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          {/* <CommentsContainer /> */}

          <div className="flex flex-col">
            <div className="py-1 border-b-[1px] border-zinc-400">
              <h1 className="font-semibold text-lg leading-6 tracking-wide py-3">
                {videoData ? videoData?.snippet?.title : "Title Coming soon"}
              </h1>
            </div>
            {/* // ? susciber info */}
            <div className="flex items-center gap-x-[17vw] ">
              <div className="flex gap-x-6 py-9 ">
                <img
                  className="lg:w-[3vw] w-[10vw] object-cover rounded-full"
                  src={channelData?.snippet?.thumbnails?.default?.url}
                  alt="logo"
                />
                <div className="flex flex-col justify-center lg:gap-x-2 gap-x-4">
                  <p className="font-medium lg:text-[.9vw] text-[2vw] leading-[2vw] lg:w-[9vw] lg:leading-3">
                    {videoData?.snippet?.channelTitle}
                  </p>
                  <p className="font-medium lg:text-[.8vw] text-[2vw] leading-1">
                    {value_converter(channelData?.statistics?.subscriberCount)}{" "}
                    subscriber
                  </p>
                </div>
                <button
                  onClick={() => setSubscribe("subscribed")}
                  className="lg:h-10 px-3 lg:py-1 text-zinc-800 font-medium  rounded-full bg-red-400"
                >
                  {subscribe}
                </button>
              </div>

              <div className="flex gap-x-4 items-center">
                <h1 className="px-2 py-1 rounded-full flex items-center gap-x-1 bg-zinc-300 hover:bg-zinc-400 transition-all">
                  <span>
                    <BiLike />
                  </span>
                  {value_converter(videoData?.statistics?.likeCount)}
                  <span className="border-l-[1px] border-zinc-500 px-2">
                    <BiDislike />
                  </span>
                </h1>
                <h1 className="px-3 opacity-0 lg:opacity-100 py-1 rounded-full flex items-center gap-x-1 bg-zinc-300 hover:bg-zinc-400 transition-all">
                  <span>
                    <PiShareFatLight />
                  </span>
                  Share
                </h1>
                <h1 className="px-3 opacity-0 lg:opacity-100 py-1 rounded-full flex items-center gap-x-1 bg-zinc-300 hover:bg-zinc-400 transition-all">
                  <span>
                    <GoDownload />
                  </span>
                  Download
                </h1>
                <h1 className="px-3 opacity-0 lg:opacity-100 py-1 rounded-full flex items-center gap-x-1 bg-zinc-300 hover:bg-zinc-400 transition-all">
                  <span>
                    <FaRegSave />
                  </span>
                  Save
                </h1>
              </div>
            </div>

            {/* // ! Description of video  */}
            <div className="lg:w-[64vw]  bg-zinc-200 rounded-lg p-3 px-2 overflow-hidden">
              <VideoDescription videoData={videoData} />
            </div>

            {/* {// * Comments of video} */}
            <div className="p-2 lg:w-[65vw] hidden lg:contents">
              <CommentBox videoData={videoData} commentData={commentData} />
            </div>
          </div>
        </div>
        <div className="flex flex-col ">
          <div>
            <LiveChat />
          </div>
          <div className="lg:w-[25vw] w-[90vw] lg:mt-20 mt-7 lg:mr-20 h-[80vh]  mx-auto lg:mx-0">
            <RecommendeVideos />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Watchpage;
