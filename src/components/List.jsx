import React from 'react'
import "./list.css"
import Polygon from '../svg/Polygon'

export default function List(props) {

  const {name,hadithNumber} = props.hadith;


  return (

    <div className="flex gap-2 pl-2 pr-2 pb-2  hover:bg-[#ebfcf6]  rounded group">

      <div class="inline-block relative h-10 w-10 left-0 group hover-fill">
          <Polygon />
          <h1 class="text-gray-500 absolute left-[15px] top-[14px] font-bold group-hover:text-white">B</h1>
      </div>

      <div className=' inline-block mt-1'>
        <h1 className=' text-[17px]'>{name}</h1>
        <h1 className=' text-[14px] text-gray-400'>হাদিস সংখ্যা - {hadithNumber}</h1>
      </div>
    </div>

  )
}
