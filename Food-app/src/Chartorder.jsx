import React from 'react'
import { ArrowDownToLine } from 'lucide-react';
import CustomLineChart from './LineChart'

function Chartorder() {
    return (
        <div className='w-[718px] h-[327px]  bg-white  rounded-xl   mt-[25px]'>
            <div className='w-[550px] h-[43px] flex justify-between pt-[20px]' >
                <div className='flex-col'>
                    <div className='w-[180px] h-[29px] font-bold text-[24px]  ml-[10px] '>Chart Order</div>
                    <span className='w-[180px] h-[29px] font-normal text-[#B9BBBD] text-[14px]  ml-[10px] '>Lorem ipsum dolor sit amet, consectetur </span>
                </div>
                <div className='ml-auto'>
                    <div className='w-[185px] h-[47px] flex border border-[#2D9CDB] rounded-2xl justify-center items-center mt-[10px]'>
                        <ArrowDownToLine className='w-[24px] h-[24px] text-[#2D9CDB]' />
                        <button className='w-[101px] h-[24px] text-[#2D9CDB]'>Save Report</button>
                    </div>
                </div>
            </div>
            <div className='h-[700px] w-[300px] px-2'>
            <div style={{ width: '600px', height: '300px' }}>
                <CustomLineChart />
            </div>

            </div>

        </div>
    )
}

export default Chartorder