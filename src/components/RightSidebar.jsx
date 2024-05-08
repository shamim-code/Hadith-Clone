import React from 'react'

export default function RightSidebar() {
  return (

    <div className=' inline-block w-[350px] float-right  mr-8 mt-4 box-border rounded-lg'>

       <div className='bg-white p-2'>
            <h1 className=' text-center font-semibold p-2'>সেটিংস</h1>

            <div className=' flex flex-col gap-1'>
            <h1 className=' text-sm font-semibold'>আরবি ফন্ট সিলেক্ট করুন</h1>
            <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>Who shot first?</option>
                <option>Han Solo</option>
                <option>Greedo</option>
            </select>
            </div>

            <div className=' my-5 flex flex-col gap-2'>
            <h1 className=' text-sm font-semibold'>এরাবিক ফন্ট সাইজ</h1>
            <input type="range" min={0} max="100"  className="range range-xs range-success" /> 
            <h1 className=' text-sm font-semibold'>এঅনুবাদ ফন্ট সাইজ</h1>
            <input type="range" min={0} max="100"  className="range range-xs range-success" /> 

            </div>


            <div className=' flex justify-between mt-2'>
            <h1 className=' text-sm font-semibold'>নাইট মোড</h1>
            <input type="checkbox" className="toggle toggle-success" />
            </div>
       </div>



        <div className='p-2 bg-[#34ab82] flex flex-col gap-2 rounded-lg justify-center items-center'>
        <h1 className='font-semibold'>আপনিও সদাকায়ে জারিয়াতে অংশ নিন</h1>
        <p>আপনার দান, সেটা ছোট হলেও, ইসলামের বার্তা ও হাদিস প্রচারে সহায়তা করবে। আমাদের কাজের অংশ হতে এবং এই গুরুত্বপূর্ণ কাজে সাহায়তা করতে আমাদের প্রজেক্টে হাদিয়া দিন। ইনশাআল্লাহ এটি সদাকায়ে জারিয়াহ হিসেবে আল্লাহ্‌র কাছে কবুল হবে।</p>
        <button className='bg-white rounded-lg py-2 px-4'>সাপোর্ট করুন</button>
        </div>


      
    </div>
  )
}
