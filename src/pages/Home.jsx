import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Homesvg from './../svg/Homesvg';
import Chaptersvg from '../svg/Chaptersvg.jsx';
import Booksvg from '../svg/Booksvg.jsx';
import Badge from '../svg/Badge.jsx';
import Sendsvg from '../svg/Sendsvg.jsx';
import TabBar from '../components/TabBar.jsx';
import Details from '../components/Details.jsx';
import RightSidebar from '../components/RightSidebar.jsx';


export default function Home() {
  return (
    <div className='relative'>
      <Navbar />



      {/* Side bar */}

      <div id='left-side' className=' inline-block '>

        < Homesvg / >
        <Chaptersvg />
        <Booksvg />
        <Badge />
        <Sendsvg  />

      </div>


      {/* Middle content */}

      <div className=' inline-block absolute w-[1500px]  h-[640px] bg-[#f2f4f6] rounded-2xl p-2'>
         <div id='Hello' className=''>
          <TabBar />
          <Details />
          <RightSidebar />
          
          
         </div>
         
      </div>


    </div>
  )
}
