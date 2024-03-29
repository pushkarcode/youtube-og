import React from "react";
import { value_converter } from "../utils/data";
import { BiDislike, BiLike } from "react-icons/bi";
import moment from "moment";

const CommentBox = ({ videoData, commentData }) => {
  return (
    <div className="p-2 w-[65vw]  ">
      <h1 className="font-bold text-xl text-zinc-800 tracking-wide">
        {value_converter(videoData?.statistics?.commentCount)} Comments
      </h1>
      {commentData?.map((item,index) => (
      <div key={index} className="shadow-sm bg-gray-100 p-2 mt-6 rounded-lg">
        <div className="flex gap-x-3">
          <img
            className="w-10 h-10 object-cover rounded-full"
            src={item?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl}
            alt="user"
          />
          <div className="px-3 mt-1">
            <p className="text-sm font-normal">
              {item?.snippet?.topLevelComment?.snippet?.authorDisplayName}
              <span className="text-xs text-zinc-500 ml-3">{moment(item?.snippet?.topLevelComment?.snippet?.publishedAt).fromNow()}</span>
            </p>
            <p className="text-[.9vw] text-zinc-800 font-semibold">
              {item?.snippet?.topLevelComment?.snippet?.textOriginal || item?.snippet?.topLevelComment?.snippet?.textDisplay}
            </p>
          </div>
        </div>
        <div className=" flex gap-x-5 ml-16 mt-2">
          <h1 className="flex items-center gap-x-2">
            <span>
              <BiLike />
            </span>
            {value_converter(item?.snippet?.topLevelComment?.snippet?.likeCount)}
          </h1>
          <h1 className="flex items-center gap-x-2">
            <span>
              <BiDislike />
            </span>
          </h1>
        </div>
      </div>))}
    </div>
  );
};

export default CommentBox;
