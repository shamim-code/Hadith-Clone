import React from 'react'
import { IoIosSearch } from "react-icons/io";


export default function Navbar() {
  return (
    <div className='flex justify-between '>
      <div className=' flex gap-1'>
        <img className=' h-14' src="/logo.png" alt="" srcset="" />
        <div>
            <h1 className=' text-[20px] font-bold '>সূচিপত্র</h1>
            <h1 className='text-[14px]'>হাদিস পড়ুন এবং জানুন</h1>
        </div>
      </div>


      <div className='grid grid-cols-2 gap-24 relative'>

        <div className=' relative w-16 inline-block top-2'>
          <input type='text' className=' absolute outline-none h-10 pl-7 border-2 border-gray-300 rounded-md' placeholder='Search Hadith'/>
          <IoIosSearch  className=' absolute top-2 text-[25px] pl-1'/>
        </div>

        <div className=' inline-block'>
          <button className=' h-14 w-32'><img src="/SupportButton.png" alt="" srcset="" /></button>
        </div>

      </div>
    </div>
  )
}
