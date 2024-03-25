import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className=" px-3 py-[.2vw] rounded-lg text-black text-lg bg-zinc-300 hover:text-zinc-50 hover:bg-black transition-all ease-linear">
        {name}
      </button>
    </div>
  );
};

export default Button;
