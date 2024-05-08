import React from 'react'

export default function SecondDetails() {
  return (
    <div className=' flex bg-white w-full rounded-bl-lg rounded-br-lg px-2 py-2 justify-between'> 

        <div className=' flex gap-1'>
            <img className=' h-14'  src="/HadithNameIcon.png" alt="" srcset="" />

            <div>
                <h1 className=' text-[24px] font-bold'>সহিহ বুখারী</h1>
                <h1 className=' text-[14px]'>সর্বমোট হাদিস - ৭৫৬৩</h1>
            </div>
        </div>

        <h1 className='text-2xl font-bold mt-2 tracking-wide'>صحيح البخاري</h1>

    </div>
  )
}
