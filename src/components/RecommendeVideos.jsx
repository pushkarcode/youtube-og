import React from 'react'
import logo from "../assets/logo1.png"
import { useSearchParams } from 'react-router-dom';

const RecommendeVideos = () => {
  const [searchParams] = useSearchParams();
  searchParams.get("v")

  return (
   <>
     <div className='flex items-start gap-x-3 py-3'>
        <img className='w-[13vw] object-cover rounded-lg' src={logo} alt="" />
        <div>
            <h1 className='text-[1vw] font-normal text-zinc-900 leading-4 tracking-tight'>tile og tjhe video bro Lorem ipsum dolor sit amet, s</h1>
            <p className='font-semibold text-sm mt-5'>channnel name</p>
            <div className='flex mt-1 gap-x-2'>
                <p className='font-light text-sm'>1.2m vews</p>
                <p className='font-light text-sm'>1 month ago</p>
            </div>
        </div>
    </div>
    <div className='flex items-start gap-x-3'>
        <img className='w-[13vw] object-cover rounded-lg' src={logo} alt="" />
        <div>
            <h1 className='text-[1vw] font-normal text-zinc-900 leading-4 tracking-tight'>tile og tjhe video bro Lorem ipsum dolor sit amet, s</h1>
            <p className='font-semibold text-sm mt-5'>channnel name</p>
            <div className='flex mt-1 gap-x-2'>
                <p className='font-light text-sm'>1.2m vews</p>
                <p className='font-light text-sm'>1 month ago</p>
            </div>
        </div>
    </div>
    <div className='flex items-start gap-x-3'>
        <img className='w-[13vw] object-cover rounded-lg' src={logo} alt="" />
        <div>
            <h1 className='text-[1vw] font-normal text-zinc-900 leading-4 tracking-tight'>tile og tjhe video bro Lorem ipsum dolor sit amet, s</h1>
            <p className='font-semibold text-sm mt-5'>channnel name</p>
            <div className='flex mt-1 gap-x-2'>
                <p className='font-light text-sm'>1.2m vews</p>
                <p className='font-light text-sm'>1 month ago</p>
            </div>
        </div>
    </div>

   </>
    
  )
}

export default RecommendeVideos