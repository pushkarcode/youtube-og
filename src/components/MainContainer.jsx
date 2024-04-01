import React from "react";
import VideoContainer from "./VideoContainer";
import Headlow from "./Headlow";

const MainContainer = ({ categroy }) => {
  return (
    <div>
       <Headlow/>
      <div>
        <VideoContainer categroy={categroy} />
      </div>
    </div>
  );
};

export default MainContainer;
