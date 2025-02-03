import React from 'react'
import { Search } from 'lucide-react';
import { Bell } from 'lucide-react';
import { MessageCircleMore } from 'lucide-react';
import { Gift } from 'lucide-react';
import { Settings } from 'lucide-react';


function Navbar() {
    return (
        <div className="flex  w-[1108px] h-[56px] ml-[54px]  mt-[41px] left-[402px] gap-[0px]  pr-[15px]">
            <div className="w-[650px] h-[56px] bg-white pt-4 rounded-[6px]">
                <div className='flex w-[650px] h-[26px] px-2'>
                    <input className=' w-[626px] h-full' type="search" name="" id="" placeholder='Search' />
                    <Search className='w-[24px] h-full' strokeWidth={1} />
                </div>
            </div>
            {/* <div className="w-[291px] h-[54px]">icons
            <Bell />
            <MessageCircleMore />
            <Gift />
            <Settings />
            </div> */}
            <div className="w-[291px] h-[54px] flex items-center justify-between px-7">
                <span className="w-[28px] h-[28px]"><Bell className="w-full h-full" /></span>
                <span className="w-[28px] h-[28px]"><MessageCircleMore className="w-full h-full" /></span>
                <span className="w-[28px] h-[28px]"><Gift className="w-full h-full" /></span>
                <span className="w-[28px] h-[28px]"><Settings className="w-full h-full" /></span>
            </div>
            <div className="w-[189px] h-[56px] rounded-tl-[63px] flex gap-2">
                <div className='w-[110px] h-[56px] pt-3 '>Hello!Samantha</div>
                <span ><img className='w-[56px] h-[56px]' src="https://s3-alpha-sig.figma.com/img/9e1c/6933/670791a7be1efeb4c6ca1dbefb8bf86f?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KTfY2SZv03gHxEGKrkc-6vkEAwLYLGg9XguwKvrVokCu5Ps02doig7fI2iqDXJz4wnTQIE7XVo-5NV0eLch51whi3xYb-U7yBUVkuqhist~W9NaonarlV4HFJ1TEje4LYnUyoyfL4dXMcEOad40ojc20ulJUYzSQe4D4JRt55QimcXUuhQ1vSOaeMi5i1mivLaN484n8dQ6SjympeVil6lWfqNPGUbOi28taTati7D9NSyEDuXvoLKEMiKh0lVw-fbe5q7ES5qVrr6v8WMifcoJ6LDx8jtK8HNqAc75AV4dEYpaVHAB7AGAFalPBhbwRon7uGv-7RxyBSwQNY3TD~A__" alt="" /></span>
            </div>
        </div>

    )
}

export default Navbar