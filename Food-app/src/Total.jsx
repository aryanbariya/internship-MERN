import React from 'react'
import { ClipboardList, ArrowUp } from 'lucide-react';

function Total({ count, label, percentage }) {
    return (
        <div className="w-[227px] h-[172px] p-3 flex justify-center items-center relative bg-white rounded-xl">
            <div className="w-[216px] h-[99px] relative  flex items-center">
                <div className="w-[85px] h-[85px] rounded-full bg-[#2D9CDB26] flex justify-center items-center">
                    <ClipboardList className="h-12 w-12" />
                </div>
                <div className="w-[92px] h-[99px] absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col justify-center items-center">
                    <div className="h-[45px] w-[72px] text-[40px] font-bold text-[#0b0a0c] leading-none">{count}</div>
                    <div className="h-[20px] w-[104px] text-[15px] mr-4 text-[#1a191e] font-semibold">{label}</div>

                    <div className="w-[88px] h-[18px] flex space-x-1 items-center mt-2">
                        <div className="w-[18px] h-[18px] bg-[#2D9CDB26] rounded-full flex justify-center items-center">
                            <ArrowUp className="w-[16px] h-[16px]" />
                        </div>
                        <div className="w-[70px] h-[18px] text-[10px]">{percentage}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Total