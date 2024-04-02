import React from "react";
import { value_converter } from "../utils/data";
import moment from "moment";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;
  
  return (
    <div>
      <div className="p-4 lg:w-[16vw] ">
        <img
          className="lg:w-[16vw] w-[90vw] object-cover rounded-xl hover:rounded-none transition-all ease-linear "
          src={thumbnails?.medium?.url}
          alt=""
        />
        <div className="lg:mt-2 mt-3 flex flex-col ">
          <h1 className="font-semibold lg:text-lg text-xl text-zinc-800 tracking-tight leading-5">
            {title.slice(0, 40)}...
          </h1>

          <h1 className="lg:text-[1vw] font-bold text-black leading-4 lg:mt-1 mt-2 mb-1">
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
