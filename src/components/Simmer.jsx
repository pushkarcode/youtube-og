import React, { useState } from "react";

const Simmer = () => {
    const [demo, setDemo] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])
  return (
    <div className="flex flex-wrap w-[80.9vw] ml-10 mx-auto h-[91vh] py-2">
    {
        demo.map((i) => (  <div className="p-1 w-[16vw] h-[25vh] ">
        <div className="w-[14vw] h-[17vh] object-cover rounded-xl  transition-all ease-linear bg-zinc-300"></div>
        <div className="mt-2 flex items-center gap-x-3">
          <div className="w-[2.5vw] h-[5vh] bg-zinc-300 rounded-full"></div>
          <div className="w-[10vw] h-[2vh] bg-zinc-300"></div>
        </div>
      </div>))
    }
      
    </div>
  );
};

export default Simmer;
