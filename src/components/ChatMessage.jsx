import React from 'react'
import { FaRegCircleUser } from 'react-icons/fa6'

const ChatMessage = ({name,message}) => {
  return (
    <div className='p-1 '>
        <div className=" flex items-center  text-zinc-800 ">
        <FaRegCircleUser className='text-fuchsia-700' />
        <span className='font-bold text-[1vw] px-2 text-fuchsia-700 pr-4'>{name}</span>
        <span className=' w-[12vw] leading-4 font-normal'>{message}</span>
      </div>
    </div>
  )
}

export default ChatMessage