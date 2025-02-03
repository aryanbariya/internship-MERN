import React from 'react'
import Navbar from './Navbar'
import Dashboard from './Dashboard'
import Total from './Total'
import Piechart from './Piechart'
import Chartorder from './Chartorder'
import RevenueLineChart from './RevenueLineChart'
import CustomerMapChart from './CustomerMapChart'

function Content() {
  return (
    <div className='w-[1200px] h-200vh bg-[#130b361f]  ' >
      <Navbar />
      <Dashboard />
      <div className="flex space-x-16 ml-[54px] mt-[20px]">
        <Total count="75" label="Total Orders" percentage="4% (30 days)" />
        <Total count="357" label="Total Delivered" percentage="4% (30 days)" />
        <Total count="65" label="Total Canceled" percentage="25% (30 days)" />
        <Total count="128" label="Total Revenue" percentage="12% (30 days)" />
      </div>
      <div className='flex space-x-4'>
        <Piechart />
        <Chartorder />
      </div>
      <div className='ml-[54px] mt-[25px] flex space-x-4 '>
        <RevenueLineChart />
        <CustomerMapChart/>
      </div>


    </div>
  )
}

export default Content