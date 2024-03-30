import React from "react";
import VideoContainer from "./VideoContainer";

const MainContainer = ({ categroy }) => {
  return (
    <div>
      <VideoContainer categroy={categroy} />
    </div>
  );
};

export default MainContainer;
