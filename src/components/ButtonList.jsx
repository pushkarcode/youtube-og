import React from "react";
import Button from "./Button";
import { useSelector } from "react-redux";

const ButtonList = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const list = [
    "All",
    "Gaming",
    "Tech",
    "Machine",
    "Programming",
    "JS",
    "Cricket",
    "News",
    "Songs",
    "Songs",
    "Songs",
    "Songs",
    "Songs",
    "Songs",
    "Songs",
    "Songs",
    "Songs",
    "Cricket",
    "Cricket",

  ];

  return !isMenuOpen ? (
    <div className="btn p-2 px-4 flex flex-nowrap overflow-x-auto gap-x-4  w-[100vw]">
      {list.map((val, index) => (
        <Button key={index} name={val} />
      ))}
    </div>
  ) : (<div className="btn p-2 flex flex-nowrap overflow-x-auto gap-x-4  w-[87vw]">
  {list.map((val, index) => (
    <Button key={index} name={val} />
  ))}
</div>)
};

export default ButtonList;
