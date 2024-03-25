import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";

const Watchpage = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  // +"?&autoplay=1"

  return (
    <div className="px-16 overflow-x-hidden">
      <iframe
      className="rounded-xl shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px]"
        width="1000"
        height="515"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <CommentsContainer />
    </div>
  );
};

export default Watchpage;
