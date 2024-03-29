import React from "react";
import { value_converter } from "../utils/data";
import moment from "moment";

const VideoDescription = ({ videoData }) => {
  return <div className="w-[64vw]  bg-zinc-200 rounded-lg p-1 px-2 ">
  <div className="flex items-center gap-2">
  <p className="text-zinc-600 text-[1.1vw] font-medium">{value_converter(videoData && videoData?.statistics?.viewCount)} views</p>
  <p className="text-zinc-700 text-[1vw] font-normal">{moment(videoData?.snippet?.publishedAt).fromNow()}</p>
  <h1 className="ml-6" >{videoData?.snippet?.tags?.slice(0,5).join(",")}</h1>
  </div>
  <p className="mt-3 text-lg font-semibold leading-5">{videoData?.snippet?.description?.slice(0,320)}...</p>

  </div>;
};

export default VideoDescription;
