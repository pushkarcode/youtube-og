import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = ({ categroy }) => {
  return (
    <div className="overflow-y-hidden">
      <VideoContainer categroy={categroy} />
    </div>
  );
};

export default MainContainer;
