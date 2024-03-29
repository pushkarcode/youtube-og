import { useEffect, useState } from "react";
import { closeMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import { API_KEY } from "../utils/constant";
import { useSearchParams } from "react-router-dom";


const useFetcVideoData = ({}) => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [videoData, setVideoData] = useState([]);


    useEffect(() => {
        dispatch(closeMenu());
        fetcVideoData();
      }, []);
      
  const fetcVideoData = async () => {
    const VideoDetails_url = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${searchParams.get(
        "v"
      )}&key=${API_KEY}`
    );
    const raw = await VideoDetails_url.json();
    setVideoData(raw?.items[0]);
    // console.log(raw?.items[0]);
  };
  return videoData;
}

export default useFetcVideoData;