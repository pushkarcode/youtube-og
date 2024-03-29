import React from "react";
import user from "../assets/user.png";

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 py-3 mt-2 rounded-lg">
      <img className="w-12 h-12 object-cover rounded-full" src={user} alt="user" />
      <div className="px-3">
        <p>{name}</p>
        <p>{text}</p>
      
      </div>
    </div>
  );
};

export default Comment;
