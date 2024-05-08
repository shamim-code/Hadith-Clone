import React from 'react'

export default function TopDetails() {
  return (
    <div className=' flex bg-[#fafbfb] w-full rounded-tl-lg rounded-tr-lg px-2 py-2'> 

            {/* Chapter icon */}
             <svg className=' w-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"  fill="#5f6368"><path d="M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v240h-80v-200H520v-200H240v640h360v80H240Zm638 15L760-183v89h-80v-226h226v80h-90l118 118-56 57Zm-638-95v-640 640Z"/></svg>


             {/* Next icon */}
             <svg className=' w-4' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24">
                <path d="M12 3l9 9-9 9-1.406-1.406L18.188 12l-7.594-7.594z"></path>
            </svg>

             <h1>Bukhari</h1>

            {/* Next icon */}
             <svg className=' w-4' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24">
                <path d="M12 3l9 9-9 9-1.406-1.406L18.188 12l-7.594-7.594z"></path>
            </svg>

            <h1>1</h1>

    </div>
  )
}
