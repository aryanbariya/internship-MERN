import React from 'react'
import { ArrowDownToLine } from 'lucide-react';
import CustomLineChart from './LineChart'

function Chartorder() {
    return (
        <div className='w-[554px] h-[327px]  bg-white  rounded-xl mr-[54px]  mt-[25px]'>
            <div className='w-[554px] h-[43px] flex justify-between pt-[30px]' >
                <div className='flex-col'>
                    <div className='w-[180px] h-[29px] font-bold text-[24px]  ml-[10px] '>Chart Order</div>
                    <span className='w-[180px] h-[29px] font-normal text-[#B9BBBD] text-[14px]  ml-[10px] '>Lorem ipsum dolor sit amet, consectetur </span>
                </div>
                <div className=''>
                    <div className='w-[185px] h-[47px] flex border border-[#2D9CDB] rounded-2xl justify-center items-center mr-[40px] mt-[10px]'>
                        <ArrowDownToLine className='w-[24px] h-[24px] text-[#2D9CDB]' />
                        <button className='w-[101px] h-[24px] text-[#2D9CDB]'>Save Report</button>
                    </div>
                </div>
            </div>
            <div className='h-[300px] w-[500px] '>
            <div style={{ width: '500px', height: '70%' }}>
                <CustomLineChart />
            </div>

            </div>

        </div>
    )
}

export default Chartorder