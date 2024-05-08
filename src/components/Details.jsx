import React from 'react'
import TopDetails from './TopDetails.jsx';
import SecondDetails from './SecondDetails.jsx';
import ThirdDetails from './ThirdDetails.jsx';
import FourthDetails from './FourthDetails.jsx';
import FifthDetails from './FifthDetails.jsx';

export default function Details() {
  return (
    <div className=' inline-block absolute h-[580px] rounded-lg w-[780px] m-4 overflow-y-scroll scrollbar-none hover:scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-transparent'>

        <TopDetails />
        <hr />
        <SecondDetails />
        <ThirdDetails />
        <FourthDetails />
        <FifthDetails />

    </div>
  )
}
