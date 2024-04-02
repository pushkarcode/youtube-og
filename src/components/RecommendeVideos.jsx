import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { API_KEY } from "../utils/constant";
import { value_converter } from "../utils/data";

const RecommendeVideos = ({ data }) => {
  const [searchParams] = useSearchParams();
  const [recoData, setRecoData] = useState([]);

  const fetchrecommededata = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%20&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${searchParams
        .get("v")
        ?.slice(-2)}&key=${API_KEY}`
    );
    const raw = await data.json();
    setRecoData(raw?.items);
    // console.log(raw?.items);
  };

  useEffect(() => {
    fetchrecommededata();
  }, []);

  return (
    <>
      {recoData?.map((item, index) => (
        <Link
          to={`/watch?v=${item.id}/id=${item.snippet.categoryId}`}
          key={index}
          className="lg:flex items-start gap-x-3 py-3 bg-zinc-200"
        >
          <img
            className="lg:w-[11vw] object-cover rounded-lg"
            src={item?.snippet?.thumbnails.medium.url}
            alt=""
          />
          <div>
            <h1 className="lg:text-[1vw] lg:py-0 py-3 font-normal text-zinc-900 leading-4 tracking-tight">
              {item?.snippet?.title.slice(0, 50)}...
            </h1>
            <p className="font-semibold text-sm lg:mt-5">
              {item?.snippet?.channelTitle}
            </p>
            <div className="flex lg:mt-1 gap-x-2 mb-4">
              <p className="font-light text-sm">
                {value_converter(item?.statistics?.viewCount)} views
              </p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default RecommendeVideos;
