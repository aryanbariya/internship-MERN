import React from 'react'
import Navbar from './Navbar'
import Dashboard from './Dashboard'
import Total from './Total'
import Piechart from './Piechart'
import Chartorder from './Chartorder'
import RevenueLineChart from './RevenueLineChart'
import CustomerMapChart from './CustomerMapChart'
import CustomerReview from './CustomerReview'
import { ClipboardList, PackageCheck,SquareX,ShieldCheck   } from 'lucide-react';

function Content() {
  return(
    <div className='w-[1574px] h-[1872px] bg-[#F3F2F7] px-[53px] ' >
      {/* < className='w-[1200px] h-200vh border-2'> */}
        <Navbar />
        <Dashboard />
        <div className="flex space-x-16  mt-[20px]">
          <Total count="75" label="Total Orders" percentage="4% (30 days)" Icon={ClipboardList} />
          <Total count="357" label="Total Delivered" percentage="4% (30 days)" Icon={PackageCheck} />
          <Total count="65" label="Total Canceled" percentage="25% (30 days)" Icon={SquareX }/>
          <Total count="128" label="Total Revenue" percentage="12% (30 days)" Icon={ShieldCheck }/>
        </div>
        <div className='flex space-x-36'>
          <Piechart />
          <Chartorder />
        </div>
        <div className=' mt-[25px] flex space-x-[40px] '>
          <RevenueLineChart />
          <CustomerMapChart />
        </div>
        <div className='mt-[25px]'>
          <CustomerReview />
        </div>

      


    </div>
  )
}

export default Content