import React from "react";

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

          <h1 className="text-[1vw] font-bold text-black leading-4 mt-1">{channelTitle}</h1>
          <h1>{statistics.viewCount} views</h1>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
