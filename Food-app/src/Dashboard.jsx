import React from 'react'
import { Calendar, ChevronDown } from 'lucide-react';

function Dashboard() {
  return (
    <div className='w-[1108px] h-[76px] ml-[54px] mt-[20px]  flex justify-between items-center ' >
      <div className=' ml-0 '>
        <h1 className='w-[152px] h-[32px] text-[#464255] text-[28px] font-semibold '>Dashboard</h1>
        <span className='w-[364px] h-[22px]  text-[#A3A3A3] text-[16px] font-medium '>Hi, Samantha. Welcome back to Sedap Admin!</span>
      </div>

      <div className='w-[293px] h-[76px] flex bg-white rounded-xl'>
        <div className='h-[48px] w-[48px] bg-[#2D9CDB26] rounded-xl p-2 m-2 mt-3'><Calendar className='h-[34px] w-[34px]  ' /></div>
        <div className='h-[45px] w-[140px] ml-4 mt-3'>
          <h1 className='h-[22px]w-[107px] text-[18px] font-medium'>Filter Periode</h1>
          <span className='h-[15px]w-[160px] text-[10px] font-normal '>17 April 2020-21 May 2020</span>
        </div>
        <div className='ml-8 mt-6'><ChevronDown className='h-[24px]w-[24px] ' /></div>
      </div>
    </div>
  )
}

export default Dashboard