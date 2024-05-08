import React from 'react'
import List from './List'
import { IoIosSearch } from "react-icons/io";

export default function TabBar() {

  const name = [
    {
      name: "সহিহ বুখারী",
      hadithNumber: "৭৫৩০",
    },
    {
      name: "সহিহ মুসলিম",
      hadithNumber: "৭৮৫৩",
    },
    {
      name: "সুনানে আন-নাসায়ী",
      hadithNumber: "৫৭৫৮",
    },
    {
      name: "সনানে আবু দাউদ",
      hadithNumber: "৫২৭৪",
    },
    {
      name: "সুনানে ইবনে মাজাহ",
      hadithNumber: "৮৩৮১",
    },
    {
      name: "মুয়াত্তা ইমাম মালিক",
      hadithNumber: "১৮৩২",
    },
    {
      name: "রিয়াদুস সলেহিন",
      hadithNumber: "১৯০৫",
    },
    {
      name: "বুলুগুল মারাম",
      hadithNumber: "১৫৬৮",
    },
    {
      name: "সহিহ বুখারী",
      hadithNumber: "৭৫৩০",
    },
    {
      name: "সহিহ মুসলিম",
      hadithNumber: "৭৮৫৩",
    },
    {
      name: "সুনানে আন-নাসায়ী",
      hadithNumber: "৫৭৫৮",
    },
    {
      name: "সনানে আবু দাউদ",
      hadithNumber: "৫২৭৪",
    }
  ]


  return (
    <div className=' inline-block border bg-[#ffffff] rounded-lg w-[250px] m-4 '>

            <div className=' flex'>
                <button className=' bg-white px-[46px] py-3 text-black rounded-tl-lg'>বই</button>
                <button className=' bg-[#2b9e76] px-[46px] py-3 text-white rounded-tr-lg'>অধ্যায়</button>
            </div>

            {/* search */}
            <div className=' m-2 pb-1 pl-2 w-36 h-14 inline-block sticky top-2 z-10 bg-white'>
                
                <input type='text' className=' absolute outline-none h-10 pl-7 border-2 border-gray-300 bg-slate-100 rounded-md w-56' placeholder='Search Hadith'/>
                <IoIosSearch  className=' absolute top-2 text-[25px] pl-1'/>
                
            </div>

            <div className=' flex flex-col pl-2 h-[450px] overflow-y-scroll scrollbar-none hover:scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-transparent'>

              {/* Show List */}
                <div className=''>
                 {
                  name.map((hadith, i)=> < List hadith ={hadith} />)
                 }
                </div>
            </div> 
    </div>
  )
}
