import React from 'react'
import { EllipsisVertical } from 'lucide-react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'
function Piechart() {
    const percentage1 = 81;
    const percentage2 = 22;
    const percentage3 = 62;
    return (
        <div className='w-[554px] h-[327px]  bg-white  rounded-xl ml-[54px] mt-[25px]'>
            <div className='w-[554px] h-[43px] flex justify-between pt-[30px]' >
                <span className='w-[180px] h-[29px] font-bold text-[24px]  ml-[10px] '>Pie Chart</span>
                <div className='flex'>
                    <div className='w-[80px] h-[24px]  flex'>
                        <div className='w-[24px] h-[24px]'><div className='w-[18px] h-[18px] border'></div></div>
                        <div className='w-[44px] h-[22px] text-[14px] font-semibold'>Chart</div>
                    </div>
                    <div className='w-[127px] h-[24px]  flex space-x-1'>
                        <div className='w-[18px] h-[18px] border-2 flex justify-center items-center'><div className='w-[12px] h-[12px] border bg-red-600'></div></div>
                        <div className='w-[91px] h-[22px] text-[14px] font-semibold'>Show Value</div>
                    </div>
                    <div className='w-[38px] h-[38px] '>
                        <div className='w-[20px] h-[20px]'><EllipsisVertical className='h-full w-full ' /></div>
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center px-[15px] pt-[45px]'>
                <div className='w-[153px] h-[200px] space-y-3'>
                    <CircularProgressbar value={percentage1} text={`${percentage1}%`} strokeWidth={16} styles={{
                        path: {
                            stroke: "#d6002d", // Change the progress bar color
                        },
                        text: {
                            fill: "#333", // Text color
                            fontSize: "16px", // Text font size
                        },
                        trail: {
                            stroke: "#d6d6d6", // Background trail color
                        },
                    }} />
                    <span className='w-[153px] h-[22px] text-[16px] font-semibold ml-6 '>Total Order</span>
                </div>
                <div className='w-[153px] h-[200px] space-y-3'>
                    <CircularProgressbar value={percentage2} text={`${percentage2}%`} strokeWidth={16} styles={{
                        path: {
                            stroke: "#451be5", // Change the progress bar color
                        },
                        text: {
                            fill: "#333", // Text color
                            fontSize: "16px", // Text font size
                        },
                        trail: {
                            stroke: "#d6d6d6", // Background trail color
                        },
                    }} />
                    <span className='w-[153px] h-[22px] text-[16px] font-semibold ml-4 '>Customer Growth</span>
                </div>
                <div className='w-[153px] h-[200px] space-y-3'>
                    <CircularProgressbar value={percentage3} text={`${percentage3}%`} strokeWidth={16} styles={{
                        path: {
                            stroke: "#894122", // Change the progress bar color
                        },
                        text: {
                            fill: "#333", // Text color
                            fontSize: "16px", // Text font size
                        },
                        trail: {
                            stroke: "#d6d6d6", // Background trail color
                        },
                    }} />
                    <span className='w-[153px] h-[22px] text-[16px] font-semibold ml-6 '>Total Revenue</span>
                </div>


            </div>


        </div>
    )
}
3
export default Piechart