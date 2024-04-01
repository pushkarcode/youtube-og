import React from "react";
import { value_converter } from "../utils/data";
import moment from "moment";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;
  
  return (
    <div>
      <div className="p-4 w-[16vw] ">
        <img
          className="w-[16vw] object-cover rounded-xl hover:rounded-none transition-all ease-linear "
          src={thumbnails?.medium?.url}
          alt=""
        />
        <div className="mt-2 flex flex-col ">
          <h1 className="font-semibold text-lg text-zinc-800 tracking-tight leading-5">
            {title.slice(0, 40)}...
          </h1>

          <h1 className="text-[1vw] font-bold text-black leading-4 mt-1 mb-1">
            {channelTitle}
          </h1>
          <div className="flex items-center gap-x-5">
            <h1>{value_converter(statistics?.viewCount)} views</h1>
            <p>{moment(publishedAt).fromNow()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
