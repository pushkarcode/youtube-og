import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, generateRandomString } from "../utils/data";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.message);
  const [liveMessage, setLiveMessage] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      // * Api Polling
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomString(20),
        })
      );
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="lg:w-[25vw] lg:h-[70vh] w-[90vw] h-[50vh] mx-auto lg:mx-0 p-2 border-[1.3px] border-zinc-600 mt-2 bg-gray-300 overflow-y-scroll flex flex-col-reverse rounded-sm overflow-hidden">
        {chatMessages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>

      <form 
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(addMessage({
          name: "Pushkar Sharma",
          message: liveMessage,
        }))
        setLiveMessage("");

      }}
       className="lg:p-2 p-2 border-[1.3px] border-black lg:w-[25vw] w-[87vw] lg:mx-0 mx-auto mt-5 flex lg:gap-x-16 gap-x-12 rounded-sm">
        <input
          className=" border-[1px] border-zinc-500 rounded-sm py-1 px-2 lg:w-[16vw]"
          type="text"
          placeholder="type something..."
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)
        
          }
        />
        <button 
          className="px-3 py-1 border-[1px] border-zinc-700 rounded-sm"
        >
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
